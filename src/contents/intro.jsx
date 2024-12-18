import MyImage from "@/assets/my_image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import BehindEffect from "@/components/ui/behind-effect";
import { FileUser } from 'lucide-react';

const Intro = () => {
    const introMessage = 'Aspiring developer passionate about developing websites and applications.';

    return (
        <section id="home" className='flex items-center h-screen sm:h-auto sm:pt-20 sm:pb-10'>
            <div className='flex-[1] hidden md:inline'>
              <h2 className="text-3xl pb-2 font-semibold tracking-tight first:mt-0">
                Gherwin Pacheco
              </h2>
              <p className="mb-4">{introMessage}</p>
              <a href="RESUME-GMP.pdf" download>
                    <Button>
                        Download CV&emsp;<FileUser/>
                    </Button>
                </a>
            </div>
            <div className='flex-[1] relative'>
                <h2 className="md:hidden text-3xl font-semibold tracking-tight first:mt-0 text-center mb-6">
                    Gherwin Pacheco
                </h2>

                <BehindEffect className='mx-auto bg-primary' distance={14} enabled={true}>
                    <img src={MyImage} className='h-72 md:h-96' />
                </BehindEffect>

                <div className="md:hidden flex flex-col items-center">
                    <p className='text-center my-4 px-10'>{introMessage}</p>
                    
                    <a href="RESUME-GMP.pdf" download>
                        <Button>
                            Download CV&emsp;<FileUser/>
                        </Button>
                    </a>
                </div>
                

                    

                <div className="absolute left-0 md:left-auto md:right-0 bottom-28 flex flex-col gap-3">
                    <BehindEffect className='bg-foreground'>
                        <a href="https://www.facebook.com/gherwin.pacheco.08/">
                            <Button size="icon">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </Button>
                        </a>
                    </BehindEffect>

                    <BehindEffect className='bg-foreground'>
                        <a href="www.linkedin.com/in/gherwin-pacheco-4784a4319">
                            <Button size="icon">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Button>
                        </a>
                    </BehindEffect>

                    <BehindEffect className='bg-foreground'>
                        <a href="https://github.com/GherwinPacheco">
                            <Button size="icon">
                                <FontAwesomeIcon icon={faGithubAlt}/>
                            </Button>
                        </a>
                    </BehindEffect>


                </div>
              
            </div>
        </section>
    )
}

export default Intro