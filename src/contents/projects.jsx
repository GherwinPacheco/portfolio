import { Projects as MyProjects} from "@/PortfolioData"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
  


const Projects = () => {
    



    return (
        <section id="projects" className='py-10'>
            
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6 text-center">
                Projects
            </h3>

            {MyProjects.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col lg:flex-row mb-6 lg:mb-12 rounded-xl border bg-card text-card-foreground shadow p-5">
                        <div className="flex-[1]">

                            {/* Visible on large screen */}
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                {item.title}
                            </h4>

                            
                            <div className="flex mb-6">
                                <span className="text-muted-foreground">Tools Used:&emsp;</span>
                                {
                                    item.tools.map((tool, index) => {
                                        const isLast = (index + 1) == item.tools.length;
                                        return `${tool}${!isLast ? ', ' : ''}`
                                    })
                                }
                                
                            </div>
                            

                            <p className="indent-10 text-justify hidden lg:block">
                                {item.description}
                            </p>
                        
                        </div>
                        <div className="flex-[1] mb-6 lg:mb-0 lg:ml-20">
                            <Carousel className='mb-4'>
                            <CarouselContent>
                                {item.images.map((img, index) => {
                                    const imgSource = new URL(`../assets/projects/${img}`, import.meta.url).href;
                                    return (
                                        <CarouselItem key={index} className='border-2'>
                                            <img src={imgSource}/>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                            </Carousel>

                            <p className="indent-10 text-justify lg:hidden">
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
            

        </section>
    )
}

export default Projects