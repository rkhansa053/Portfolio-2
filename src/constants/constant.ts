import { UserObject } from "@/models/user"
import { NavItems } from "@/models/header"


export const userInfo:UserObject = {
    name: 'Khansa Rahman',
    picture: 'https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg',
    heading: 'I&#39;m a Frontened Developer, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built simple websites, desktop applications.',
    about: `
    <p>I am a passionate Frontened Developer, I am just working on some projects.</p>
    <p>I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
    `,
        skills: ['Next','HTML', 'CSS', 'Javascript', 'Typescript'],   
    };


export const headerButtons:NavItems = {
    home: {label: 'Home', page: 'home'},
    about: {label: 'About', page: 'about'},
    projects: {label: 'Projects', page: 'projects'}
}

export const projects = {
    CountdownTimer: {image: 'https://img.freepik.com/premium-vector/countdown-timer-template-website-application_6735-822.jpg'},
    SimpleCalculator: {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuqZpxzUU47pk2cEyKSGy_S7CXBoAszF80A&s'},
    TodoList: {image: 'https://www.shutterstock.com/image-vector/do-list-planning-icon-concept-600nw-739093225.jpg'},
    CurrencyConverter: {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTeE_8Odp1aWhYt9-yISYODfpWAusC2WZuA&s'},
    WordCounter: {image: 'https://www.texttool.com/img/word-count.png'},
}