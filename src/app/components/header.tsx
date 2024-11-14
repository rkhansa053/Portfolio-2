'use client'
import {useState} from 'react';
import { userInfo, headerButtons } from "@/constants/constant";
import { NavItems } from "@/models/header";
import { FiMenu } from "react-icons/fi";
import {Link as ScrollLink} from 'react-scroll'


const Header: React.FC = () => {
    const [NavItems, shownavItems] = useState<boolean>(false)
    return(
        <header className="bg-white	p-6 justify-between fixed top-0 w-full z-10 md:flex ">
            <div className='flex justify-between'>
                <h1 className="text-2xl font-bold">{userInfo.name}</h1>
                <FiMenu
                size={30}
                className='md:hidden'
                onClick={() => shownavItems(prevState => !prevState)}/>
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ NavItems ? 'block' : 'hidden'}`}>
                {
                   Object.keys (headerButtons).map(items => (
                        <ScrollLink
                           to={headerButtons[items as keyof NavItems].page}
                          key={headerButtons[items as keyof NavItems].label}
                          className="block md:inline-block cursor-pointer"
                          spy={true}
                          smooth={true}
                        >{headerButtons[items as keyof NavItems].label}</ScrollLink>
                    ))
                }
            </div>
        </header>
    )

}

export default Header;