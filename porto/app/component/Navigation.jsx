"use client";
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Achievements",
        path: "#achievements",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1c1c1e] bg-opacity-50 text-center">
            <div className="container max-w-screen-xl mx-auto flex justify-center p-4">
                <ul className="flex space-x-8">
                    {navLinks.map((navLink, index) => (
                        <li key={index}>
                            <NavLink href={navLink.path} title={navLink.title} /> 
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
