import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserInfo = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    
    const {data: userInfo } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/user/${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return userInfo;

}

export default useUserInfo;