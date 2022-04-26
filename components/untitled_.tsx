import React from "react";

interface Untitled_Props {
    children: JSX.Element
}
 
const Untitled_ = ({ children }: Untitled_Props) => {
    return ( 
        <div className={`flex flex-col h-[0px] w-[0px]`}>
            { children }
        </div>
     );
}
 
export default Untitled_;