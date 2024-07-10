// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-gray-800 h-16 flex items-center justify-center">
            <Link href="#investments">
                <div className="text-white px-4 py-2 cursor-pointer">Investimentos</div>
            </Link>
            <Link href="#about">
                <div className="text-white px-4 py-2 cursor-pointer">Sobre Nós</div>
            </Link>
            <Link href="#services">
                <div className="text-white px-4 py-2 cursor-pointer">Nossos Serviços</div>
            </Link>
            <Link href="#contact">
                <div className="text-white px-4 py-2 cursor-pointer">Contato</div>
            </Link>
        </div>
    );
};

export default Navbar;
