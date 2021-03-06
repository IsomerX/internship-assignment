import { useEffect, useState } from "react";
import Head from "next/head";
import Table from "../components/Table";
import Loading from "../components/Loading";

export default function Home({ profile, events }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (events) {
            setData(events);
        }
    }, [events]);

    if (data.length === 0) {
        return <Loading />;
    } else
        return (
            <div>
                <Head>
                    <title>Assignment</title>
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content="upgrade-insecure-requests"
                    ></meta>
                </Head>
                <Table data={data} />
            </div>
        );
}

export async function getServerSideProps() {
    const profileRes = await fetch(
        "http://hiring-tests.herokuapp.com/profile",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzAxNjU4ZTUzYTdhZTUzOWU1MDIzZiIsImVtYWlsIjoieXByaXR3YW5pQGdtYWlsLmNvbSIsImlhdCI6MTY0NzMxOTU2MiwiZXhwIjozMjk5ODIzMTI0fQ.8Q2A1gGoEkRTJ6kgDUZNA7sM2b7x44lGqrscy3UheNE",
            },
        }
    );
    const profileData = await profileRes.text();
    const profile = JSON.parse(profileData);

    const eventsRes = await fetch(
        "http://hiring-tests.herokuapp.com/listEvents"
    );
    const eventsData = await eventsRes.text();
    const events = JSON.parse(eventsData);

    return {
        props: { events },
    };
}
