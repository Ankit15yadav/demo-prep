'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Video, BarChart } from 'lucide-react'

const steps = [
    {
        icon: UserPlus,
        title: 'Create Your Profile',
        description: 'Sign up and input your experience and skills to tailor your interview practice.'
    },
    {
        icon: Video,
        title: 'Practice with AI',
        description: 'Engage in realistic interview simulations with our AI-powered system.'
    },
    {
        icon: BarChart,
        title: 'Get Instant Feedback',
        description: 'Receive detailed analysis and suggestions to improve your performance.'
    }
]

export default function HowItWorksSection() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 inline-block mb-4">
                                <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}