import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const Page = ({ data }) => {
    const [details, setDetails] = useState({});
    useEffect(() => {
        if (data) {
            setDetails(data);
        }
    }, [data]);
    if (Object.keys(details).length === 0 && details.constructor === Object) {
        return <Loading />;
    }
    console.log(details);
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl md:text-5xl font-bold underline">TITLE</h1>
            <h1 className="text-3xl py-4">{details.event.title}</h1>
            <h1 className="text-3xl md:text-5xl font-bold underline">
                Description
            </h1>
            <h1 className="text-3xl py-4">{details.event.description}</h1>
            <h1 className="text-3xl md:text-5xl font-bold underline">City</h1>
            <h1 className="text-3xl py-4">{details.event.city}</h1>
            <h1 className="text-3xl md:text-5xl font-bold underline">
                Target Price
            </h1>
            <h1 className="text-3xl py-4">{details.event.targetPrice}</h1>

            <Link href="/" passHref>
                <div className="mt-16 text-3xl hover:underline cursor-pointer hover:text-blue-500 text-blue-500 md:text-black">
                    Home
                </div>
            </Link>
        </div>
    );
};

export default Page;

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(
        `http://hiring-tests.herokuapp.com/event/${params.id}`
    );
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};
