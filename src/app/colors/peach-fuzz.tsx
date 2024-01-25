"use client";
import { CardStack } from "src/components/ui/image-card";
import Link from 'next/link';

const GRADS = [
    {
        id: 0,
        name: "Peach Fuzz",
        src: "/images/products/peach-fuzz.jpg",
        designation: "Color of the Year 2024.",
        content: (
            <p>
               Peach Fuzz is the Pantone Color of the Year for 2024. It's a gentle blend of pink and orange tones. Pantone suggests pairing Peach Fuzz with lavender, yellow green, and burgundy
            </p>
        ),
    },
];

export function PeachFuzz() {
    return (
        <div className="flex mt-10 gap-2 justify-center">
            <Link
                href="/colors/peach-fuzz">
                <CardStack items={GRADS} />
            </Link>
        </div>
    );
}




