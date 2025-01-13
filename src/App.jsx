import './App.css'
import { Navbar } from './Component/Navbar'
import Banner from './Component/Banner'
import Skills from './Component/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import SocialIcon from './Component/SocialIcon';
import FooterIcon from './Component/FooterIcon';
import ttICon from "./assets/img/tiktok.svg";
import githubICon from "./assets/img/github.svg";
import igIcon from "./assets/img/nav-icon3.svg";
import twtIcon from "./assets/img/twitter-x.svg";

 const App = () =>  {

  return (
    <>
      <Navbar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer>
        <FooterIcon>
          <SocialIcon tiktok={ ttICon } github={ githubICon } ig={ igIcon } twt={ twtIcon }/>
        </FooterIcon>
      </Footer>
    </>
  )
}

export default App
