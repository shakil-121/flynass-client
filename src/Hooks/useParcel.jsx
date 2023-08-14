import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { baseUrl } from '../config/api';

const useParcel = () => {
    const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
        const res = await fetch(`${baseUrl}/orders`)
        return res.json();
    })

    return [parcel, refetch];
};

export default useParcel;