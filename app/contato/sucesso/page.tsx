"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SucessoPage() {
  const handleWhatsApp = () => {
    const message = `Olá! Acabei de enviar uma solicitação pelo site e gostaria de agilizar o atendimento.`
    const whatsappUrl = `https://wa.me/5511984539311?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">Solicitação Enviada!</h1>
            <p className="text-slate-600">
              Recebemos sua solicitação de análise técnica. Nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Próximos passos:</strong>
              <br />• Análise das suas necessidades
              <br />• Agendamento da visita técnica
              <br />• Proposta personalizada
            </p>
          </div>

          <div className="space-y-3">
            <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar no WhatsApp Agora
            </Button>

            <Button asChild variant="outline" className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Site
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
