import { useEffect, useState } from "react";

const useInsta = () => {
  const [insta, setInsta] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const access_token = JSON.parse(localStorage.getItem("access_token"));

  const createInsta = (insta) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/insta`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(insta),
      })
        .then((res) => res.json())
        .then((data) => {
          const result = data.message;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const updateInsta = (insta) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/insta/${insta._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(insta),
      })
        .then((res) => res.json())
        .then((data) => {
          const result = data.message;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const deleteInsta = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/insta/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const result = data.message;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const getInsta = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/insta/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.result;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.REACT_APP_API_URL}/insta`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.result;
        setInsta(result);
        setIsLoading(false);
        setSuccessMessage("Insta Fetched Successfully!");
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, [insta]);

  return {
    insta,
    isLoading,
    successMessage,
    errorMessage,
    createInsta,
    updateInsta,
    deleteInsta,
    getInsta,
  };
};

export default useInsta;
