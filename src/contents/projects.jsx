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
        <section id="projects" className='pb-20 md:py-28'>
            
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-10 text-center">
                Projects
            </h3>

            {MyProjects.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col-reverse lg:flex-row mb-20 duration-300 hover:bg-white hover:shadow-xl p-5">
                        <div className="flex-[1]">
                            <div className="hidden lg:block">
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
                            </div>
                            

                            <p className="indent-10 text-justify">
                                {item.description}
                            </p>
                        
                        </div>
                        <div className="flex-[1] mb-6 lg:mb-0 lg:ml-20">
                            <div className=" lg:hidden">
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
                            </div>

                            <div className="mx-12 lg:mx-0">
                                <Carousel>
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
                                <CarouselPrevious />
                                <CarouselNext />
                                </Carousel>
                            </div>

                            
                        </div>
                    </div>
                );
            })}
            

        </section>
    )
}

export default Projects