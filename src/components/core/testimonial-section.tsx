'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Software Engineer at TechCorp',
        content: 'PrepPal helped me ace my technical interview. The AI-generated questions were spot-on!',
        avatar: '/avatars/sarah.jpg'
    },
    {
        name: 'Michael Chen',
        role: 'Product Manager at InnovateCo',
        content: 'The video analysis feature gave me insights I never would have noticed on my own. Highly recommended!',
        avatar: '/avatars/michael.jpg'
    },
    {
        name: 'Emily Rodriguez',
        role: 'HR Specialist at GlobalFirm',
        content: `As an HR professional, I'm impressed by the quality and depth of PrepPal's interview simulations.`,
        avatar: '/avatars/emily.jpg'
    }
]

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <Avatar className="h-12 w-12 mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}