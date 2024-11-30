// 'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import heroimg from "../../../public/image.png"
import Spline from '@splinetool/react-spline/next';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-sky-900 dark:via-blue-800 dark:to-indigo-900 text-gray-800 dark:text-gray-100 min-h-screen flex items-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                >
                    <source src="/vid2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-800 dark:text-blue-200">
                            Ace Your Next Interview with AI-Powered Preparation
                        </h1>
                        <p className="text-xl mb-8 text-blue-700 dark:text-blue-300">
                            Personalized practice, real-time feedback, and interactive video responses to refine your interview skills.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-blue-50 dark:hover:bg-blue-400">
                                Start Your Free Trial
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10">
                                Learn More
                                <Play className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-400 dark:from-blue-700 dark:to-indigo-600 rounded-lg transform rotate-3 scale-105"></div>
                            <Image
                                src={heroimg}
                                alt="PrepPal Dashboard Preview"
                                className="relative rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave SVG */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        className="text-white dark:text-gray-900"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    )
}