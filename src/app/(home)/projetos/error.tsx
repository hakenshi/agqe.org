'use client'

import { ErrorBoundary } from "@/components/error/error-boundary"

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container mx-auto px-4 py-16">
      <ErrorBoundary 
        error={error}
        reset={reset}
        title="Erro ao carregar projetos"
        message="Não foi possível carregar a lista de projetos. Verifique sua conexão e tente novamente."
      />
    </div>
  )
}