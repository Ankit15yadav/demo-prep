import React from 'react'
import { motion } from 'framer-motion'

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div

                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About PrepPal</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        PrepPal was founded by a team of AI experts and HR professionals with a mission to revolutionize interview preparation. We believe that everyone deserves the opportunity to showcase their best selves in interviews, and our AI-powered platform is designed to make that possible.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <img src="/team-member-1.jpg" alt="Team Member 1" className="w-16 h-16 rounded-full" />
                        <img src="/team-member-2.jpg" alt="Team Member 2" className="w-16 h-16 rounded-full" />
                        <img src="/team-member-3.jpg" alt="Team Member 3" className="w-16 h-16 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection