import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Label } from "@/components/ui/label"
import { Toaster, toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const EMAILJS_SERVICE_ID = 'service_m7jj3tq'
    const EMAILJS_TEMPLATE_ID = 'template_kr4h6tw'
    const EMAILJS_PUBLIC_KEY = 'wanMmlGL00ZDqWIzU'

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Raj Sahu',
                },
                EMAILJS_PUBLIC_KEY
            )

            setSubmitStatus('success')
            toast.success("Message has been sent successfully!");
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus('error')
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full min-h-screen bg-transparent text-white px-4 py-12 mt-10" id="contact">
            <Toaster richColors position="top-center" />
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Label className="relative text-3xl w-fit sm:text-5xl pointer-events-auto group cursor-pointer text-white mx-auto block">
                        Get In Touch

                    </Label>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                        Let's create something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="bg-gray-900 border-gray-700 shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Send Message</CardTitle>
                            <CardDescription className="text-gray-400">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-white">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-white">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-white">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project or idea..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-400 focus:ring-emerald-400 resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg transition-colors duration-200"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <Card className="bg-gray-900 border-gray-700 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Feel free to reach out through any of these channels.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors duration-200">
                                        <Mail className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <p className="text-gray-400">rajsahu0702@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors duration-200">
                                        <Phone className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Phone</p>
                                        <p className="text-gray-400">+91 91420 23819</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors duration-200">
                                        <MapPin className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Location</p>
                                        <p className="text-gray-400">Ranchi, Jharkhand, India</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="bg-gray-900 border-gray-700 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Connect With Me</CardTitle>
                                <CardDescription className="text-gray-400">
                                    Let's connect on social media and professional networks.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://github.com/rajsahu08"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pointer-events-auto flex items-center space-x-2 bg-gray-800 hover:bg-emerald-600/20 border border-gray-600 hover:border-emerald-400/50 rounded-lg px-4 py-3 transition-all duration-200 group"
                                    >
                                        <Github className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                                        <span className="text-white">GitHub</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/rajsahu0702/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pointer-events-auto flex items-center space-x-2 bg-gray-800 hover:bg-emerald-600/20 border border-gray-600 hover:border-emerald-400/50 rounded-lg px-4 py-3 transition-all duration-200 group"
                                    >
                                        <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                                        <span className="text-white">LinkedIn</span>
                                    </a>


                                </div>
                            </CardContent>
                        </Card>

                        {/* Status Badge */}
                        <div className="flex justify-center">
                            <Badge className="bg-emerald-600/20 text-emerald-300 border border-emerald-600/30 px-4 py-2 text-sm">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                Available for freelance work
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}