"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("lgpd_cookie_consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("lgpd_cookie_consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          Utilizamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com
          a nossa{" "}
          <Link href="/politica-de-privacidade" className="underline hover:text-orange-400">
            Política de Privacidade e LGPD
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <Button onClick={handleAccept} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
            Aceitar
          </Button>
          <Button
            onClick={() => setIsVisible(false)}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-6 py-2"
          >
            <X className="h-4 w-4 mr-2" />
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}
