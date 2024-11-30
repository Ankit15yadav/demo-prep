'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const benefits = [
    'AI-driven practice more effective than static questions',
    'Practice anytime, anywhere',
    'Personalized feedback and improvement tracking',
    'Realistic interview simulations',
    'Comprehensive coverage of various interview types'
]

export default function BenefitsSection() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose PrepPal?</h2>
                <div className="max-w-3xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 mr-4 flex-shrink-0" />
                            <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}