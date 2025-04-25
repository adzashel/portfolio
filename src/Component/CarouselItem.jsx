/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/html-logo.png";
import meter2 from "../assets/img/react-removebg-preview.png";
import meter3 from "../assets/img/vuejs.png";
import meter4 from "../assets/img/javascript.jpg";
import meter5 from "../assets/img/CSS.png";
import meter6 from "../assets/img/node.jpg";
import meter7 from "../assets/img/bootstrap.jpg";
import tailwind from "../assets/img/tailwind.jpg";
import mongodb from '../assets/img/mongodb.jpg';
import expressjs from "../assets/img/expressjs.jpg";
import python from '../assets/img/python.png'


import { SkillItem } from '../Component/SkillItem';

export const CarouselItem = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      image :  meter1,
      title :"Html",
    },
    {
      image :  meter2,
      title :"React Js",
    },
    {
      image :  meter3,
      title :"Vue Js",
    },
    {
      image :  meter4,
      title :"Javascript",
    },
    {
      image :  meter5,
      title :"CSS",
    },
    {
      image :  meter6,
      title :"Node Js",
    },
    {
      image :  meter7,
      title :"Bootstrap",
    },
    {
      image :  tailwind,
      title :"Tailwind Css",
    },
    {
      image :  expressjs,
      title :"ExpressJs",
    },
    {
      image :  mongodb,
      title :"MongoDB",
    },
    {
      image :  python,
      title :"Python",
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      arrows={true}
      showDots={false}
    >
        {skills.map((skill , index ) => 
          <SkillItem key={ index } { ...skill}/>
        )}
    </Carousel>
  );
};


