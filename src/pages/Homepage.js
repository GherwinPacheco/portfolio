import {Fade, ScrollFade} from '../components/Fade';
import Button from '../components/Button';
import Skill from '../components/Skill';
import { LoremIpsum } from 'lorem-ipsum';
import { Link as ScrollLink } from 'react-scroll';
import {Skills, Projects} from '../PortfolioData';

import introBackground from '../img/background.jpg';
import introIcon from '../img/programming.png';
import userImg from '../img/user.png';



const Homepage = () => {
  const lorem = new LoremIpsum();

  return (
    <div className="bg-background">

      <section id="intro" 
        className="
          h-[50vh] lg:h-[92vh]
          bg-cover bg-center bg-no-repeat 
          flex items-center justify-center text-white p-5 lg:p-20"
        style={{ backgroundImage: `url(${introBackground})` }}
      >
        <Fade className='flex-1' direction='left'>
          <h1 className='text-lg sm:text-xl lg:text-4xl font-semibold mb-2'>Hey, I'm <br/> Gherwin Pacheco</h1>
          <p className='text-xs sm:text-base text-justify mb-5'>{lorem.generateWords(10)}.</p>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button className="bg-accent text-xs sm:text-base">Projects</Button>
          </ScrollLink>
        </Fade>

        <Fade className='flex-1' direction='right'>
          <img className='mx-auto w-[50%]' src={introIcon} />
        </Fade>
      </section>




      <section id="about" className='p-5 pt-10'>
        <h1 className="text-primary text-center text-xl sm:text-3xl font-semibold mb-3">About Me</h1>
        <p className='text-center text-xs sm:text-base mb-10'>{lorem.generateWords(10)}</p>

        <div className='flex items-center mb-10'>
          <div className='flex-1 pr-10 lg:p-5'>
            <ScrollFade direction='left'><h1 className='text-md md:text-xl font-semibold mb-5'>Get to know me</h1></ScrollFade>
            <ScrollFade direction='left'><p className='indent-10 text-xs sm:text-base text-justify mb-5'>{lorem.generateSentences(3)}.</p></ScrollFade>
          </div>

          <div className='flex-1'>
            <ScrollFade direction='right'>
              <img src={userImg} className='mx-auto w-[80%] h-[80%] md:w-[55%] md:h-[55%]'/>
            </ScrollFade>
          </div>
        </div>

        <div className='block w-[100%] lg:w-[70%] mx-auto'>
          <h1 className='text-xl lg:text-2xl text-center font-semibold mb-5 w-[100%]'>The Technologies I Use</h1>

          <div className='grid grid-cols-3 lg:grid-cols-4 gap-2'>
            {Skills.map((item, index) => {
              return (
                <ScrollFade className="col-span-1 flex justify-center" direction='top' key={index} delay={index * 0.05}>
                  <Skill className='text-xs sm:text-sm md:text-base' image={item.image} imageClassName='w-5 h-5 lg:w-8 lg:h-8'>{item.name}</Skill>
                </ScrollFade>
              );
            })}
          </div>
        </div>

        
        
        

      </section>

      <section id="projects" className='h-[100vh] bg-white'></section>
      
    </div>
    
  );
};

export default Homepage;