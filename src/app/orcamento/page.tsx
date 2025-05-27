'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export default function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    descricao: '',
    foto: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aqui você pode implementar a lógica para enviar o formulário
    // Por exemplo, enviar para WhatsApp ou email
    const message = `\n*Novo Pedido de Orçamento*\nNome: ${formData.nome}\nTelefone: ${formData.telefone}\nDescrição: ${formData.descricao}`.trim()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, foto: e.target.files![0] }))
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-heading font-bold text-center mb-8">
            Solicite um Orçamento
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição do Problema
              </label>
              <textarea
                id="descricao"
                name="descricao"
                required
                rows={4}
                value={formData.descricao}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="foto" className="block text-sm font-medium text-gray-700 mb-1">
                Foto do Motor (opcional)
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </main>
  )
} 