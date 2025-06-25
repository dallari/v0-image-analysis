"use server"

import { redirect } from "next/navigation"

export interface ContactFormData {
  nome: string
  empresa: string
  email: string
  telefone: string
  tipoServico: string
  mensagem: string
  aceitePrivacidade: boolean
}

export async function submitContactForm(formData: FormData) {
  // Extrair dados do formulário
  const data: ContactFormData = {
    nome: formData.get("nome") as string,
    empresa: formData.get("empresa") as string,
    email: formData.get("email") as string,
    telefone: formData.get("telefone") as string,
    tipoServico: formData.get("tipoServico") as string,
    mensagem: formData.get("mensagem") as string,
    aceitePrivacidade: formData.get("aceitePrivacidade") === "on",
  }

  // Validações básicas
  if (!data.nome || !data.empresa || !data.email || !data.telefone) {
    throw new Error("Campos obrigatórios não preenchidos")
  }

  if (!data.aceitePrivacidade) {
    throw new Error("É necessário aceitar os termos de privacidade")
  }

  // Simular processamento (aqui você integraria com seu sistema de email/CRM)
  console.log("Dados do formulário recebidos:", data)

  // Aqui você pode:
  // 1. Enviar email para a empresa
  // 2. Salvar no banco de dados
  // 3. Integrar com CRM
  // 4. Enviar para webhook

  // Exemplo de integração com email (você precisaria configurar um serviço de email)
  try {
    await sendEmailNotification(data)
    await sendConfirmationEmail(data.email, data.nome)
  } catch (error) {
    console.error("Erro ao enviar emails:", error)
  }

  // Redirecionar para página de sucesso
  redirect("/contato/sucesso")
}

// Função para enviar notificação por email para a empresa
async function sendEmailNotification(data: ContactFormData) {
  // Aqui você integraria com um serviço de email como:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - etc.

  const emailContent = `
    Nova solicitação de análise técnica:
    
    Nome: ${data.nome}
    Empresa: ${data.empresa}
    Email: ${data.email}
    Telefone: ${data.telefone}
    Tipo de Serviço: ${data.tipoServico}
    Mensagem: ${data.mensagem}
  `

  console.log("Email de notificação enviado:", emailContent)
}

// Função para enviar email de confirmação para o cliente
async function sendConfirmationEmail(email: string, nome: string) {
  const confirmationContent = `
    Olá ${nome},
    
    Recebemos sua solicitação de análise técnica e nossa equipe entrará em contato em breve.
    
    Atenciosamente,
    Equipe Flow Energy
  `

  console.log("Email de confirmação enviado para:", email, confirmationContent)
}
