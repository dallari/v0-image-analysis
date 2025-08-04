"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Gauge,
  Shield,
  Zap,
  BarChart3,
  Settings,
  CheckCircle,
  Monitor,
  Wrench,
  Calculator,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Typewriter effect
  const services = [
    "Ar Comprimido",
    "Terceirização",
    "Venda de Ar Comprimido",
    "Locação de Equipamentos",
    "Auditoria e Análise",
  ]
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentService = services[currentServiceIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentService) {
        // Pausa antes de começar a deletar
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        // Move para o próximo serviço
        setIsDeleting(false)
        setCurrentServiceIndex((prev) => (prev + 1) % services.length)
      } else if (isDeleting) {
        // Deletando caracteres
        setDisplayText(currentService.substring(0, displayText.length - 1))
      } else {
        // Adicionando caracteres
        setDisplayText(currentService.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentServiceIndex, services])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/logo-flow-energy.png" // ← Altere para o caminho do seu arquivo
                  alt="Flow Energy"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Desktop Menu */}
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
                <Link href="/contato" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Contato
                </Link>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+5511984539311" className="text-orange-600 hover:text-orange-700">
                <Phone className="h-5 w-5" />
              </a>
              <Button asChild className="bg-blue-800 hover:bg-blue-900">
                <Link href="/contato">Solicite Análise</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <a href="tel:+5511984539311" className="text-orange-600 hover:text-orange-700">
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-blue-800 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/empresa"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Empresa
                </Link>
                <Link
                  href="/servicos"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/monitoramento"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Monitoramento
                </Link>
                <Link
                  href="/equipamentos"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Equipamentos
                </Link>
                <Link
                  href="/contato"
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <div className="px-3 py-2">
                  <Button asChild className="w-full bg-blue-800 hover:bg-blue-900">
                    <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                      Solicite Análise
                    </Link>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-600 text-white mb-4">Monitoramento 24h via Internet</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Soluções Completas em{" "}
                <span className="text-orange-400">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Maximize a eficiência da sua indústria com nossos sistemas de ar comprimido de alta performance.
                Economia, confiabilidade e sustentabilidade garantidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contato?service=auditoria">
                    <Calculator className="mr-2 h-5 w-5" />
                    Solicite Análise Técnica Gratuita
                  </Link>
                </Button>
                
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-industrial.jpg"
                alt="Instalações industriais modernas com compressores de ar Flow Energy"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Único */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Não somos apenas uma empresa de locação
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Somos um provedor de soluções em Ar Comprimido com tecnologia de monitoramento via internet 24 horas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-800">
              <CardContent className="p-6">
                <Monitor className="h-12 w-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Monitoramento 24h</h3>
                <p className="text-slate-600">
                  Sistema proprietário de monitoramento via internet com acompanhamento em tempo real do funcionamento
                  dos equipamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Otimização de Custos</h3>
                <p className="text-slate-600">
                  Redução comprovada dos custos de energia elétrica e manutenção com alta eficiência operacional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-slate-600">
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-slate-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Terceirização Completa</h3>
                <p className="text-slate-600">
                  Vasta experiência na terceirização completa de instalações com análise especializada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Modalidades de Serviço */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossas Soluções Especializadas</h2>
            <p className="text-xl text-slate-600">
              Quatro modalidades de serviço para atender todas as necessidades do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-800 transition-colors">
                  <Settings className="h-8 w-8 text-blue-800 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Terceirização Completa</h3>
                <p className="text-slate-600 mb-4">
                  Assumimos total responsabilidade pelas instalações com monitoramento 24h.
                </p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Equipamentos inclusos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instalação completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Manutenção preventiva
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monitoramento via internet
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Zap className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Venda de Ar Comprimido</h3>
                <p className="text-slate-600 mb-4">Fornecimento direto com controle de despesas e prazos otimizados.</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Prazos reduzidos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Controle de custos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexibilidade de demanda
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Qualidade garantida
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-slate-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-600 transition-colors">
                  <Wrench className="h-8 w-8 text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Locação de Equipamentos</h3>
                <p className="text-slate-600 mb-4">Soluções para emergências, manutenção e aumento de produção.</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergências
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Manutenção programada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Aumento de produção
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alta confiabilidade
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <BarChart3 className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Auditoria e Análise</h3>
                <p className="text-slate-600 mb-4">Análises especializadas das instalações existentes.</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diagnóstico completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Identificação de ineficiências
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recomendações técnicas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ROI quantificado
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resultados que Comprovam Nossa Excelência</h2>
            <p className="text-xl text-blue-100">Números que demonstram o impacto das nossas soluções</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Monitoramento Contínuo</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-100">Redução Custos Energia</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-100">Disponibilidade Garantida</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Avançada - Monitoramento */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Tecnologia Exclusiva</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Sistema de Monitoramento via Internet 24h
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Através dos nossos sistemas de monitoramento podemos acompanhar o perfeito funcionamento dos
                equipamentos, utilizando a internet.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Acompanhamento 24 horas</h4>
                    <p className="text-slate-600">Monitoramento contínuo do funcionamento dos equipamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Detecção precoce de problemas</h4>
                    <p className="text-slate-600">Identificação automática de anomalias antes que se tornem críticas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Manutenção preventiva automática</h4>
                    <p className="text-slate-600">Agendamento inteligente baseado em dados reais de uso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Relatórios de eficiência em tempo real</h4>
                    <p className="text-slate-600">Dashboard com indicadores de performance e economia</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                <Monitor className="mr-2 h-5 w-5" />
                Conheça o Sistema de Monitoramento
              </Button>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-lg p-6">
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Dashboard de Monitoramento</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Pressão</div>
                      <div className="text-white text-lg font-bold">8.5 bar</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Temperatura</div>
                      <div className="text-white text-lg font-bold">42°C</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Eficiência</div>
                      <div className="text-green-400 text-lg font-bold">94%</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Economia</div>
                      <div className="text-green-400 text-lg font-bold">R$ 2.847</div>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="text-slate-400 text-xs mb-2">Status dos Equipamentos</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Compressor Principal</span>
                        <span className="text-green-400 text-sm">Operacional</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Secador de Ar</span>
                        <span className="text-green-400 text-sm">Operacional</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Sistema de Filtros</span>
                        <span className="text-yellow-400 text-sm">Manutenção em 5 dias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para Otimizar Seus Custos com Ar Comprimido?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Solicite uma análise técnica gratuita e descubra como podemos reduzir seus custos de energia e manutenção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              <Link href="/contato?service=auditoria">
                <Calculator className="mr-2 h-5 w-5" />
                Análise Técnica Gratuita
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 98453-9311
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-flow-energy-footer.png"
                alt="Flow Energy"
                width={180}
                height={45}
                className="h-12 w-auto mb-4"
              />
              <p className="text-slate-400 mb-4">
                Soluções completas em ar comprimido com monitoramento 24h via internet.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+5511984539311" className="text-orange-400 hover:text-orange-300">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:contato@flowenergy.com.br" className="text-orange-400 hover:text-orange-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Terceirização Completa
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Venda de Ar Comprimido
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Locação de Equipamentos
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Auditoria e Análise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/empresa" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/monitoramento" className="hover:text-white">
                    Monitoramento 24h
                  </Link>
                </li>
                <li>
                  <Link href="/equipamentos" className="hover:text-white">
                    Equipamentos
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 text-orange-400" />
                  <div>
                    <p>Av. Juscelino Kubitscheck de Oliveira, 1459</p>
                    <p>Lot. Inocoop, Mogi Mirim - SP</p>
                    <p>CEP 13806-520</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span>(11) 98453-9311</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span>contato@flowenergy.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Flow Energy. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Seus dados são protegidos conforme a LGPD. Utilizamos exclusivamente para contato comercial e
              desenvolvimento de propostas técnicas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
