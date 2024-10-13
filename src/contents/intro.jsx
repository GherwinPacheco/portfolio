import MyImage from "@/assets/my_image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import BehindEffect from "@/components/ui/behind-effect";

const Intro = () => {
    const introMessage = 'Aspiring developer passionate about developing websites and applications.';

    return (
        <section id="home" className='flex items-center pb-20 md:py-28'>
            <div className='flex-[1] hidden md:inline'>
              <h2 className="text-3xl pb-2 font-semibold tracking-tight first:mt-0">
                <span className="text-muted-foreground">{'<'}</span> Gherwin_Pacheco <span className="text-muted-foreground">{'/>'}</span>
              </h2>
              <p>{introMessage}</p>
            </div>
            <div className='flex-[1] relative'>
                <h2 className="md:hidden text-3xl pb-2 font-semibold tracking-tight first:mt-0 text-center mb-6">
                    Gherwin Pacheco
                </h2>

                <BehindEffect className='mx-auto bg-primary' distance={5} enabled={true}>
                    <img src={MyImage} className='h-72 md:h-96' />
                </BehindEffect>

                <p className='md:hidden text-center mt-4 px-10'>{introMessage}</p>



                <div className="absolute left-0 md:left-auto md:right-0 bottom-28 flex flex-col gap-3">
                    <BehindEffect className='bg-foreground'>
                        <a href="https://www.facebook.com/gherwin.pacheco.08/">
                            <Button size="icon">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </Button>
                        </a>
                    </BehindEffect>

                    <BehindEffect className='bg-foreground'>
                        <a href="https://github.com/GherwinPacheco">
                            <Button size="icon">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Button>
                        </a>
                    </BehindEffect>

                    <BehindEffect className='bg-foreground'>
                        <a href="www.linkedin.com/in/gherwin-pacheco-4784a4319">
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