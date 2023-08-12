import { useEffect } from 'react';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (!loading && user?.email) {
            (async () => {
                try {
                    const res = await axiosSecure.get(`/user`);
                    setIsAdmin(res.data.admin);
                } catch (error) {
                    // Handle error
                } finally {
                    setIsAdminLoading(false);
                }
            })();
        } else {
            setIsAdminLoading(false);
        }
    }, [user, loading, axiosSecure]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;

