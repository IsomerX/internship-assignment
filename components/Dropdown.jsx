import React from "react";
import Link from "next/link";
import Eye from "../public/assets/eye.png";
import Cross from "../public/assets/cross.png";
import Edit from "../public/assets/edit.png";
import Image from "next/image";

const Dropdown = ({ id }) => {
    return (
        <div className="absolute lg:-right-[200px] right-0 z-10 py-2 bg-white shadow-md text-md text-left flex flex-col gap-2">
            <Link href={`/event/${id}`} passHref>
                <div className="hover:bg-[#d9d9d9c6] px-2 flex cursor-pointer pl-4">
                    <Image src={Eye} alt="eye" height="20" width="20" layout="fixed" />
                    <div className="ml-2">View Campaign</div>
                </div>
            </Link>
            <div className="hover:bg-[#d9d9d9c6] px-2">
                <div className="hover:bg-[#d9d9d9c6] px-2 flex">
                    <Image src={Cross} alt="eye" height="20" width="20" layout="fixed" />
                    <div className="ml-2">Delete Campaign</div>
                </div>
            </div>
            <div className="hover:bg-[#d9d9d9c6] px-2">
                <div className="hover:bg-[#d9d9d9c6] px-2 flex">
                    <Image src={Edit} alt="eye" height="20" width="20" layout="fixed" />
                    <div className="ml-2">Edit Campaign</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
