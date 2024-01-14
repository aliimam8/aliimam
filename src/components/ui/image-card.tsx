"use client";
import { useState } from "react";
import Image from 'next/image';

import React from "react";

let interval: any;

type Card = {
  id: number;
  src: string;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);

  return (
    <div className="border rounded-3xl p-2 border-slate-200 dark:border-slate-800">
      <div className="relative flex h-[450px]">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="h-full w-[320px] md:w-[600px] lg:w-[1000px] flex  flex-col">
              <Image
                src={card.src}
                alt={''}
                loading="lazy"
                className="absolute rounded-2xl -z-10 h-full w-full object-cover object-center"
                width={1200}
                height={800}
              />
             <div className="grid">
              <div className="p-6">
                <p className="text-white text-4xl font-bold ">
                  {card.name}
                </p>
                <p className="text-white px-1 font-normal ">
                  {card.designation}
                </p>
              </div>
              <div className="text-xs md:text-sm absolute bottom-6 flex text-white px-6">
                {card.content}
              </div>
            </div>
            </div> 
          );
        })}

      </div>
    </div>
  );
};
