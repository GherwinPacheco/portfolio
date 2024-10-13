import MyPortrait from "@/assets/image_portrait.jpg"
import BehindEffect from "@/components/ui/behind-effect"
import SkillBadge from "@/components/ui/skill-badge"
import { Skills } from "@/PortfolioData"


const About = () => {

    const AboutContent = ({className}) => {
        return (
            <div id="aboutContent" className={className}>
                <p className=" mb-6 px-10 text-justify">I'm a BS in Information Technology graduate with a strong foundation in both front-end and back-end technologies. I focus on creating responsive, user-friendly websites and I'm eager to apply my skills and take on new challenges to build efficient and scalable solutions.</p>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-10 lg:mt-0 mb-6 lg:mb-3 text-center lg:text-left">
                    Technologies I Use
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3">
                    {Skills.map((item, index) => {
                        const imageSrc = new URL(`../assets/skills/${item.image}`, import.meta.url).href
                        return (
                            <div key={index} className="col-span-1">
                                <BehindEffect className='w-full font-medium bg-gray-200'>
                                    <SkillBadge className='bg-white shadow-lg' image={imageSrc} skill={item.name} />
                                </BehindEffect>
                            </div>
                            
                        )
                    })}
                </div>

                
            </div>


            
        )
    }


    return (
        <section id="about" className='flex pb-20 md:py-28'>
            
            <div className='flex-[1]'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-10 text-center lg:hidden">
                    About Me
                </h3>
                <div className="relative w-fit mx-auto mb-6">
                    <div className="absolute w-[80%] h-[90%] -top-5 -right-5 bg-gray-200 z-0"></div>
                    
                    <div className="relative">
                        <div className="absolute w-[1rem] h-[4rem] bg-primary -left-8 bottom-10"></div>
                        <div className="absolute w-[1rem] h-[1rem] bg-gray-700 -right-7 top-10"></div>
                        <img src={MyPortrait} className="h-72 lg:h-96"/>
                    </div>
                    
                </div>
                <AboutContent className='lg:hidden z-10'/>
            </div>

            
            <div className="flex-[1.5] hidden lg:inline">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3 hidden md:block">
                    About Me
                </h3>
                <AboutContent/>
            </div>
        </section>
    )
}

export default About