import Hello from "./class";
import Class from "./hello";
import Welcome from "./welcome";
import About from "./about";
import Footer from "./footer";
import Greeting from "./props";
function App() {
  return(
    <div>
      <Welcome />
      <About />
      <Footer/>
      <Greeting name="Alice" />
      <Hello />
      <Class />
      
    </div>
  );
  
}
export default App;