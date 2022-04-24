import React, { useState } from "react";
import Image from "next/image";
import more from "../public/assets/more.png";
import Dropdown from "./Dropdown";

const EventRow = ({ title, status, amount, targetPrice, _id: id, clickHandy, active }) => {
    return (
        <div className="grid grid-cols-4 py-4 w-full lg:w-3/5 text-center relative hover:bg-[#d9d9d916]">
            <div>{title}</div>
            <div>
                <span className="bg-[#cafac9] py-1 px-2 rounded-md">
                    {status}
                </span>
            </div>
            <div>{`₹${amount} out of ₹${targetPrice}`}</div>
            <div>Due Date</div>
            <div
                className="absolute -right-10 h-[40px] w-[40px] mt-2 rounded-full grid place-items-center p-2 hover:bg-[#d9d9d9] hover:cursor-pointer"
                onClick={(e) => clickHandy(id)}
            >
                <Image
                    src={more}
                    width={20}
                    height={20}
                    layout="fixed"
                    alt=""
                />
            </div>
            {active===id && <Dropdown id={id} />}
        </div>
    );
};

export default EventRow;
