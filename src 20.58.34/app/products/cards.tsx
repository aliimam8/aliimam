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
                +1000 abstract gradient elements and backgrounds
                for your amazing design projects.
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




