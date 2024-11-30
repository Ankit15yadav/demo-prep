'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Video, Settings } from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'AI-Generated Questions',
        description: 'Our AI adapts questions based on your skills and industry, ensuring a tailored interview experience.'
    },
    {
        icon: Video,
        title: 'Video Recording and Analysis',
        description: 'Get real-time feedback on your video responses, including body language, speech clarity, and confidence.'
    },
    {
        icon: Settings,
        title: 'Customizable Practice',
        description: 'Choose from various interview types: technical, HR, management, and more to suit your needs.'
    }
]

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}