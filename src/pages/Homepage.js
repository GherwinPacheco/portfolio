import {Fade, ScrollFade} from '../components/Fade';
import Button from '../components/Button';
import Skill from '../components/Skill';
import { LoremIpsum } from 'lorem-ipsum';
import { Link as ScrollLink } from 'react-scroll';
import {Skills, Projects} from '../PortfolioData';

import backgroundImg from './img/background.jpg';



const Homepage = () => {
  const lorem = new LoremIpsum();

  return (
    <div className="bg-background">

      <section id="intro" 
        className="
          h-[50vh] lg:h-[92vh]
          bg-cover bg-center bg-no-repeat 
          flex items-center justify-center text-white p-5 lg:p-20"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Fade className='flex-[2] lg:flex-1' direction='left'>
          <h1 className='text-2xl lg:text-5xl font-semibold mb-2'>Hey, I'm <br/> Gherwin Pacheco</h1>
          <p className='text-sm lg:text-base text-justify mb-5'>{lorem.generateWords(10)}.</p>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button className="bg-accent">Projects</Button>
          </ScrollLink>
        </Fade>

        <Fade className='flex-1 flex justify-end content-center' direction='right'>
          <img className='w-[100px] lg:w-[300px] ' src='./img/programming.png' />
        </Fade>
      </section>




      <section id="about" 
        className='
          h-[160vh] lg:h-[100vh]
          p-5 pt-10'
      >
        <h1 className="text-primary text-center text-2xl lg:text-4xl font-semibold mb-3">About Me</h1>
        <p className='text-center text-sm lg:text-lg mb-10 lg:mb-32'>{lorem.generateWords(10)}</p>

        <div className='block md:flex'>
          <div className='flex-1 mb-20 lg:mb-0 md:mr-20 lg:pl-5'>
            <ScrollFade direction='left'><h1 className='text-xl lg:text-2xl font-semibold mb-5'>Get to know me</h1></ScrollFade>
            <ScrollFade direction='left'><p className='indent-10 text-sm lg:text-base text-justify mb-5'>{lorem.generateSentences(3)}.</p></ScrollFade>
          </div>

          <div className='flex-1 lg:flex-[2]'>
            <h1 className='text-xl lg:text-2xl text-center lg:text-left font-semibold mb-5 w-[100%]'>The Technologies I Use</h1>

            <div className='flex flex-wrap justify-center lg:justify-start'>
              {Skills.map((item, index) => {
                return (
                  <ScrollFade direction='top' key={index} delay={index * 0.05}>
                    <Skill className='m-2' image={item.image}>{item.name}</Skill>
                  </ScrollFade>
                );
              })}
            </div>
            
          </div>
        </div>
        
        
        

      </section>

      <section id="projects" className='h-[100vh] bg-white'></section>
      
    </div>
    
  );
};

export default Homepage;