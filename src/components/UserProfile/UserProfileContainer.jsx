import React, { useState } from 'react'
import UserProfile from './UserProfile'

const UserProfileContainer = () => {
    const [userInfoScroll, setUserInfoScroll] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 330 ? setUserInfoScroll(true) : setUserInfoScroll(false);
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <UserProfile userInfoScroll={userInfoScroll} />
    )
}

export default UserProfileContainer