"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Wifi,
  BarChart3,
  Bell,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Activity,
  Gauge,
  Settings,
  Phone,
  Calculator,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MonitoramentoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo-flow-energy.png" alt="Flow Energy" width={160} height={40} className="h-10 w-auto" />
              </Link>
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
                  className="text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-blue-800"
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
                  className="block px-3 py-2 text-base font-medium text-blue-800 bg-blue-50"
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
              <Badge className="bg-orange-600 text-white mb-4">Tecnologia Exclusiva</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Monitoramento 24h via Internet</h1>
              <p className="text-xl mb-8 text-blue-100">
                Através dos nossos sistemas de monitoramento podemos acompanhar o perfeito funcionamento dos
                equipamentos, utilizando a internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contato?service=auditoria">
                    <Monitor className="mr-2 h-5 w-5" />
                    Solicitar Demonstração
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Economia
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-slate-900 rounded-lg p-6 shadow-2xl">
                <div className="bg-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Sistema de Monitoramento Flow Energy</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Online - Tempo Real</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Pressão Atual</div>
                      <div className="text-white text-lg font-bold">8.5 bar</div>
                      <div className="text-green-400 text-xs">Normal</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Temperatura</div>
                      <div className="text-white text-lg font-bold">42°C</div>
                      <div className="text-green-400 text-xs">Ideal</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Eficiência</div>
                      <div className="text-green-400 text-lg font-bold">94%</div>
                      <div className="text-green-400 text-xs">+2% hoje</div>
                    </div>
                    <div className="bg-slate-700 rounded p-3">
                      <div className="text-slate-400 text-xs">Economia Mensal</div>
                      <div className="text-green-400 text-lg font-bold">R$ 2.847</div>
                      <div className="text-green-400 text-xs">vs mês anterior</div>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="text-slate-400 text-xs mb-2">Status dos Equipamentos</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Compressor Principal</span>
                        <span className="text-green-400 text-sm flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Operacional
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Secador de Ar</span>
                        <span className="text-green-400 text-sm flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Operacional
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Sistema de Filtros</span>
                        <span className="text-yellow-400 text-sm flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          Manutenção em 5 dias
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Como Funciona o Sistema de Monitoramento
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tecnologia avançada que conecta seus equipamentos à internet para monitoramento contínuo e otimização
              automática
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conexão via Internet</h3>
                <p className="text-slate-600">
                  Sensores inteligentes conectados via internet coletam dados em tempo real dos equipamentos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Análise Inteligente</h3>
                <p className="text-slate-600">
                  Algoritmos avançados processam os dados e identificam padrões, anomalias e oportunidades de otimização
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ação Preventiva</h3>
                <p className="text-slate-600">
                  Alertas automáticos e ações preventivas garantem máxima eficiência e evitam paradas não programadas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fluxo do Sistema */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center mb-8">Fluxo de Monitoramento em Tempo Real</h3>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  1
                </div>
                <h4 className="font-semibold mb-2">Coleta de Dados</h4>
                <p className="text-sm text-slate-600">Sensores capturam informações 24/7</p>
              </div>
              <div className="hidden lg:block text-slate-400">→</div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  2
                </div>
                <h4 className="font-semibold mb-2">Transmissão</h4>
                <p className="text-sm text-slate-600">Dados enviados via internet</p>
              </div>
              <div className="hidden lg:block text-slate-400">→</div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  3
                </div>
                <h4 className="font-semibold mb-2">Processamento</h4>
                <p className="text-sm text-slate-600">IA analisa e identifica padrões</p>
              </div>
              <div className="hidden lg:block text-slate-400">→</div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3">
                  4
                </div>
                <h4 className="font-semibold mb-2">Ação</h4>
                <p className="text-sm text-slate-600">Otimização automática e alertas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Detalhados */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Benefícios do Monitoramento 24h</h2>
            <p className="text-xl text-slate-600">
              Vantagens concretas que impactam diretamente seus resultados operacionais
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Acompanhamento 24 Horas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Monitoramento Contínuo</h4>
                    <p className="text-slate-600">
                      Vigilância ininterrupta do funcionamento dos equipamentos, 365 dias por ano
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Activity className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Dados em Tempo Real</h4>
                    <p className="text-slate-600">
                      Informações atualizadas instantaneamente sobre pressão, temperatura, consumo e eficiência
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-800 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Máxima Disponibilidade</h4>
                    <p className="text-slate-600">
                      Garantia de funcionamento contínuo com intervenções preventivas automáticas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Central de monitoramento 24h"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">24/7 Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sistema de detecção precoce de problemas"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Alerta Preventivo</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Detecção Precoce de Problemas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Identificação Automática</h4>
                    <p className="text-slate-600">
                      Algoritmos detectam anomalias antes que se tornem problemas críticos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-6 w-6 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Alertas Inteligentes</h4>
                    <p className="text-slate-600">Notificações automáticas para nossa equipe técnica e para você</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Prevenção de Paradas</h4>
                    <p className="text-slate-600">Evita paradas não programadas que podem custar milhares de reais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Manutenção Preventiva Automática</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Agendamento Inteligente</h4>
                    <p className="text-slate-600">Manutenções programadas baseadas em dados reais de uso e desgaste</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Otimização da Vida Útil</h4>
                    <p className="text-slate-600">Maximiza a durabilidade dos equipamentos com intervenções precisas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Gauge className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Performance Otimizada</h4>
                    <p className="text-slate-600">Mantém os equipamentos sempre operando na máxima eficiência</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Técnico realizando manutenção preventiva"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Manutenção Programada</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Relatórios de eficiência em tempo real"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-800" />
                  <span className="text-sm font-medium">Relatório em Tempo Real</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Relatórios de Eficiência em Tempo Real</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Dashboard Interativo</h4>
                    <p className="text-slate-600">Visualização em tempo real de todos os indicadores de performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Análise de Tendências</h4>
                    <p className="text-slate-600">Identificação de padrões de consumo e oportunidades de economia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calculator className="h-6 w-6 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">ROI Mensurado</h4>
                    <p className="text-slate-600">Cálculo preciso da economia gerada pelo sistema de monitoramento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Comprovados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Resultados Comprovados do Monitoramento
            </h2>
            <p className="text-xl text-slate-600">Números reais que demonstram o impacto do nosso sistema</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center border-t-4 border-t-blue-800">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-800 mb-2">99.8%</div>
                <div className="text-slate-600">Disponibilidade dos Equipamentos</div>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-orange-600">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">35%</div>
                <div className="text-slate-600">Redução Média nos Custos de Energia</div>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-green-600">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-slate-600">Redução em Paradas Não Programadas</div>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-purple-600">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">6 meses</div>
                <div className="text-slate-600">ROI Médio do Sistema</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Case de Sucesso</h3>
              <p className="text-lg text-slate-600">Indústria metalúrgica de médio porte - Resultados após 12 meses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 47.000</div>
                  <div className="text-slate-600">Economia anual em energia</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-slate-600">Redução em manutenções corretivas</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Zero</div>
                  <div className="text-slate-600">Paradas não programadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experimente o Monitoramento 24h na Sua Empresa</h2>
          <p className="text-xl mb-8 text-blue-100">
            Descubra como nossa tecnologia pode revolucionar a gestão dos seus sistemas de ar comprimido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contato?service=auditoria">
                <Monitor className="mr-2 h-5 w-5" />
                Solicitar Demonstração
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 98453-9311
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
