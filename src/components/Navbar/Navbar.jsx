import React, { useState } from 'react'

const Navbar = () => {
    const [navbarScroll, setNavbarScroll] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 330 ? setNavbarScroll(true) : setNavbarScroll(false);
    };

    window.addEventListener("scroll", changeBackground);
    return (
        navbarScroll ? null : <div className='w-full h-[70px] bg-neutral-500 z-10'></div>
    )
}

export default Navbar