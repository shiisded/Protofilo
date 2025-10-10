import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Twitter, Linkedin, Dribbble, Send, Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@supreme.dev",
      bgColor: "bg-blue-accent/20",
      iconColor: "text-blue-accent"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      bgColor: "bg-purple-accent/20",
      iconColor: "text-purple-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/supreme",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:bg-blue-accent/20 text-blue-accent" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-600/20 text-blue-400" },
    { icon: Dribbble, href: "#", color: "hover:bg-purple-accent/20 text-purple-accent" },
    { icon: Github, href: "#", color: "hover:bg-green-500/20 text-green-400" }
  ];

  return (
    <section id="contact" className="py-20 slate-custom-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Create Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to push the boundaries of what's possible? Let's build something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                    <info.icon className={`${info.iconColor}`} size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 glass-effect rounded-lg flex items-center justify-center ${social.color} transition-all`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-slate-700/50 border-gray-600 focus:border-blue-accent"
                  disabled={contactMutation.isPending}
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-slate-700/50 border-gray-600 focus:border-blue-accent"
                  disabled={contactMutation.isPending}
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Project collaboration"
                  className="w-full bg-slate-700/50 border-gray-600 focus:border-blue-accent"
                  disabled={contactMutation.isPending}
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-700/50 border-gray-600 focus:border-blue-accent resize-none"
                  disabled={contactMutation.isPending}
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-accent to-purple-accent hover:from-blue-600 hover:to-purple-600 py-3 rounded-lg font-semibold transition-all"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <blockquote className="text-2xl italic text-gray-300 mb-4">
            "Thanks for visiting! Let's create something amazing together."
          </blockquote>
          <cite className="blue-accent font-semibold">- Supreme</cite>
        </motion.div>
      </div>
    </section>
  );
          }
