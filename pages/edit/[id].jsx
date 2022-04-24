import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

const Editing = ({ id }) => {
    const status = useRef();
    const category = useRef();
    const city = useRef();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {};
        if (status.current.value) data["status"] = status.current.value;
        if (category.current.value) data["category"] = category.current.value;
        if (city.current.value) data["city"] = city.current.value;

        let response = await fetch(
            `http://hiring-tests.herokuapp.com/editEvent/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzAxNjU4ZTUzYTdhZTUzOWU1MDIzZiIsImVtYWlsIjoieXByaXR3YW5pQGdtYWlsLmNvbSIsImlhdCI6MTY0NzMxOTU2MiwiZXhwIjozMjk5ODIzMTI0fQ.8Q2A1gGoEkRTJ6kgDUZNA7sM2b7x44lGqrscy3UheNE",
                },
                body: {
                    event: data,
                },
            }
        );
        if (response.ok) {
            router.push("/");
        }
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl font-medium py-10">Editing: {id}</h1>
            <form className="flex flex-col text-left text-3xl gap-4">
                <label htmlFor="Status" className="font-medium">
                    Status
                </label>
                <input
                    name="Status"
                    className="border-gray-300 border-b-2"
                    ref={status}
                />
                <label htmlFor="Category" className="font-medium">
                    Category
                </label>
                <input
                    name="Category"
                    className="border-gray-300 border-b-2"
                    ref={category}
                />
                <label htmlFor="City" className="font-medium">
                    City
                </label>
                <input
                    name="City"
                    className="border-gray-300 border-b-2"
                    ref={city}
                />
                <button
                    className="mt-10 bg-green-500 py-3 text-white"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Editing;

export const getServerSideProps = async ({ params }) => {
    return {
        props: {
            id: params.id
        },
    };
};
