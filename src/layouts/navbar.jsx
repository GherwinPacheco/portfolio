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
                <div className='flex-[1] flex items-center'>
                    <p className='font-bold py-2 px-3 lg:px-0'>
                        Portfolio
                    </p>
                </div>


                <div className='flex-[1] hidden lg:flex items-center justify-end'>
                    {navMenu.map((item, index) => 
                        <a key={index} href={item.link} className='font-semibold px-5 py-2 bg-transparent text-foreground hover:bg-primary hover:text-white duration-300'>
                            {item.name}
                        </a>
                    )}

                    
                </div>
                <div className="mx-5 lg:mr-0 lg:ml-5"><ModeToggle/></div>
            
            </div>
        </nav>
    )
    
}

export default Navbar;