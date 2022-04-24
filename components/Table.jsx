import React, { useState } from "react";
import EventRow from "./EventRow";
import Header from "./Header";

const Table = ({ data }) => {
    let events = data["events"];
    let [active, setActive] = useState("");
    let rows;

    const clickHandler = (id) => {
        setActive(id);
    };

    if (events) {
        rows = events.map((event) => {
            if (event?.title)
                return (
                    <EventRow
                        key={event.id}
                        {...event}
                        clickHandy={clickHandler}
                        active={active}
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
