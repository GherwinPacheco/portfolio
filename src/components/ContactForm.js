import React, { useState } from 'react';
import { Button, Input, TextArea } from '../components/Forms';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }



    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
    
        emailjs.send(
            'service_scx1ls4',
            'template_8557416',
            {
                receiver: 'Gherwin',
                ...formData
            },
            'Ird51wxFMadm-8TjE'
        )
        .then((result) => {
            setSending(false);
            console.log(result.text);
            alert('Email sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, (error) => {
            setSending(false);
            console.log(error.text);
            alert('Failed to send email. Please try again.');
        });

        
        
    };



    return (
        <form className='p-5 w-full lg:w-[50%] mx-auto' onSubmit={sendEmail}>
            <Input type='text' name='name' className='w-full mb-4' placeholder='Name' value={formData.name || ''} onChange={handleChange} required={true}/>
            <Input type='email' name='email' className='w-full mb-4' placeholder='Email Address' value={formData.email || ''} onChange={handleChange} required={true}/>
            <TextArea className='w-full mb-4' name='message' rows={15} placeholder='Message' value={formData.message || ''} onChange={handleChange} required={true}/>
            <div className='w-full flex justify-end'>
                <Button type='submit' className='bg-primary text-white font-semibold'>Submit</Button>
            </div>
        </form>
    )
  
};

export default ContactForm;
