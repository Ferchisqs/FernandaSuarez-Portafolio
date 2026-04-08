import { ThemeProvider } from "./context/ThemeProvider";
import { Mainlayout } from "./layouts/Mainlayout";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Design } from "./sections/Design/Design";
import { Experience } from "./sections/Experience/Experience";
import { Skills } from "./sections/Skills/Skills";
import { Certificates } from "./sections/Certificates/Certificates";
//import { BeforeAfter } from "./sections/BeforeAfter/BeforeAfter";
import { MasonryGallery } from "./components/MasonryGallery/MasonryGallery";
import { ScrollingGallery } from "./components/ScrollingGallery/ScrollingGallery";
import { ParallaxGallery } from "./sections/ParallaxGallery/ParallaxGallery";

function App() {
  return (
    <ThemeProvider>
      <Mainlayout>
        <Hero />
        <Projects />
        <MasonryGallery /> 
        <Design />
        {/* <BeforeAfter />  */}
        <ParallaxGallery />
        <Experience />
        <ScrollingGallery />
        <Skills />
        <Certificates /> 
        <About />
      </Mainlayout>
    </ThemeProvider>
  );
}

export default App;