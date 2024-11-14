import Intro from "../components/intro";
import About from "../components/about";
import Projects from "../components/projects";

const Main:  React.FC = () => {
    return(
        <div className="lg:mx-32 md:mx-4">
        <Intro/>
        <About/>
        <Projects/>
        </div>
    )
}

export default Main;