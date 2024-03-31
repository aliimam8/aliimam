"use client";
import { CardStack } from "src/components/ui/image-card";
import Link from 'next/link';

const GRADS = [
    {
        id: 0,
        name: "Graaadients",
        src: "/images/products/p-grad.jpg",
        designation: "Download. Edit. Upload.",
        content: (
            <p>
                +100 abstract gradient elements and backgrounds
                for your amazing design projects.
            </p>
        ),
    },
];

const BLOCKS = [
    {
        id: 0,
        name: "Blocks",
        src: "/images/products/blocks.jpg",
        designation: "Download. Edit. Upload.",
        content: (
            <p>
                +100 Beautifully designed components.
            </p>
        ),
    },
];

export function Graaadients() {
    return (
        <div className="grid gap-6 justify-center">
            <Link
                href="/products/blooocks">
                <CardStack items={BLOCKS} />
            </Link>
            <Link
                href="/products/graaadients">
                <CardStack items={GRADS} />
            </Link>

        </div>
    );
}




