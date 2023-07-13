import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=>{
        document.title=`${title} | Flynass - Best courier and parcel delivery service in Bangladesh`
    },[title])
};

export default useTitle;