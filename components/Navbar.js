import { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';

const Navbar = ({ selectedTab, tabChange }) => {

    const [_tab, setTab] = useState(0);

    useEffect(e => {
        themeChange(false);
    }, [])

    return (
        <>
            <div className="fixed z-50 top-0 left-0 w-full navbar mb-40 py-8 rounded-none shadow-none px-5 lg:px-32 items-start">
                <div className="navbar-start" >
                    <p onClick={e => { tabChange(1); }} className="cursor-pointer select-none hover:underline hover:font-bold transition-all duration-100">Gerald Chavez</p>
                </div>
                <div className="navbar-end text-right items-start gap-10">
                    <ul className=''>
                        <li data-toggle-theme="customDark,customLight" className="cursor-pointer hover:underline hover:font-bold transition-all duration-100">Switch Theme</li>
                    </ul>
                    {/* <ul className='w-20 text-right flex flex-col justify-end'>
                        <li onClick={e => { tabChange(1); }} className="cursor-pointer hover:underline hover:font-bold transition-all duration-100">Home</li>
                        <li className="cursor-pointer hover:underline hover:font-bold transition-all duration-100">Works</li>
                        <li className="cursor-pointer hover:underline hover:font-bold transition-all duration-100">About</li>
                        <li className="cursor-pointer hover:underline hover:font-bold transition-all duration-100">Contact</li>
                    </ul> */}
                </div>
            </div>
        </>
    )
}

export default Navbar