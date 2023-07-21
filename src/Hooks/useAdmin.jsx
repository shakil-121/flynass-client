import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user, loadding} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loadding,
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data.admin;
            
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;