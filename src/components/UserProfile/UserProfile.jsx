import React from 'react'
import UserNavbar from '../UserNavbar/UserNavbar'

const UserProfile = ({ userInfoScroll }) => {
    return (
        <div className='w-full h-screen mb-96 bg-black' id='userInfo'>
            {userInfoScroll ? (
                <UserNavbar />
            ) : null}
            <section className='relative w-full h-[330px] bg-neutral-900 bg-[url("https://images3.alphacoders.com/132/1322308.jpeg")] bg-no-repeat bg-left bg-cover'>
                <div className='flex gap-4 absolute bottom-0 py-6 px-6'>
                    <img className='bg-neutral-200 w-28 h-28 rounded-lg shadow-md' src='https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-anime-pfp-2-23.jpg' alt='Rounded edges avatar'></img>
                    <div className='pt-4'>
                        <h1 className='text-4xl font-bold text-white'>juanigarciadev</h1>
                        <p className='text-neutral-300 text-sm'>Coder and designer</p>
                    </div>
                </div>
            </section>
            <section className='flex items-center justify-between px-6 w-full h-[70px] bg-neutral-900'>
                <div className='flex bg-neutral-800 py-2 px-4 rounded-lg divide-x-[1px] divide-neutral-700 text-white'>
                    <p className='pr-2 text-neutral-300 text-sm'>40 Projects</p>
                    <p className='px-2 text-neutral-300 text-sm'>10834 Followers</p>
                    <p className='px-2 text-neutral-300 text-sm'>172 Followed</p>
                </div>
                <div>
                    <button className='flex justify-center w-fit h-fit text-sm items-center text-center bg-green-700 text-white gap-2 px-4 py-3 rounded-sm cursor-pointer font-medium select-none hover:bg-green-800'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg>Follow</button>
                </div>
            </section>

        </div>
    )
}

export default UserProfile