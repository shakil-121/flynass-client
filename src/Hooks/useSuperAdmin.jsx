import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSuperAdmin = () => {
    const { user, loadding } = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const { data: isSupperAdmin, isLoading: isSupperAdminLoading } = useQuery({
        queryKey: ['isSupperAdmin', user?.email],
        enabled: !loadding,
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/superadmin/${user?.email}`);
            return res.data.admin;

        }
    })
    return [isSupperAdmin, isSupperAdminLoading]
}
export default useSuperAdmin;