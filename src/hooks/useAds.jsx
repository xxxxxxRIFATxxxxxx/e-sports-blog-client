import { useEffect, useState } from "react";

const useAds = () => {
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    const createAds = (ads) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/ads`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ads),
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

    const updateAds = (ads) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/ads/${ads._id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ads),
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

    const deleteAds = (id) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/ads/${id}`, {
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

    const getAds = (id) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_API_URL}/ads/${id}`)
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

        fetch(`${process.env.REACT_APP_API_URL}/ads`)
            .then((res) => res.json())
            .then((data) => {
                const result = data.result;
                setAds(result);
                setIsLoading(false);
                setSuccessMessage("Ads Fetched Successfully!");
            })
            .catch((error) => {
                setErrorMessage(error);
                setIsLoading(false);
            });
    }, [ads]);

    return {
        ads,
        isLoading,
        successMessage,
        errorMessage,
        createAds,
        updateAds,
        deleteAds,
        getAds,
    };
};

export default useAds;
