import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Logos() {
  return (
    <div className="">
      <div>
        <Marquee direction="left" speed={40} delay={0} pauseOnHover={true}>
          <div className="image_wrapper relative mx-auto flex w-full justify-start ">
            <h1 className=" text-center text-2xl font-extrabold uppercase tracking-[.1em] text-aired "></h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
