import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import { CarouselItem } from '../Component/CarouselItem';
import SkillHeader from '../Component/SkillHeader'


const Skills = () => {
 
  return (
    <section className="skill" id="skill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx ">
              <SkillHeader/>
             <CarouselItem/>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
