import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const access_token = JSON.parse(localStorage.getItem("access_token"));

  const createBlog = (blog) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
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

  const updateBlog = (blog) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs/${blog._id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
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

  const deleteBlog = (id) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`, {
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

  const getLimitedBlogs = (blogCount) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs?limit=${blogCount}`)
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

  const getBlogsByCategory = (category) => {
    const promise = new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_URL}/blogs?category=${category}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
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
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog,
    getLimitedBlogs,
    getBlogsByCategory,
  };
};

export default useBlogs;
