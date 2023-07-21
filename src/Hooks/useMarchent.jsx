import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useMarchent = () => {
    const {user, loadding} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data: isMerchant, isLoading: isMerchantLoading} = useQuery({
        queryKey: ['isMerchant', user?.email],
        enabled: !loadding,
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/merchant/${user?.email}`);
            return res.data.admin;
            
        }
    })
    return [isMerchant, isMerchantLoading]
}
export default useMarchent;