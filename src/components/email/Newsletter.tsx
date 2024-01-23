"use client";

import { getPlaneKeyframes } from "@/lib/email/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/email/getTrailsKeyframes";
import { gsap } from "gsap";
import { FormEvent, useRef, useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React from "react";
import { Icons } from "../icons";

function NewsletterForm() {
  const [input, setInput] = useState("");
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);

      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });

      to(button, { keyframes: getTrailsKeyframes(button) });
    }

    const res = await fetch("/api/subscription", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };

  const [isPending, startTransition] = React.useTransition()


  return (
    <div className="flex flex-col pb-20 mx-auto justify-center max-w-xs space-y-4">
      <form
        onSubmit={handleSubmit}
        className="newsletter-form mt-6 animate-fade-in-3"
      >
        <div className="group relative flex items-center py-1">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="aliimam@ai.in"
            required
            type="email"
            className="flex-1 text-sm sm:text-base outline-none bg-transparent "
          />
          <Button
            className="absolute right-0 z-20 h-10 w-10"
            size="icon"
            disabled={isPending}
            ref={buttonRef}
            type="submit"
          >
            {isPending ? (
              <Icons.spinner
                className="h-3 w-3 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <div className="rounded-md bg-aired">
              <Icons.send className="h-4 w-4 m-2 text-white " aria-hidden="true" />
              </div>
            )}
            <span className="sr-only">Join newsletter</span>
          </Button>

        </div>
      </form>

      <div className="relative">
        {(successMessage || errorMessage) && (
          <div className="flex rounded-xl dark:bg-slate-800 bg-slate-200 absolute">
            <div className="text-xs py-4 px-8">
              {successMessage ? (
                <p>
                  We&apos;ve added{" "}
                  to our waitlist. We&apos;ll let you know when we launch!
                </p>
              ) : (
                <p>
                  You are already added to our waitlist. We&apos;ll let you know
                  when we launch!
                </p>
              )}
            </div>
            <div className="rounded-md h-6 w-6 absolute right-2 top-2 bg-aired">
            <Icons.close
              className="h-4 w-4 m-1 text-white"
              onClick={dismissMessages}
            />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterForm;