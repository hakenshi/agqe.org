'use client'

import { ErrorBoundary } from "@/components/error/error-boundary"

export default function HomeError({
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
        title="Erro na página inicial"
        message="Não foi possível carregar o conteúdo da página inicial. Verifique sua conexão e tente novamente."
      />
    </div>
  )
}