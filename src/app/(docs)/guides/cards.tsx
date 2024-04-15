"use client";
import { MiniCardStack } from "src/components/ui/image-card";
import Link from 'next/link';

const GRADS = [
    {
        id: 0,
        name: "Graaadients",
        src: "/images/products/p-grad.jpg",
        designation: "",
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
        name: "",
        src: "/images/products/3dicons.jpg",
        designation: "",
        content: (
            <p>
               
            </p>
        ),
    },
];

export function Cards() {
    return (
        <div className="grid gap-3 justify-center">
        <Link
            href="/products/3dicons">
            <MiniCardStack items={ICONS3D} />
        </Link>
            <Link
                href="/products/graaadients">
                <MiniCardStack items={GRADS} />
            </Link>

        </div>
    );
}




