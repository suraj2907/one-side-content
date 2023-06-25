import React ,{useState} from "react";

import PackageContext from "./context"

const Provider =(props) => {
    const [mission , setmission] = useState( {
        mname: "Go to Russia",
        agent : "007",
        accept : "Not Accepted"
    });
    
    return(
        <PackageContext.Provider value={{
            data :mission ,
            isMissionAccepted : () => {
                setmission({...mission , accept : "ACCEPTED"})
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;