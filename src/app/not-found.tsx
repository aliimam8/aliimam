import { ErrorCard } from "src/components/ui/error-card"

export default function PageNotFound() {
  return (
    <div className="mx-auto mt-20 max-w-4xl px-6">
      <ErrorCard
        title="Page not found"
        description="The page you are looking for does not exist"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  )
}