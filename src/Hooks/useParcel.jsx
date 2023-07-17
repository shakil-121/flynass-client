import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useParcel = () => {
    const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
        const res = await fetch('http://localhost:5000/orders')
        return res.json();
    })

    return parcel;
};

export default useParcel;