import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSuperAdmin = () => {
    const {user, loadding} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data: isSupperAdmin, isLoading: isSuperAdminLoading} = useQuery({
        queryKey: ['isSupperAdmin', user?.email],
        enabled: !loadding,
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/superadmin/${user?.email}`);
            return res.data.super_admin;
            
        }
    })
    return [isSupperAdmin,isSuperAdminLoading]
}
export default useSuperAdmin;