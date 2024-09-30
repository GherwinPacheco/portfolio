import {Fade, ScrollFade} from '../components/Fade';
import { Button } from '../components/Forms';
import Skill from '../components/Skill';
import Project from '../components/Project';
import { HText, PText, SText } from '../components/ResponsiveText';
import { LoremIpsum } from 'lorem-ipsum';
import { Link as ScrollLink } from 'react-scroll';
import {Skills, Projects} from '../PortfolioData';
import ContactForm from '../components/ContactForm';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faSquareFacebook  } from '@fortawesome/free-brands-svg-icons';

import introBackground from '../img/background.jpg';
import introIcon from '../img/programming.png';
import userImg from '../img/user.png';



const Homepage = () => {
  const lorem = new LoremIpsum();

  return (
    <div className="bg-background">

      <section id="intro" 
        className="h-[50vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${introBackground})` }}
      >
        <div className='container flex items-center justify-center text-white h-full w-full mx-auto px-5'>
          <Fade className='flex-[1.5]' direction='left'>
            <HText size='lg' className='mb-2'>Hey, I'm <br/> Gherwin Pacheco</HText>
            <PText className='mb-5'>Building dynamic and responsive web solutions.</PText>
            
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button className="bg-accent">Projects</Button>
            </ScrollLink>
          </Fade>

          <Fade className='flex-1' direction='right'>
            <img className='mx-auto w-[70%]' src={introIcon} />
          </Fade>
        </div>
        
      </section>



      <div className='container mx-auto'>
        <section id="about" className='p-5 pt-10 min-h-[100vh] mb-10 lg:mb-16'>
          <HText className="text-primary text-center mb-10">Get to Know Me</HText>

          <div className='flex items-center mb-10 lg:mb-16'>
            <ScrollFade direction='right' className='flex-1 pr-8 md:pl-10'>
              <HText className='mb-2'>About Me</HText>
              <PText className='indent-8 text-justify text-bodytext mb-5'>
                I'm a BS in Information Technology graduate with a strong foundation in both front-end and back-end technologies. 
                I focus on creating responsive, user-friendly websites and I'm eager to apply my skills and take on new challenges to build efficient and scalable solutions.
              </PText>
            </ScrollFade>

            <ScrollFade direction='left' className='flex-1'>
              <img src={userImg} className='mx-auto w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] md:w-[60%] md:h-[60%] rounded-lg aspect-square'/>
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

        <section id="projects" className='pt-10 min-h-[100vh]'>
          <HText className="text-primary text-center">Projects</HText>

          {Projects.map((item, index) => {
            return(
              <ScrollFade direction='top' key={index} className='col-span-1 p-10'>
                <Project {...item}/>
              </ScrollFade>
            );
          })}
        </section>



        <section id="contact" className='p-5 pt-10 min-h-[100vh]'>
          <HText className="text-primary text-center mb-3">Contact Me</HText>
          <ContactForm />
        </section>

        
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <HText size='md' className="mb-4">Contact Me</HText>
          <PText>Email: <a href="mailto:gherwinpacheco1@gmail.com" className="text-blue-400 hover:underline">gherwinpacheco1@gmail.com</a></PText>
          <PText>Phone: <a href="tel:+639452170963" className="text-blue-400 hover:underline">+639452170963</a></PText>

          <HText size='md' className="mt-6 mb-4">Follow Me</HText>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/gherwin.pacheco.08/">
              <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            </a>
            <a href="https://github.com/GherwinPacheco">
              <FontAwesomeIcon icon={faSquareGithub} size="2x" />
            </a>
            <a href="www.linkedin.com/in/gherwin-pacheco-4784a4319">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
          </div>

          <SText className="mt-6">&copy; {new Date().getFullYear()} Gherwin Pacheco. All rights reserved.</SText>
        </div>
      </footer>
      
    </div>
    
  );
};

export default Homepage;