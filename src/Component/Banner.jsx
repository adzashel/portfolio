import "animate.css";
import ColBanner from "./ColBanner";
import { ColImg } from '../Component/ColImg';

const Banner = () => {
  const name = "Jiéyra De Châtillon";

  return (
    <section id="home">
      <div className="banner-container">
        <div className="row-banner">
          <ColBanner name={ name }/>
          <ColImg/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
