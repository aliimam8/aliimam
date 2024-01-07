'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

let interval: any;

type Card = {
  id: number;
  src: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 2;
  const SCALE_FACTOR = scaleFactor || 0.02;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative h-full w-48">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-auto w-48 flex-col justify-between rounded-3xl border border-slate-100 bg-white p-3 dark:border-slate-900 dark:bg-black"
            style={{
              transformOrigin: 'top center'
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index //  decrease z-index for the cards that are behind
            }}
          >
            <Image
              src={card.src}
              alt={''}
              loading="lazy"
              className="h-full w-96 cursor-zoom-in rounded-xl object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
              width={300}
              height={300}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
