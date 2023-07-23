import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserInfo = () => {
    const {user}=useAuth()
    const [axiosSecure] = useAxiosSecure();
    // console.log(user);
    
    const {data: userInfo } = useQuery({
        queryKey: ['user', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/user/${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
            // console.log(res.data);
        },
    })

    return userInfo;

}

export default useUserInfo;