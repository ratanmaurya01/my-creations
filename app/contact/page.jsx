"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here (e.g., API call, email service)
    alert("✅ Message sent! Thank you for reaching out.");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-primary",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-500",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to work together? I'd love to hear about your project and
            discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-glass glow hover:glow-strong transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hero-gradient text-primary-foreground hover:glow-strong transition-smooth"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="card-glass glow hover:glow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                  >
                    <div className="text-primary group-hover:text-accent transition-smooth">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-glass glow hover:glow-strong transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth ${social.color} group`}
                      aria-label={social.label}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
