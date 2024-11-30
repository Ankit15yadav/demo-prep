import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Basic',
        price: '$9.99',
        features: ['5 AI-powered interview sessions', 'Basic video analysis', 'Email support']
    },
    {
        name: 'Pro',
        price: '$19.99',
        features: ['Unlimited AI-powered sessions', 'Advanced video & speech analysis', 'Priority email support', 'Interview performance tracking']
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['All Pro features', 'Custom question sets', 'Dedicated account manager', 'API access']
    }
]

const PricingSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
                            <ul className="mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center mb-2">
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                                Choose Plan
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection