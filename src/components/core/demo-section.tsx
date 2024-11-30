'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function DemoSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">See PrepPal in Action</h2>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="/logo.png"
                            alt="PrepPal Demo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                                onClick={() => {
                                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
                                }}
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Watch Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}