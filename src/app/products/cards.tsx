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

const ICONS3D = [
    {
        id: 1,
        name: "3D Icons",
        src: "/images/products/3dicons.jpg",
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
            href="/products/3dicons">
            <CardStack items={ICONS3D} />
        </Link>
            <Link
                href="/products/graaadients">
                <CardStack items={GRADS} />
            </Link>

        </div>
    );
}




