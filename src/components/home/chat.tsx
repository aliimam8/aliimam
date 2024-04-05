'use client';

import { useChat } from 'ai/react';
import { Input } from '../ui/input';
import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-effect";
import { Icons } from '../icons';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

export default function Chat() {
    const router = useRouter()
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [hovered, setHovered] = React.useState(false);

    return (
        <div className="w-full md:mt-6 mb-16 gap-4 mx-auto px-8">
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="overflow-hidden items-center justify-center w-full mx-auto relative"
            >
                <div className="border rounded-3xl border-slate-200 dark:border-slate-800 mx-auto max-w-2xl flex items-center justify-center w-full mx-auto p-4 relative">
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 1 }}
                                className="h-full w-full absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 1]}
                                    dotSize={1}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className='z-20 w-full'>
                        <ScrollArea className="h-60 w-full p-2 md:p-4">
                            <div className=''>
                                {messages.map(m => (
                                    <div key={m.id} className='space-y-2 p-2 overflow-hidden'>
                                        <p className='text-black dark:text-white font-bold'> {m.role === 'user' ? 'User: ' : 'AI: '}</p>
                                        <p className='text-slate-600 dark:text-slate-400'>{m.content}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className='mt-2 w-full relative'>
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <Input
                                        className='pl-10'
                                        value={input}
                                        placeholder="Ask something with AI"
                                        onChange={handleInputChange}
                                    />

                                </div>
                            </form>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="default"
                                            size="icon"
                                            className="absolute left-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-aired"
                                            onClick={() => {
                                                router.push('/new')
                                            }}
                                        >
                                            <Icons.add className='w-5 h-5 text-white' />

                                            <span className="sr-only">New Chat</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        New Chat
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <div className="">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button type="submit"
                                                variant="default"
                                                size="icon"
                                                className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-aired"
                                                disabled={input === ''}>
                                                <Icons.enter className='w-4 h-4 mx-1 text-white' />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Send message</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}