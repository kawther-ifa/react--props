
import React from "react"; 
import Header from "./components/Profile/Header";
import Footer from './components/Profile/Footer'
import FullName from "./components/Profile/FullName";
import Bio from "./components/Profile/Bio";
import Profession from "./components/Profile/Profession";
function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
    <header id="home">
    <Header/>
    </header>
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1>
    {/*  And invoking the <FullName/> component… */}
      <FullName firstName="Kawther" lastName="ifa">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"double black",  marginTop:"30px",}} id="about">
      <Bio FullName="kawther ifa" Age="25 ans" Gender="Female" Interests="Learning,Farming  , Eating and Sleeping"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </body>
    <footer id="contact">
      <Footer/>
      </footer>

    </>
  );
}
export default App;
