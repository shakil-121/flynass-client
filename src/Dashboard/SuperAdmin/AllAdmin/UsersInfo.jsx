import React from 'react';

const UsersInfo = ({ user }) => {
    return (
        <div>
            <tr>
                <td>{user.email}</td>
            </tr>
        </div>
    );
};

export default UsersInfo;