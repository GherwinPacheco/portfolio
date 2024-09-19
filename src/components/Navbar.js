import { Link } from 'react-router-dom';

const Navbar = () => {
    const optionClassName = 'm-3 mx-5 duration-200 hover:text-primary';
    const sidebarOptions = [
        {name: 'HOME', className: optionClassName, to: '/'},
        {name: 'ABOUT', className: optionClassName, to: '#about'},
        {name: 'PROJECTS', className: optionClassName, to: '#projects'},
        {name: 'CONTACT', className: optionClassName, to: '#contact'}
    ];

    return (
        <div className='font-semibold w-screen flex p-3 shadow-xl bg-white px-10'>
            <div className='flex-1'>
                <img className='mr-5 inline-block' src='./img/user.png' style={{width: '50px'}} />
                <span>GHERWIN PACHECO</span>
            </div>
            
            <div className='flex content-center justify-end flex-[2]'>
                {sidebarOptions.map(({name, ...rest}, index) => (
                    <Link key={index} {...rest}>{name}</Link>
                ))}
            </div>
            
        </div>
    
    );
};

export default Navbar;
