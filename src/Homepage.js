import Signin from "./Sign-in";
import Signup from "./Sign-up";
import Navbar from "./Navbar/Navbar";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <div class="triangle">
          <div class="triangle-up1"></div>
          <div class="triangle-up2"></div>
        </div>
        <div class="triangle2">
          <div class="triangle-up3"></div>
          <div class="triangle-up4"></div>
        </div>
        <div>VTBlog</div> */}
        <Signin />
        <Signup />
      </header>
    </div>
  );
}

export default App;