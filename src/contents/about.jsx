import MyPortrait from "@/assets/image_portrait.jpg"
import BehindEffect from "@/components/ui/behind-effect"
import SkillBadge from "@/components/ui/skill-badge"
import { Skills, Experience } from "@/PortfolioData"


const About = () => {

    const AboutContent = ({className}) => {
        return (
            <div id="aboutContent" className={className}>
                <p className=" pb-20 sm:pb-6 px-10 text-justify">
                    I'm a Software Developer with over a year of professional experience building and maintaining full-stack applications using C#, ASP.NET, PHP, JavaScript, and MySQL. I enjoy writing clean, practical code that solves real problems and I'm always open to tackling new challenges across different domains and tech stacks.
                    I hold a BS in Information Technology from Cavite State University.</p>


                <div className="pt-20 sm:pt-0">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6 lg:mb-2 text-center lg:text-left">
                        Technologies I Use
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 px-3">
                        {Skills.map((item, index) => {
                            const imageSrc = new URL(`../assets/skills/${item.image}`, import.meta.url).href
                            return (
                                <div key={index} className="col-span-1">
                                    <BehindEffect className='w-full font-medium bg-gray-300'>
                                        <SkillBadge image={imageSrc} skill={item.name} />
                                    </BehindEffect>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>

                
                <div className="pt-20 sm:pt-0 mt-20">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6 lg:mb-2 text-center lg:text-left">
                        Work Experience
                    </h3>

                    {Experience.map((item, index) => {
                        return (
                            <BehindEffect key={index}  className='bg-gray-300 cursor-pointer' distance={10}>
                                <div className="bg-card p-10">
                                    <h4 className="text-xl font-bold">{item.position}</h4>
                                    <p className="text-lg text-green-500 font-bold">{item.company}</p>
                                    <p className="text-md md:absolute md:right-0 md:top-5">{item.duration}</p>
                                    <p className="text-md">
                                        Tech Stack: {item.techstack.map((tech, index) => (
                                            <span key={index} className="text-sm text-muted-foreground">
                                                {tech}{(index + 1) !== item.techstack.length && ', '}
                                            </span>
                                        ))}
                                    </p>
                                    <ul className="list-disc list-inside mt-2">
                                        {item.descriptions.map((desc, i) => (
                                            <li key={i} className="text-muted-foreground">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </BehindEffect>
                        )
                    })}
                </div>
                

                
            </div>


            
        )
    }


    return (
        <section id="about" className='flex py-20'>
            
            <div className='flex-[1]'>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6 text-center lg:hidden">
                    About Me
                </h3>
                <div className="relative w-fit mx-auto mb-6">
                    <div className="absolute w-[80%] h-[90%] -top-5 -right-5 bg-secondary z-0"></div>
                    
                    <div className="relative">
                        <div className="absolute w-[1rem] h-[4rem] bg-primary -left-8 bottom-10"></div>
                        <div className="absolute w-[1rem] h-[1rem] bg-foreground -right-7 top-10"></div>
                        <img src={MyPortrait} className="h-72 lg:h-96"/>
                    </div>
                    
                </div>
                <AboutContent className='lg:hidden z-10'/>
            </div>

            
            <div className="flex-[1.5] hidden lg:inline">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 hidden md:block">
                    About Me
                </h3>
                <AboutContent/>
            </div>
        </section>
    )
}

export default About