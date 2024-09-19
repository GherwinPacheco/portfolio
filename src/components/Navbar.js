import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';

const Navbar = () => {
    const optionClassName = 'm-3 mx-5 duration-200 hover:text-primary';
    const sidebarOptions = [
        {name: 'HOME', className: optionClassName, to: '/'},
        {name: 'ABOUT', className: optionClassName, to: '#about'},
        {name: 'PROJECTS', className: optionClassName, to: '#projects'},
        {name: 'CONTACT', className: optionClassName, to: '#contact'}
    ];

    return (
        <div className='font-semibold w-[100%] flex p-3 shadow-xl bg-white px-5'>
            <div className='flex-1'>
                <img className='w-[50px] mr-5 inline-block' src='./img/user.png' />
                <span className='hidden md:inline-block'>GHERWIN PACHECO</span>
            </div>

            <div className='hidden md:flex content-center justify-end flex-[2]'>
                {sidebarOptions.map(({name, ...rest}, index) => (
                    <Link key={index} {...rest}>{name}</Link>
                ))}
            </div>

            <div className='flex md:hidden  content-center justify-end flex-1'>
                <Button className='font-bold p-3'>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                
            </div>
            
        </div>
    
    );
    
};

export default Navbar;
