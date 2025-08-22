'use client'

import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Algo deu errado!
        </h2>
        <p className="text-gray-600 mb-6">
          Ocorreu um erro inesperado. Tente novamente ou entre em contato conosco se o problema persistir.
        </p>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            Tentar novamente
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'} className="w-full">
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  )
}