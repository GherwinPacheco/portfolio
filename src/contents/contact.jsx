import React, { useState } from 'react';

import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const { toast } = useToast();

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
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            toast({
                title: "Message Sent",
                description: "Your message has been sent successfully",
            });
        }, (error) => {
            setSending(false);
            console.log(error.text);
            
            toast({
                title: "Send Failed",
                description: "There was a problem with your request. Please try again.",
            });
        });

        
        
    };



    return (
        <section id="home" className='bg-foreground p-10'>
            <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight mb-10 text-center">
                Contact Me
            </h3>

            <div className='flex justify-center '>
                <form className='w-full md:w-[50%]' onSubmit={sendEmail}>
                    <Input type='text' name='name' className='mb-4 bg-white' placeholder='Name' value={formData.name || ''} onChange={handleChange} required={true}/>
                    <Input type='email' name='email' className='mb-4  bg-white' placeholder='Email Address' value={formData.email || ''} onChange={handleChange} required={true}/>
                    <Textarea className='mb-4  bg-white' name='message' rows={15} placeholder='Message' value={formData.message || ''} onChange={handleChange} required={true}/>
                    <div className='flex justify-end'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </div>

            
        </section>
        
    )
  
};

export default Contact;
