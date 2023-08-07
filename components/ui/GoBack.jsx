const GoBack = ({ color }) => {
    return ( 
        <div className={`inline-flex gap-x-[0.8rem] items-center justify-center text-bold ${color}`}>
            <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 5 10" fill="none">
                    <path d="M4 9L0 5L4 1" stroke={color ? '#CDD2EE' : "#4661E6"} stroke-width="2"/>
                </svg>
            </span>
            <span className="hover:underline cursor-pointer transition font-bold text-sm not-italic leading-normal">Go Back</span>
        </div>
     );
}
 
export default GoBack;