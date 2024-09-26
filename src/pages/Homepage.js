import {Fade, ScrollFade} from '../components/Fade';
import Button from '../components/Button';
import Skill from '../components/Skill';
import Project from '../components/Project';
import { HText, PText } from '../components/ResponsiveText';
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
        <Fade className='flex-[1.5]' direction='left'>
          <HText size='lg' className='mb-2'>Hey, I'm <br/> Gherwin Pacheco</HText>
          <PText className='mb-5'>Building dynamic and responsive web solutions.</PText>
          
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button className="bg-accent"><PText>Projects</PText></Button>
          </ScrollLink>
        </Fade>

        <Fade className='flex-1' direction='right'>
          <img className='mx-auto w-[70%]' src={introIcon} />
        </Fade>
      </section>




      <section id="about" className='p-5 pt-10 min-h-[100vh] mb-10 lg:mb-16'>
        <HText className="text-primary text-center mb-3">Get to Know Me</HText>
        <PText className='text-center text-bodytext mb-10 lg:mb-16'>{lorem.generateWords(10)}</PText>

        <div className='flex items-center mb-10 lg:mb-16'>
          <ScrollFade direction='right' className='flex-[1.5] md:flex-1 pr-8 md:pl-10'>
            <HText className='mb-2'>About Me</HText>
            <PText className='indent-8 text-justify text-bodytext mb-5'>
              I'm a web developer with a strong foundation in both front-end and back-end technologies. I focus on creating responsive, user-friendly websites using React, JavaScript, and PHP. I'm eager to apply my skills and take on new challenges to build efficient and scalable solutions.
            </PText>
          </ScrollFade>

          <ScrollFade direction='left' className='flex-1'>
            <img src={userImg} className='mx-auto w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] md:w-[50%] md:h-[50%]'/>
          </ScrollFade>
        </div>

        <div className='block w-[100%] lg:w-[70%] mx-auto'>
          <HText className='text-center mb-5 w-[100%]'>The Technologies I Use</HText>

          <div className='grid grid-cols-3 lg:grid-cols-4 gap-2'>
            {Skills.map((item, index) => {
              return (
                <ScrollFade className="col-span-1 sm:px-5" direction='top' key={index} delay={index * 0.03}>
                  <Skill className='text-xs sm:text-sm md:text-base w-[100%]' image={item.image} skillName={item.name} />
                </ScrollFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className='pt-10 min-h-[100vh] bg-white'>
        <HText className="text-primary text-center">Projects</HText>

        {Projects.map((item, index) => {
          return(
            <ScrollFade direction='top' key={index} className='col-span-1 p-10 mb-10'>
              <Project {...item}/>
            </ScrollFade>
          );
        })}
      </section>

      <footer></footer>
      
    </div>
    
  );
};

export default Homepage;