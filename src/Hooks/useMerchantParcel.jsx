import React from 'react';
import useAuth from './useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl } from '../config/api';

const useMerchantParcel = () => {
    const [MerchantParcel, SetMerchantParcel] = useState([]);
    const { user, loadding } = useAuth()

    useEffect(() => {
        fetch(`${baseUrl}/user/order/${user?.email}`)
            .then(res => res.json())
            .then(data => SetMerchantParcel(data))
    }, [])

    return MerchantParcel;
};

export default useMerchantParcel;