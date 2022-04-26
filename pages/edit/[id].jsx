import React, { useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

const Editing = ({ id }) => {
    const [status, setStatus] = useState("");
    const [category,setCategory] = useState("");
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    console.log(status);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzAxNjU4ZTUzYTdhZTUzOWU1MDIzZiIsImVtYWlsIjoieXByaXR3YW5pQGdtYWlsLmNvbSIsImlhdCI6MTY0NzMxOTU2MiwiZXhwIjozMjk5ODIzMTI0fQ.8Q2A1gGoEkRTJ6kgDUZNA7sM2b7x44lGqrscy3UheNE"
        );
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("status", status);
        urlencoded.append("category", category);
        urlencoded.append("city", city);

        var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            `http://hiring-tests.herokuapp.com/editEvent/${id}`,
            requestOptions
        )
            .then((response) => {
                setLoading(false);
                if (response.ok) {
                    router.push("/");
                }
                return response.text();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };


    return (<div>
        {loading && <Loading />}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl font-medium py-10">Editing: {id}</h1>
            <form className="flex flex-col text-left text-3xl gap-4">
                <label htmlFor="Status" className="font-medium">
                    Status
                </label>
                <input
                    name="Status"
                    className="border-gray-300 border-b-2"
                    onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="Category" className="font-medium">
                    Category
                </label>
                <input
                    name="Category"
                    className="border-gray-300 border-b-2"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor="City" className="font-medium">
                    City
                </label>
                <input
                    name="City"
                    className="border-gray-300 border-b-2"
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="mt-10 bg-green-500 py-3 text-white"
                    onClick={handleSubmit}
                    >
                    Submit
                </button>
            </form>
        </div>
                    </div>
    );
};

export default Editing;

export const getServerSideProps = async ({ params }) => {
    return {
        props: {
            id: params.id,
        },
    };
};
