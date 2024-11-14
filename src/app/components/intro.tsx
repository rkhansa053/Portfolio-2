'use client'
import { headerButtons, userInfo } from "@/constants/constant";
import Image from "next/image";
import {Link as ScrollLink} from 'react-scroll';


const Intro: React.FC = () =>{
    return(
        <section 
        id= {headerButtons.home.page}
        className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-center">
            <div>
                <Image 
                  src={userInfo.picture}
                  alt="dp"
                  width={400}
                  height={500}
                  className="rounded-full shadow-2xl mt-10"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h2 className="text-7xl uppercase hidden md:block">Frontened Developer</h2>
                <h2 className="text-2xl mt-5 md:text-3xl">
                Hi, I&#39;m <span className="text-red-600 text-3xl md:text-4xl" >{userInfo.name}</span></h2>
                <p 
                   className="mt-4 mb-4"
                   dangerouslySetInnerHTML={{__html: userInfo.heading}} />
                <ScrollLink
                     to={headerButtons.projects.page}
                    className="bg-teal-600 flex items-center justify-center w-28 h-10 rounded text-neutral-100"
                    spy={true}
                    smooth={true}>
                    Projects</ScrollLink>
            </div>

        </section>
    )
}

export default Intro;