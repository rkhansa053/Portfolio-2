import { headerButtons } from "@/constants/constant";
import Image from "next/image";
import { Projects as ProjectsData } from "@/models/projects"; // Rename the imported Projects to avoid conflict

const ProjectsPage: React.FC = () => {
    return (
        <section
            id={headerButtons.projects.page}
            className="flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className="text-6xl my-6">Projects</h1>

            <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
                {
                    Object.keys(ProjectsData).map((projectKey) => {
                        // TypeScript knows `projectKey` is a valid key of ProjectsData
                        const project = ProjectsData[projectKey as keyof typeof ProjectsData];

                        return (
                            <Image
                                key={projectKey} // Add key for each element in the list
                                src={project.image} // Access the image property
                                alt={project.description} // Use the description as alt text
                                width={300}
                                height={300}
                                className="m-4 p-2"
                            />
                        );
                    })
                }
            </div>
        </section>
    );
};

export default ProjectsPage;















// import { headerButtons} from "@/constants/constant";
// import Image from "next/image";
// import {Projects} from "@/models/projects"

// const Projects: React.FC = () =>{
//     return(
//         <section 
//         id= {headerButtons.projects.page}
//         className="flex flex-col text-center justify-center items-center my-40">
           
//                 <h1 className="text-6xl my-6 ">Projects</h1>

//                 <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
//                 {
//                 Object.keys(Projects).map((projectKey) => {
//             // TypeScript knows `projectKey` is a valid key of Projects
//             const project = Projects[projectKey as keyof Projects];

//             return (
//                 <Image
//                     key={projectKey} // Add key for each element in the list
//                     src={project.image} // Access the image property
//                     alt={project.description} // Use the description as alt text
//                     width={300}
//                     height={300}
//                     className="m-4 p-2"
//                 />
//             );
//         })
//     }
// </div>

    




//         </section>
//     )
// }

// export default Projects;











            {/* <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
                {
                    Object.keys(Projects).map(project =>(
                        <Image
                             src={Projects[project as keyof Projects].image }
                             alt=""
                             width={300}
                             height={300}
                            className= "m-4 p-2"/>
                    ))
                }
            </div> */}