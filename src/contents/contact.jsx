"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Profile } from "@/PortfolioData";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_11f18ds",
        "template_8557416",
        {
          receiver: "Gherwin",
          ...formData,
        },
        "Ird51wxFMadm-8TjE"
      )
      .then(
        () => {
          setSending(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          toast({
            title: "Message Sent",
            description: "Your message has been sent successfully",
          });
        },
        () => {
          setSending(false);
          toast({
            title: "Send Failed",
            description:
              "There was a problem with your request. Please try again.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-foreground dark:bg-secondary/40 border-t border-border py-16 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info */}
          <div className="lg:col-span-5 text-white space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-6 bg-primary inline-block" />
                <h3 className="text-2xl font-semibold tracking-tight">
                  Contact
                </h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Feel free to reach out through the form or via email and phone.
              </p>
            </div>

            <div className="space-y-3 text-sm text-neutral-200">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${Profile.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {Profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{Profile.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{Profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  className="bg-background text-foreground"
                  placeholder="Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required={true}
                />
                <Input
                  type="email"
                  name="email"
                  className="bg-background text-foreground"
                  placeholder="Email Address"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <Textarea
                className="bg-background text-foreground"
                name="message"
                rows={7}
                placeholder="Message"
                value={formData.message || ""}
                onChange={handleChange}
                required={true}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={sending} className="px-8">
                  {sending ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
