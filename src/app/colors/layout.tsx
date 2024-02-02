"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LampContainer } from "src/components/ui/lamp";

export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <div >
            <main>{children}</main>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                </motion.h1>
            </LampContainer>
        </div>
    );
}
