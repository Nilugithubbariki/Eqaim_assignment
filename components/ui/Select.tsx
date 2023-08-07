import React from "react";

const Select = ({name}) => {
    return ( 
        <div className="rounded-[0.625rem] bg-[#f2f4ff] flex items-center justify-center transition hover:bg-[#CFD7FF] cursor-pointer">
            <span className="p-[0.38rem_1rem] font-semibold text-sm not-italic leading-normal text-[#4661E6]">{name}</span>
        </div>
     );
}

export default Select;