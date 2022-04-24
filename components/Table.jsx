import React, { useState } from "react";
import EventRow from "./EventRow";
import Header from "./Header";
import { useRouter } from "next/router";

const Table = ({ data }) => {
    let events = data["events"];
    let [active, setActive] = useState("");
    let rows;
    let router = useRouter();

    const clickHandler = (id) => {
        if (id === active) setActive("");
        else setActive(id);
    };

    const deleteHandler = async (id) => {
        let response = await fetch(
            `http://hiring-tests.herokuapp.com/deleteEvent/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzAxNjU4ZTUzYTdhZTUzOWU1MDIzZiIsImVtYWlsIjoieXByaXR3YW5pQGdtYWlsLmNvbSIsImlhdCI6MTY0NzMxOTU2MiwiZXhwIjozMjk5ODIzMTI0fQ.8Q2A1gGoEkRTJ6kgDUZNA7sM2b7x44lGqrscy3UheNE",
                },
            }
        );
        if (response.ok) {
            router.push("/");
        }
    };

    if (events) {
        rows = events.map((event) => {
            if (event?.title)
                return (
                    <EventRow
                        key={event["_id"]}
                        {...event}
                        clickHandy={clickHandler}
                        active={active}
                        deleteId={deleteHandler}
                    />
                );
        });
    }
    return (
        <div className="flex items-center w-full flex-col">
            <Header />
            {rows}
        </div>
    );
};

export default Table;
