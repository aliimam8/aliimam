"use client"
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';

import 'src/styles/slide.css';

const AISlide = () => {
    return (
        <>
            <div className="mx-auto mt-10 max-w-3xl px-6">
                <div className='flex gap-2 justify-center '>
                    <ImgComparisonSlider>
                            <Image slot="first"
                                className='rounded-3xl'
                                src="/images/products/p-grad.jpg"
                                width={900}
                                height={400}
                                alt={''}
                            />
                            <Image slot="second"
                                className='rounded-3xl'
                                src="/images/products/grad.png"
                                width={900}
                                height={400}
                                alt={''} />
                    </ImgComparisonSlider>
                </div>
            </div>
        </>
    );
};

export default AISlide