import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../components/Forms';

import navbarIcon from '../img/user.png';

const NavbarButton = ({children, className, ...rest}) => {
    const defaultClassName = 'm-3 mx-5 duration-200 hover:text-primary cursor-pointer';

    return (
        <ScrollLink className={`${defaultClassName} ${className}`} {...rest} smooth={true} duration={500}>{children}</ScrollLink>
    );
    
}




const Navbar = () => {
    const navbarOptions = [
        {name: 'ABOUT', to: 'about'},
        {name: 'PROJECTS', to: 'projects'},
        {name: 'CONTACT', to: 'contact'}
    ];

    return (
        <div className='font-semibold w-[100%] flex p-3 shadow-xl bg-white px-5'>
            <div className='flex-1'>
                <img className='w-[50px] mr-5 inline-block rounded-full' src={navbarIcon} />
                <span className='hidden md:inline-block'>GHERWIN PACHECO</span>
            </div>

            <div className='hidden md:flex content-center justify-end flex-[2]'>
                {navbarOptions.map((item, index) => (
                    <NavbarButton key={index} to={item.to}>{item.name}</NavbarButton>
                ))}
            </div>

        </div>
    
    );
    
};

export default Navbar;
