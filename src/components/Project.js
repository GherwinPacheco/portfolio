import React, {useState} from 'react';
import { HText, PText } from './ResponsiveText';
import Carousel from './Carousel';

const Project = ({className, title, tools, images, description, ...rest}) => {

    
    const projectImages = images.map((img) => require(`../img/projects/${img}`));

    const defaultClassName = `
        inline-block
        grid grid-cols-1 lg:grid-cols-2
    `;

    return (
        <div 
            className={`${defaultClassName} ${className}`} 
            {...rest}
        >
            
            <div className='col-span-1 lg:p-10'>
                <Carousel className='w-[100%] lg:w-full mx-auto aspect-video' images={projectImages}/>
            </div>
            <div className='col-span-1 py-5 lg:p-10'>
                <div className='w-[100%] lg:w-full mx-auto'>
                    <HText size='sm' className='mb-3'>{title}</HText>
                    <PText className='indent-10 text-bodytext text-justify'>{description}</PText>
                </div>
                
            </div>
        </div>
    );
};

export default Project;
