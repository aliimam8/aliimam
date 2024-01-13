"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "src/components/ui/image-card";
import Link from 'next/link';

const GRADS = [
    {
        id: 0,
        name: "Graaadients",
        src: "/bbg.png",
        designation: "Introducing",
        content: (
            <p>
                +1000 abstract gradient elements and backgrounds
                for your amazing design projects
            </p>
        ),
    },
];

export function Graaadients() {
    return (
        <div className="flex gap-2 justify-center">
            <Link
                href="/products/graaadients">
                <CardStack items={GRADS} />
            </Link>
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};


