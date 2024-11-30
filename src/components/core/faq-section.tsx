'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How does PrepPal's AI generate interview questions?",
        answer: "PrepPal's AI analyzes your profile, including your skills, experience, and target job roles, to generate relevant and challenging interview questions tailored to your specific needs."
    },
    {
        question: "Is my data secure with PrepPal?",
        answer: "Yes, we take data security very seriously. All your personal information and interview recordings are encrypted and stored securely. We never share your data with third parties without your explicit consent."
    },
    {
        question: "Can I use PrepPal on my mobile device?",
        answer: "PrepPal is fully responsive and works on desktop, tablet, and mobile devices. You can practice your interview skills anytime, anywhere."
    },
    {
        question: "How accurate is the AI feedback?",
        answer: "Our AI feedback system is highly accurate and constantly improving. It analyzes various aspects of your responses, including content, delivery, and body language, providing insights that are on par with human interviewers."
    }
]

export default function FAQSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-xl text-gray-800 dark:text-gray-200">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}