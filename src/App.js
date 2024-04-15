import './App.css';

import Nav from './page/nav';
import Banner from './page/mainPage';
import About from "./page/about"
import Project from './page/project';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <About />
      <Project />
    </div>
  );
}

export default App;
