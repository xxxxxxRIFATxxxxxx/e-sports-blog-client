import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getBlog = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
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

    fetch(`${process.env.REACT_APP_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.result;
        console.log("SS", data);
        setBlogs(result);
        setIsLoading(false);
        setSuccessMessage("Blogs Fetched Successfully!");
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, [blogs]);

  return {
    blogs,
    isLoading,
    successMessage,
    errorMessage,
    getBlog,
  };
};

export default useBlogs;
