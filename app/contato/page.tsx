"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calculator, Monitor, Menu, X } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "../actions/contact"

export default function ContatoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar informações sobre soluções de ar comprimido da Flow Energy.`
    const whatsappUrl = `https://wa.me/5511984539311?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao enviar formulário. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-800">Flow Energy</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/empresa" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Empresa
                </Link>
                <Link href="/servicos" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Serviços
                </Link>
                <Link
                  href="/monitoramento"
                  className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium"
                >
                  Monitoramento
                </Link>
                <Link href="/equipamentos" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Equipamentos
                </Link>
                <Link
                  href="/contato"
                  className="text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-blue-800"
                >
                  Contato
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 hidden md:flex">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-blue-800 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/empresa"
                  className="text-slate-700 hover:text-blue-800 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Empresa
                </Link>
                <Link
                  href="/servicos"
                  className="text-slate-700 hover:text-blue-800 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/monitoramento"
                  className="text-slate-700 hover:text-blue-800 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Monitoramento
                </Link>
                <Link
                  href="/equipamentos"
                  className="text-slate-700 hover:text-blue-800 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Equipamentos
                </Link>
                <Link
                  href="/contato"
                  className="text-blue-800 bg-blue-50 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => {
                      handleWhatsApp()
                      setIsMenuOpen(false)
                    }}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-600 text-white mb-4">Entre em Contato</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Fale com Nossos Especialistas</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Solicite uma análise técnica gratuita e descubra como podemos otimizar seus sistemas de ar comprimido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: (11) 98453-9311
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-white hover:text-blue-800 bg-sky-600">
                <Mail className="mr-2 h-5 w-5" />
                contato@flowenergy.com.br
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Solicite Análise Técnica Gratuita</h2>
              <p className="text-lg text-slate-600 mb-8">
                Preencha o formulário abaixo e nossa equipe técnica entrará em contato para agendar uma análise
                personalizada das suas necessidades.
              </p>

              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input id="nome" name="nome" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa *</Label>
                    <Input id="empresa" name="empresa" type="text" required className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      className="mt-1"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tipoServico">Tipo de Serviço de Interesse</Label>
                  <select
                    id="tipoServico"
                    name="tipoServico"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="terceirizacao">Terceirização Completa</option>
                    <option value="venda-ar">Venda de Ar Comprimido</option>
                    <option value="locacao">Locação de Equipamentos</option>
                    <option value="auditoria">Auditoria e Análise Técnica</option>
                    <option value="monitoramento">Sistema de Monitoramento 24h</option>
                    <option value="outros">Outros / Não sei ainda</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    className="mt-1"
                    rows={4}
                    placeholder="Descreva suas necessidades, equipamentos atuais ou dúvidas específicas..."
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="aceitePrivacidade" name="aceitePrivacidade" required className="mt-1" />
                  <Label htmlFor="aceitePrivacidade" className="text-sm text-slate-600 leading-relaxed">
                    Aceito que meus dados sejam utilizados conforme a LGPD, exclusivamente para contato comercial e
                    desenvolvimento de propostas técnicas. A Flow Energy nunca compartilha dados com terceiros.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-800 hover:bg-blue-900"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Solicitar Análise Técnica Gratuita"}
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-green-600" />
                    Contato Direto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">WhatsApp / Telefone</h4>
                    <p className="text-slate-600">(11) 98453-9311</p>
                    <Button onClick={handleWhatsApp} className="mt-2 bg-green-600 hover:bg-green-700" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar no WhatsApp
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">E-mail</h4>
                    <p className="text-slate-600">contato@flowenergy.com.br</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-800" />
                    Nossa Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="font-medium">Av. Juscelino Kubitscheck de Oliveira, 1459</p>
                    <p className="text-slate-600">Lot. Inocoop</p>
                    <p className="text-slate-600">Mogi Mirim - SP</p>
                    <p className="text-slate-600">CEP 13806-520</p>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    "Se preferir, faça-nos uma visita, será um prazer recebê-lo(a)"
                  </p>
                  <Button
                    variant="outline"
                    className="mt-3 bg-transparent"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/Av.+Juscelino+Kubitschek+de+Oliveira,+1459+-+Lot.+Inocoop,+Mogi+Mirim+-+SP,+13806-520/@-22.4321,-46.9578,17z",
                        "_blank",
                      )
                    }
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver no Mapa
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-orange-600" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-medium">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-medium">8h às 12h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergências:</span>
                      <span className="font-medium text-green-600">24h via WhatsApp</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Serviços Especializados</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calculator className="h-4 w-4 text-blue-800" />
                      <span className="text-sm">Análise técnica gratuita</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4 text-blue-800" />
                      <span className="text-sm">Demonstração do monitoramento 24h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-800" />
                      <span className="text-sm">Atendimento técnico especializado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Outras Formas de Contato */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Outras Formas de Contato</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fique à vontade para falar conosco da maneira que for mais conveniente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: (11) 98453-9311
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-800 text-blue-800 hover:bg-blue-50 bg-transparent"
              >
                <a href="mailto:contato@flowenergy.com.br">
                  <Mail className="mr-2 h-5 w-5" />
                  contato@flowenergy.com.br
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
