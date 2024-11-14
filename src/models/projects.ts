// import {Projects} from "@/models/projects"

// const projects: Projects = {
//     CountdownTimer: {},  
//     SimpleCalculator: {},
//     TodoList: {},
//     CurrencyConverter: {},
//     WordCounter: {}
// };

// export {Projects};

// projects.ts

export interface ProjectDetails {
    image: string;
    description: string;
}

export interface Projects {
    CountdownTimer: ProjectDetails;
    SimpleCalculator: ProjectDetails;
    TodoList: ProjectDetails;
    CurrencyConverter: ProjectDetails;
    WordCounter: ProjectDetails;
}

// Define Projects as an object
export const Projects: Projects = {
    CountdownTimer: {
        image: "https://img.freepik.com/premium-vector/countdown-timer-template-website-application_6735-822.jpg",
        description: "A countdown timer project"
    },
    SimpleCalculator: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuqZpxzUU47pk2cEyKSGy_S7CXBoAszF80A&s",
        description: "A simple calculator project"
    },
    TodoList: {
        image: "https://www.shutterstock.com/image-vector/do-list-planning-icon-concept-600nw-739093225.jpg",
        description: "A todo list project"
    },
    CurrencyConverter: {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTeE_8Odp1aWhYt9-yISYODfpWAusC2WZuA&s",
        description: "A currency converter project"
    },
    WordCounter: {
        image: "https://www.texttool.com/img/word-count.png",
        description: "A word counter project"
    }
};
