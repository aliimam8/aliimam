import * as React from "react"
import Link from "next/link"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Icons } from 'src/components/icons';
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ClientButton } from "./client-button"

interface ErrorCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description: string
  retryLink?: string
  retryLinkText?: string
  reset?: () => void
}

export function ErrorCard({
  icon: Icon = ExclamationTriangleIcon,
  title,
  description,
  retryLink,
  retryLinkText = "Go back",
  reset,
  className,
  ...props
}: ErrorCardProps) {
  return (
    <Card
      as="section"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={cn("grid w-full place-items-center mt-10", className)}
      {...props}
    >
      <CardHeader>
        <div className="grid place-items-center text-aired mt-10">
        <Icons.warning strokeWidth={0.6} size={80} />
        </div>
      </CardHeader>
      <CardContent className="flex min-h-[176px] flex-col items-center justify-center space-y-2.5 text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>
      {retryLink ? (
        <CardFooter>
          <Link
            href={retryLink}
            className={cn(
              buttonVariants({
                variant: "redbutton",
              })
            )}
          >
            {retryLinkText}
            <span className="sr-only">{retryLinkText}</span>
          </Link>
        </CardFooter>
      ) : null}
      {reset ? (
        <CardFooter>
          <ClientButton aria-label="Retry" variant="redbutton" onClick={reset}>
            Retry
          </ClientButton>
        </CardFooter>
      ) : null}
    </Card>
  )
}