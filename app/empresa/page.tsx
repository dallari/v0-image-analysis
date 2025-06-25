"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  TrendingUp,
  CheckCircle,
  Monitor,
  Settings,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EmpresaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/empresa"
                  className="text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-blue-800"
                >
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
            <div className="hidden md:block">
              <Button asChild className="bg-blue-800 hover:bg-blue-900">
                <Link href="/contato">Solicite Análise</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
                  className="block px-3 py-2 text-base font-medium text-blue-800 bg-blue-50"
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
              <Badge className="bg-orange-600 text-white mb-4">Sobre a Flow Energy</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Não somos apenas uma empresa de locação
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Somos um provedor de soluções em Ar Comprimido com vasta experiência na terceirização completa de
                instalações e tecnologia de monitoramento via internet.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Target className="mr-2 h-5 w-5" />
                Conheça Nossa Missão
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Equipe Flow Energy em instalação industrial"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento Estratégico */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nosso Posicionamento Estratégico</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Redefinimos o conceito de fornecimento de ar comprimido, oferecendo soluções completas e integradas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-t-4 border-t-blue-800">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-blue-800 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-slate-600 text-lg">
                  Otimizar e reduzir os custos de energia elétrica e manutenção dos equipamentos dos clientes com alta
                  eficiência
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-orange-600">
              <CardContent className="p-8">
                <Eye className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-slate-600 text-lg">
                  Ser referência nacional em soluções completas de ar comprimido com tecnologia de monitoramento
                  avançada
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-slate-600">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                <p className="text-slate-600 text-lg">
                  Eficiência, inovação, confiabilidade e parceria de longo prazo com nossos clientes
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Declaração Principal */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              "Não somos apenas uma empresa de locação, mas sim um provedor de soluções em Ar Comprimido"
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Esta declaração define nossa essência: vamos além do fornecimento de equipamentos, oferecendo soluções
              completas, integradas e tecnologicamente avançadas que transformam a forma como nossos clientes gerenciam
              seus sistemas de ar comprimido.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-orange-600 text-white mb-4">Vídeo Institucional</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Conheça a Flow Energy na Prática</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Veja como atuamos no mercado e nosso compromisso com a excelência em soluções de ar comprimido
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <iframe
                src="https://www.youtube.com/embed/xOwR2A2C2f4"
                title="Flow Energy - Mundo Empresarial"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-slate-600">
                <strong>Flow Energy</strong> no programa Mundo Empresarial - Conheça nossa trajetória e expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise e Diferencial */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossa Expertise e Diferencial</h2>
            <p className="text-xl text-slate-600">Anos de experiência combinados com inovação tecnológica</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Vasta Experiência em Terceirização</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Terceirização Completa de Instalações</h4>
                    <p className="text-slate-600">
                      Assumimos total responsabilidade pelos sistemas de ar comprimido, desde o projeto até a manutenção
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Análises Especializadas</h4>
                    <p className="text-slate-600">
                      Especialistas em análises detalhadas de instalações existentes para otimização de performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Redução Comprovada de Custos</h4>
                    <p className="text-slate-600">
                      Histórico consistente de redução significativa nos custos operacionais dos clientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Técnico Flow Energy realizando análise de instalação"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sistema de monitoramento Flow Energy"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inovação Tecnológica</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Monitor className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Pioneiros em Monitoramento Remoto</h4>
                    <p className="text-slate-600">
                      Sistema proprietário de monitoramento via internet 24 horas, único no mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Análise de Dados em Tempo Real</h4>
                    <p className="text-slate-600">
                      Coleta e análise contínua de dados para otimização automática dos sistemas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Manutenção Preditiva</h4>
                    <p className="text-slate-600">
                      Tecnologia avançada para prevenção de falhas e otimização da vida útil dos equipamentos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Compromissos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossos Valores e Compromissos</h2>
            <p className="text-xl text-slate-600">Princípios que guiam nossa atuação e relacionamento com clientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
                  <TrendingUp className="h-8 w-8 text-blue-800 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eficiência Energética</h3>
                <p className="text-slate-600">
                  Compromisso com a redução do consumo energético e otimização da performance dos sistemas
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                  <Shield className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Confiabilidade</h3>
                <p className="text-slate-600">
                  Garantia de funcionamento contínuo e suporte técnico especializado 24 horas por dia
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Lightbulb className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inovação Contínua</h3>
                <p className="text-slate-600">
                  Investimento constante em tecnologia e desenvolvimento de soluções avançadas
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Users className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Parceria de Longo Prazo</h3>
                <p className="text-slate-600">
                  Relacionamento duradouro baseado em confiança mútua e resultados consistentes
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <Award className="h-8 w-8 text-red-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excelência Técnica</h3>
                <p className="text-slate-600">
                  Equipe altamente qualificada e processos certificados para máxima qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors">
                  <Target className="h-8 w-8 text-yellow-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Foco em Resultados</h3>
                <p className="text-slate-600">Compromisso com metas mensuráveis de economia e eficiência operacional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para Conhecer Nossas Soluções?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Descubra como nossa experiência e tecnologia podem transformar seus sistemas de ar comprimido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Monitor className="mr-2 h-5 w-5" />
              Conheça o Monitoramento 24h
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Ver Nossos Serviços
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
