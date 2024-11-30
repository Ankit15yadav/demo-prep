"use client"; // Ensure this is at the top of the component

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    href: string;
    currentPath: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, currentPath, children, onClick, className }) => (
    <Link
        href={href}
        onClick={onClick}
        className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
            currentPath === href
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
            className
        )}
    >
        {children}
    </Link>
);

const Navbar: React.FC = () => {
    const path = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { isSignedIn } = useUser();

    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode');
        setIsDarkMode(
            darkModePreference === 'true' ||
            (darkModePreference === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg w-full transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/fulllogo-.png"
                                width={120}
                                height={40}
                                alt="PrepPal logo"
                                className="h-8 w-auto bg-blue-950 px-2 rounded-xl"
                            />
                        </Link>
                        <nav className="hidden md:ml-6 md:flex md:space-x-4">
                            <NavLink href="/dashboard" currentPath={path}>Dashboard</NavLink>
                            <NavLink href="/dashboard/upgrade" currentPath={path}>Pricing</NavLink>
                            <NavLink href="/aboutme" currentPath={path}>About</NavLink>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                        {isSignedIn ? (
                            <UserButton />
                        ) : (
                            <Link href="/sign-in">
                                <Button variant="default">Login</Button>
                            </Link>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/30 backdrop-blur-lg dark:bg-gray-900/30"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink href="/dashboard" currentPath={path} onClick={closeMenu} className="block w-full text-left">
                                Dashboard
                            </NavLink>
                            <NavLink href="/dashboard/upgrade" currentPath={path} onClick={closeMenu} className="block w-full text-left">
                                Pricing
                            </NavLink>
                            <NavLink href="/aboutme" currentPath={path} onClick={closeMenu} className="block w-full text-left">
                                About
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
