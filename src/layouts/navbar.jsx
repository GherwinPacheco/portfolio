import { ModeToggle } from "@/components/ui/mode-toggle"

const Navbar = () => {
    const navMenu = [
        { name: "Home", link: "#home" },
        { name: "About Me", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ]
    return (
        <nav className={`w-screen fixed bg-white dark:bg-black z-50`}>
            <div className='container mx-auto p-3 flex items-center justify-center'>
                <div className='flex-[1]'>
                    <p className='font-bold py-2'>
                        Portfolio
                    </p>
                </div>


                <div className='flex-[1] hidden lg:flex items-center justify-end'>
                    {navMenu.map((item, index) => 
                        <a key={index} href={item.link} className='font-semibold px-5 py-2 bg-transparent text-foreground hover:bg-primary hover:text-white duration-300'>
                            {item.name}
                        </a>
                    )}

                    <div className="ml-5"><ModeToggle/></div>
                </div>

            
            </div>
        </nav>
    )
    
}

export default Navbar;