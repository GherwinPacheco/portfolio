import {Fade, ScrollFade} from '../components/Fade';
import Button from '../components/Button';
import { LoremIpsum } from 'lorem-ipsum';



const Homepage = () => {

  return (
    <div className="bg-background">
      <div className="
        h-[40vh] lg:h-[92vh]
        bg-cover bg-center bg-no-repeat 
        flex items-center justify-center text-white p-10 lg:p-20"
        style={{ backgroundImage: "url('/img/background.jpg')" }}
      >
        <Fade className='flex-[2] lg:flex-1' direction='left'>
          <h1 className='text-2xl lg:text-5xl font-semibold mb-2'>Hey, I'm <br/> Gherwin Pacheco</h1>
          <p className='text-sm lg:text-base text-justify'>{new LoremIpsum().generateWords(10)}.</p>
        </Fade>

        <Fade className='flex-1 flex justify-end content-center' direction='right'>
          <img className='w-[100px] lg:w-[300px] ' src='./img/programming.png' />
        </Fade>
        

      </div>

      <div className=''>
        My Skills
        <Button className='bg-blue-500 text-white' onClick={() => alert('clicked')}>LMOA EXSDI</Button>
      </div>
      
    </div>
    
  );
};

export default Homepage;