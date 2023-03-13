import { useEffect, useState } from "react";

const useVideos = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    const createVideo = (video) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/videos`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video),
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

    const updateVideo = (video) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/videos/${video._id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video),
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

    const deleteVideo = (id) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/videos/${id}`, {
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

    const getVideo = (id) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/videos/${id}`)
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

        fetch(`${process.env.REACT_APP_API_URL}/videos`)
            .then((res) => res.json())
            .then((data) => {
                const result = data.result;
                setVideos(result);
                setIsLoading(false);
                setSuccessMessage("Videos Fetched Successfully!");
            })
            .catch((error) => {
                setErrorMessage(error);
                setIsLoading(false);
            });
    }, [videos]);

    return {
        videos,
        isLoading,
        successMessage,
        errorMessage,
        createVideo,
        updateVideo,
        deleteVideo,
        getVideo,
    };
};

export default useVideos;
