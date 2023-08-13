import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query'

const useNotice = () => { 
    const [axiosSecure] = useAxiosSecure(); 

    const {data: UpdatedNotice } = useQuery({
        // queryKey: ['notice',notice],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/get_notice`)
            // console.log('res from axios', res)
            return res.data;
            // console.log(res.data);
        },
    })
    return UpdatedNotice;
};

export default useNotice;