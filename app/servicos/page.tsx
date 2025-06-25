"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Settings,
  Zap,
  Wrench,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Calculator,
  Phone,
  Monitor,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicosPage() {
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
                <Link href="/empresa" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Empresa
                </Link>
                <Link
                  href="/servicos"
                  className="text-blue-800 px-3 py-2 text-sm font-medium border-b-2 border-blue-800"
                >
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
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Empresa
                </Link>
                <Link
                  href="/servicos"
                  className="block px-3 py-2 text-base font-medium text-blue-800 bg-blue-50"
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
          <div className="text-center">
            <Badge className="bg-orange-600 text-white mb-4">Soluções Completas</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Nossos Serviços Especializados</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Quatro modalidades de serviço desenvolvidas para atender todas as necessidades do seu negócio em ar
              comprimido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Calculator className="mr-2 h-5 w-5" />
                Solicite Análise Técnica Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Conheça o Monitoramento 24h
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="terceirizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="terceirizacao" className="text-sm">
                Terceirização
              </TabsTrigger>
              <TabsTrigger value="venda" className="text-sm">
                Venda de Ar
              </TabsTrigger>
              <TabsTrigger value="locacao" className="text-sm">
                Locação
              </TabsTrigger>
              <TabsTrigger value="auditoria" className="text-sm">
                Auditoria
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terceirizacao">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Settings className="h-8 w-8 text-blue-800 mr-3" />
                    <h2 className="text-3xl font-bold text-slate-900">Terceirização Completa</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Assumimos total responsabilidade pelas instalações de ar comprimido, oferecendo uma solução completa
                    que elimina preocupações e otimiza resultados.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-slate-900">O que está incluído:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Equipamentos de alta qualidade</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Instalação completa</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Manutenção preventiva e corretiva</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Monitoramento 24h via internet</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Suporte técnico especializado</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-slate-600">Relatórios de performance</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Principais Benefícios:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Eliminação de investimento inicial em equipamentos</li>
                      <li>• Uso de benefícios fiscais da terceirização</li>
                      <li>• Controle total de custos operacionais</li>
                      <li>• Garantia de disponibilidade 24/7</li>
                      <li>• Monitoramento em tempo real via internet</li>
                    </ul>
                  </div>

                  <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Proposta de Terceirização
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Instalação completa de ar comprimido terceirizada"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-6 w-6 text-blue-800" />
                      <div>
                        <div className="font-semibold text-slate-900">Monitoramento 24h</div>
                        <div className="text-sm text-slate-600">Via Internet</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="venda">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-orange-600 mr-3" />
                    <h2 className="text-3xl font-bold text-slate-900">Venda de Ar Comprimido</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Fornecimento direto de ar comprimido com controle de despesas e prazos mais curtos que vendas
                    tradicionais, oferecendo flexibilidade e eficiência.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-slate-900">Características do serviço:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Prazos Otimizados:</span>
                          <span className="text-slate-600 ml-2">
                            Prazos mais curtos que vendas tradicionais de equipamentos
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Controle de Despesas:</span>
                          <span className="text-slate-600 ml-2">Melhor controle das despesas operacionais</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Flexibilidade:</span>
                          <span className="text-slate-600 ml-2">Adequação às variações de demanda da produção</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Qualidade Garantida:</span>
                          <span className="text-slate-600 ml-2">
                            Ar comprimido tratado conforme especificações técnicas
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-orange-900 mb-3">Vantagens Competitivas:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• Implementação mais rápida que compra de equipamentos</li>
                      <li>• Previsibilidade de custos operacionais</li>
                      <li>• Adaptação automática às variações de demanda</li>
                      <li>• Eliminação de custos de manutenção</li>
                      <li>• Qualidade do ar sempre dentro das especificações</li>
                    </ul>
                  </div>

                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Fornecimento de Ar
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Sistema de fornecimento de ar comprimido"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Economia</div>
                        <div className="text-sm text-slate-600">Até 30% nos custos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="locacao">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Wrench className="h-8 w-8 text-slate-600 mr-3" />
                    <h2 className="text-3xl font-bold text-slate-900">Locação de Equipamentos</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Soluções flexíveis para emergências, paralizações temporárias, manutenção programada e aumento
                    esporádico de produção com fornecimento extremamente confiável.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-slate-900">Aplicações ideais:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Emergências</span>
                          <p className="text-sm text-slate-600">Substituição rápida em caso de falhas</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Paralizações Temporárias</span>
                          <p className="text-sm text-slate-600">Manutenção de equipamentos principais</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Manutenção Programada</span>
                          <p className="text-sm text-slate-600">Continuidade operacional garantida</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <span className="font-medium">Aumento de Produção</span>
                          <p className="text-sm text-slate-600">Demanda esporádica ou sazonal</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Garantias do Serviço:</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Fornecimento extremamente confiável</li>
                      <li>• Equipamentos de alta performance e qualidade</li>
                      <li>• Assistência técnica especializada</li>
                      <li>• Instalação e configuração incluídas</li>
                      <li>• Disponibilidade 24/7 para emergências</li>
                    </ul>
                  </div>

                  <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
                    <Clock className="mr-2 h-5 w-5" />
                    Solicitar Locação Emergencial
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Equipamentos de ar comprimido para locação"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-slate-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Disponível 24h</div>
                        <div className="text-sm text-slate-600">Para emergências</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auditoria">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
                    <h2 className="text-3xl font-bold text-slate-900">Auditoria e Análise Técnica</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Análises completas e especializadas das instalações de ar comprimido existentes, identificando
                    oportunidades de otimização e redução de custos.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-slate-900">Processo de auditoria:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <span className="font-medium">Diagnóstico Completo</span>
                          <p className="text-sm text-slate-600">Análise detalhada de toda a instalação existente</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <span className="font-medium">Identificação de Ineficiências</span>
                          <p className="text-sm text-slate-600">
                            Mapeamento de pontos de desperdício e baixa performance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <span className="font-medium">Recomendações Técnicas</span>
                          <p className="text-sm text-slate-600">Propostas personalizadas de otimização</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div>
                          <span className="font-medium">ROI Quantificado</span>
                          <p className="text-sm text-slate-600">Potencial de redução de custos calculado</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-green-900 mb-3">Resultados da Auditoria:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Relatório técnico detalhado</li>
                      <li>• Plano de otimização personalizado</li>
                      <li>• Projeção de economia de custos</li>
                      <li>• Cronograma de implementação</li>
                      <li>• Análise de retorno do investimento</li>
                    </ul>
                  </div>

                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Solicitar Auditoria Gratuita
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Técnico realizando auditoria de instalação"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Calculator className="h-6 w-6 text-green-600" />
                      <div>
                        <div className="font-semibold text-slate-900">ROI Médio</div>
                        <div className="text-sm text-slate-600">6-12 meses</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparativo de Soluções */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Qual Solução é Ideal para Você?</h2>
            <p className="text-xl text-slate-600">Compare nossas modalidades de serviço e encontre a melhor opção</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Características</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-800">Terceirização</th>
                  <th className="px-6 py-4 text-center font-semibold text-orange-600">Venda de Ar</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-600">Locação</th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">Auditoria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Investimento inicial</td>
                  <td className="px-6 py-4 text-center text-green-600">Nenhum</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Baixo</td>
                  <td className="px-6 py-4 text-center text-green-600">Nenhum</td>
                  <td className="px-6 py-4 text-center text-green-600">Gratuita</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium">Monitoramento 24h</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-slate-400">-</td>
                  <td className="px-6 py-4 text-center text-slate-400">-</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Manutenção incluída</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-slate-400">-</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-slate-400">-</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium">Flexibilidade</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Média</td>
                  <td className="px-6 py-4 text-center text-green-600">Alta</td>
                  <td className="px-6 py-4 text-center text-green-600">Máxima</td>
                  <td className="px-6 py-4 text-center text-slate-400">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Ideal para</td>
                  <td className="px-6 py-4 text-center text-sm">Operação contínua</td>
                  <td className="px-6 py-4 text-center text-sm">Demanda variável</td>
                  <td className="px-6 py-4 text-center text-sm">Emergências</td>
                  <td className="px-6 py-4 text-center text-sm">Otimização</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Não Sabe Qual Solução Escolher?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe técnica pode ajudar você a identificar a melhor solução para suas necessidades específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Calculator className="mr-2 h-5 w-5" />
              Análise Técnica Gratuita
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
