"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Settings, Zap, Shield, Award, TrendingUp, Wrench, Filter, Gauge, Phone, Calculator, Star, ThermometerSun, Droplets, Wind } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function EquipamentosPage() {
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
                  className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium"
                >
                  Monitoramento
                </Link>
                <Link
                  href="/equipamentos"
                  className="text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-blue-800"
                >
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
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Monitoramento
                </Link>
                <Link
                  href="/equipamentos"
                  className="block px-3 py-2 text-base font-medium text-blue-800 bg-blue-50"
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
          <div className="text-center">
            <Badge className="bg-orange-600 text-white mb-4">Equipamentos de Alta Performance</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Equipamentos de Ar Comprimido</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Soluções completas em equipamentos novos, usados e sistemas de tratamento de ar com tecnologia de ponta
              para máxima performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contato?service=auditoria">
                  <Calculator className="mr-2 h-5 w-5" />
                  Dimensionar Sistema
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Equipamentos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="novos" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto p-1 bg-blue-100 rounded-xl">
              <TabsTrigger
                value="novos"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 ease-in-out text-blue-800 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-3 px-4 text-base font-semibold"
              >
                Equipamentos Novos
              </TabsTrigger>
              <TabsTrigger
                value="usados"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 ease-in-out text-blue-800 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-3 px-4 text-base font-semibold"
              >
                Equipamentos Usados
              </TabsTrigger>
              <TabsTrigger
                value="tratamento"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 ease-in-out text-blue-800 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-3 px-4 text-base font-semibold"
              >
                Sistemas de Tratamento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="novos">
              <div className="space-y-12">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Equipamentos Novos</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Tecnologia de ponta para máxima performance, eficiência energética e confiabilidade operacional
                  </p>
                </div>

                {/* Compressores de Ar */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Settings className="h-8 w-8 text-blue-800 mr-3" />
                      <h3 className="text-2xl font-bold text-slate-900">Compressores de Ar de Alta Eficiência</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Compressores de última geração com tecnologia avançada para máxima eficiência energética e
                      performance operacional.
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-semibold text-slate-900">Características principais:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Alta eficiência energética</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Baixo nível de ruído</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Controle inteligente</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Manutenção simplificada</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Monitoramento integrado</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Garantia estendida</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Modelos Disponíveis:</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li>• Compressores de parafuso rotativo (5 a 500 HP)</li>
                        <li>• Compressores de pistão (1 a 25 HP)</li>
                        <li>• Compressores centrífugos (100 a 2000 HP)</li>
                        <li>• Compressores isentos de óleo</li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900">
                      <Link href="/contato?service=dimensionamento">
                        <Calculator className="mr-2 h-5 w-5" />
                        Dimensionar Compressor
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Compressor de ar de alta eficiência"
                      width={600}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-6 w-6 text-orange-600" />
                        <div>
                          <div className="font-semibold text-slate-900">Alta Eficiência</div>
                          <div className="text-sm text-slate-600">Até 35% economia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secadores de Ar */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Secadores de ar por refrigeração e adsorção"
                      width={600}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <ThermometerSun className="h-6 w-6 text-blue-800" />
                        <div>
                          <div className="font-semibold text-slate-900">Ponto de Orvalho</div>
                          <div className="text-sm text-slate-600">-40°C a +3°C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <Droplets className="h-8 w-8 text-blue-800 mr-3" />
                      <h3 className="text-2xl font-bold text-slate-900">Secadores de Ar</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Sistemas avançados de secagem por refrigeração e adsorção para garantir a qualidade do ar
                      comprimido em todas as aplicações.
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-semibold text-slate-900">Tipos disponíveis:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Secadores por Refrigeração:</span>
                            <span className="text-slate-600 ml-2">
                              Ponto de orvalho +3°C, ideal para aplicações gerais
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Secadores por Adsorção:</span>
                            <span className="text-slate-600 ml-2">
                              Ponto de orvalho -40°C, para aplicações críticas
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Secadores de Membrana:</span>
                            <span className="text-slate-600 ml-2">Solução compacta para pequenos volumes</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-orange-900 mb-3">Benefícios:</h4>
                      <ul className="space-y-2 text-orange-800">
                        <li>• Proteção contra corrosão e contaminação</li>
                        <li>• Maior vida útil dos equipamentos pneumáticos</li>
                        <li>• Qualidade do produto final garantida</li>
                        <li>• Redução de custos de manutenção</li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                      <Link href="/contato?service=especificacao_secador">
                        <Wind className="mr-2 h-5 w-5" />
                        Especificar Secador
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Sistemas Completos */}
                <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Sistemas Completos de Tratamento de Ar</h3>
                    <p className="text-lg text-slate-600">
                      Soluções integradas que combinam compressão, secagem, filtragem e monitoramento
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center">
                      <CardContent className="p-6">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Settings className="h-8 w-8 text-blue-800" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Projeto Personalizado</h4>
                        <p className="text-slate-600">Dimensionamento específico para suas necessidades operacionais</p>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="p-6">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Qualidade Garantida</h4>
                        <p className="text-slate-600">Ar comprimido dentro das especificações mais rigorosas</p>
                      </CardContent>
                    </Card>

                    <Card className="text-center">
                      <CardContent className="p-6">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Máxima Eficiência</h4>
                        <p className="text-slate-600">Otimização energética e operacional do sistema completo</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usados">
              <div className="space-y-12">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Equipamentos Usados</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Soluções mais econômicas com equipamentos revisados, testados e com garantia de funcionamento
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Award className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-slate-900">Equipamentos Revisados e Testados</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Nossa linha de equipamentos usados passa por rigoroso processo de revisão e teste, oferecendo
                      soluções econômicas sem comprometer a qualidade e confiabilidade.
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-semibold text-slate-900">Processo de qualidade:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            1
                          </div>
                          <div>
                            <span className="font-medium">Inspeção Completa</span>
                            <p className="text-sm text-slate-600">
                              Análise detalhada de todos os componentes e sistemas
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            2
                          </div>
                          <div>
                            <span className="font-medium">Revisão Técnica</span>
                            <p className="text-sm text-slate-600">
                              Substituição de peças desgastadas e componentes críticos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            3
                          </div>
                          <div>
                            <span className="font-medium">Testes de Performance</span>
                            <p className="text-sm text-slate-600">
                              Validação de funcionamento e eficiência operacional
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                            4
                          </div>
                          <div>
                            <span className="font-medium">Certificação de Qualidade</span>
                            <p className="text-sm text-slate-600">Garantia de funcionamento e documentação técnica</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-green-900 mb-3">Vantagens dos Equipamentos Usados:</h4>
                      <ul className="space-y-2 text-green-800">
                        <li>• Economia de até 50% em relação aos equipamentos novos</li>
                        <li>• Garantia de funcionamento</li>
                        <li>• Mesma qualidade de serviço e suporte técnico</li>
                        <li>• Disponibilidade imediata</li>
                        <li>• Possibilidade de upgrade futuro</li>
                      </ul>
                    </div>

                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <Star className="mr-2 h-5 w-5" />
                      Ver Equipamentos Disponíveis
                    </Button>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Equipamentos usados revisados"
                      width={600}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-green-600" />
                        <div>
                          <div className="font-semibold text-slate-900">Garantia</div>
                          <div className="text-sm text-slate-600">12 meses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tipos de Equipamentos Usados */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Settings className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Compressores</h4>
                      <p className="text-sm text-slate-600">Parafuso, pistão e centrífugos revisados</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Droplets className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Secadores</h4>
                      <p className="text-sm text-slate-600">Refrigeração e adsorção testados</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Filter className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Filtros</h4>
                      <p className="text-sm text-slate-600">Sistemas de filtragem completos</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Gauge className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Acessórios</h4>
                      <p className="text-sm text-slate-600">Reservatórios, válvulas e instrumentos</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tratamento">
              <div className="space-y-12">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Sistemas de Tratamento</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Remoção completa de impurezas com qualidade do ar garantida para diferentes aplicações industriais
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Filter className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-2xl font-bold text-slate-900">Remoção Completa de Impurezas</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Sistemas avançados de tratamento que garantem ar comprimido livre de contaminantes, adequado para
                      as mais diversas aplicações industriais.
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-semibold text-slate-900">Tipos de contaminantes removidos:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Partículas sólidas</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Umidade e vapor d'água</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Óleo e vapores oleosos</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Gases e odores</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Microorganismos</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-slate-600">Aerossóis</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-purple-900 mb-3">Classes de Qualidade ISO 8573:</h4>
                      <ul className="space-y-2 text-purple-800">
                        <li>• Classe 1: Aplicações críticas (farmacêutica, alimentícia)</li>
                        <li>• Classe 2: Instrumentação e controle</li>
                        <li>• Classe 3: Aplicações pneumáticas gerais</li>
                        <li>• Classe 4: Aplicações industriais básicas</li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/contato?service=especificacao_tratamento">
                        <Filter className="mr-2 h-5 w-5" />
                        Especificar Sistema de Tratamento
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Sistema completo de tratamento de ar"
                      width={600}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-slate-900">ISO 8573</div>
                          <div className="text-sm text-slate-600">Classe 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aplicações por Setor */}
                <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Adequação para Diferentes Aplicações Industriais
                    </h3>
                    <p className="text-lg text-slate-600">Projetos customizados para cada setor e necessidade</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Settings className="h-6 w-6 text-blue-800" />
                          </div>
                          Indústria Alimentícia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          Ar comprimido livre de contaminantes para contato direto com alimentos
                        </p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Classe 1 ISO 8573</li>
                          <li>• Filtros coalescentes</li>
                          <li>• Filtros de carvão ativado</li>
                          <li>• Certificação HACCP</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-lg mr-3">
                            <Shield className="h-6 w-6 text-green-600" />
                          </div>
                          Indústria Farmacêutica
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">Padrões farmacêuticos com validação completa</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Validação FDA/ANVISA</li>
                          <li>• Filtros esterilizantes</li>
                          <li>• Monitoramento contínuo</li>
                          <li>• Documentação GMP</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-orange-100 p-2 rounded-lg mr-3">
                            <Wrench className="h-6 w-6 text-orange-600" />
                          </div>
                          Indústria Automotiva
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">Qualidade para pintura e instrumentação</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Classe 2 ISO 8573</li>
                          <li>• Secagem por adsorção</li>
                          <li>• Filtros de alta eficiência</li>
                          <li>• Controle de ponto de orvalho</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-purple-100 p-2 rounded-lg mr-3">
                            <Gauge className="h-6 w-6 text-purple-600" />
                          </div>
                          Instrumentação
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">Ar de instrumentos para controle e automação</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Classe 1-2 ISO 8573</li>
                          <li>• Regulagem de pressão</li>
                          <li>• Filtragem submicron</li>
                          <li>• Baixo ponto de orvalho</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-red-100 p-2 rounded-lg mr-3">
                            <Zap className="h-6 w-6 text-red-600" />
                          </div>
                          Indústria Têxtil
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">Ar limpo para tecelagem e acabamento</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Classe 3 ISO 8573</li>
                          <li>• Remoção de umidade</li>
                          <li>• Filtros particulados</li>
                          <li>• Pressão estável</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                            <TrendingUp className="h-6 w-6 text-yellow-600" />
                          </div>
                          Aplicações Gerais
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">Soluções para pneumática industrial</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Classe 3-4 ISO 8573</li>
                          <li>• Filtros coalescentes</li>
                          <li>• Secagem básica</li>
                          <li>• Custo otimizado</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Precisa de Ajuda para Escolher o Equipamento Ideal?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe técnica pode dimensionar a solução perfeita para suas necessidades específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contato?service=auditoria">
                <Calculator className="mr-2 h-5 w-5" />
                Dimensionar Sistema
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
