import {Fade, ScrollFade} from '../components/Fade';
import Button from '../components/Button';
import Skill from '../components/Skill';
import { LoremIpsum } from 'lorem-ipsum';
import { Link as ScrollLink } from 'react-scroll';
import {Skills, Projects} from '../PortfolioData';



const Homepage = () => {
  const lorem = new LoremIpsum();

  return (
    <div className="bg-background">

      <section id="intro" 
        className="
          h-[50vh] lg:h-[92vh]
          bg-cover bg-center bg-no-repeat 
          flex items-center justify-center text-white p-10 lg:p-20"
        style={{ backgroundImage: "url('/img/background.jpg')" }}
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
          lg:h-[100vh] 
          p-10 lg:p-20'
      >
        <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-16">About Me</h1>

        <div className='block md:flex'>
          <div className='flex-1 mb-20 lg:mb-0 md:mr-20'>
            <ScrollFade direction='left'><h1 className='text-xl lg:text-2xl font-semibold mb-5'>Get to know me</h1></ScrollFade>
            <ScrollFade direction='left' delay={0.3}><p className='indent-10 text-sm lg:text-base text-justify mb-5'>{lorem.generateParagraphs(1)}.</p></ScrollFade>
          </div>

          <div className='flex-1'>
            <h1 className='text-xl lg:text-2xl font-semibold mb-5 w-[100%]'>My Skills</h1>
            {Skills.map((item, index) => {
              return (
                <ScrollFade className='inline-block' direction='top' key={index} delay={index * 0.3}>
                  <Skill className='m-2' image={item.image}>{item.name}</Skill>
                </ScrollFade>
              );
            })}
          </div>
        </div>
        
        

      </section>
      
    </div>
    
  );
};

export default Homepage;