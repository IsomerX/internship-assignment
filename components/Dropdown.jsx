import React from "react";
import Link from "next/link";

const Dropdown = ({ id }) => {
    return (
        <div className="absolute -right-[200px] py-2 bg-white shadow-md text-md text-left flex flex-col gap-2">
            <Link href={`/event/${id}`} passHref>
                <div className="hover:bg-[#d9d9d9c6] px-2">View Campaign</div>
            </Link>
            <div className="hover:bg-[#d9d9d9c6] px-2">Delete Campaign</div>
            <div className="hover:bg-[#d9d9d9c6] px-2">Edit Campaign</div>
        </div>
    );
};

export default Dropdown;
