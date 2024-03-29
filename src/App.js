import "./App.css";
import Header from "./Components/Header/header";
import TopContainer from "./Components/TopContainer/TopContainer";
import SkillContainer from "./Components/SkillContainer/SkillContainer";
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer";
import Contact from "./Components/Contact/Contact";
import SourceCode from "./Components/SourceCode/SourceCode";

function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <SourceCode />
      <Contact />
    </div>
  );
}

export default App;
