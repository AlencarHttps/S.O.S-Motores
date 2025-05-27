"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaBolt, FaCogs, FaIndustry, FaShieldAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa'
import MotorEletricoSVG from '../components/MotorEletricoSVG'
import { useState, useEffect } from 'react'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export default function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = ['/ia01.png', '/ia02.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((currentIindex) => (currentIindex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      {/* Hero Section with Carousel Background */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {[ '/ia01.png', '/ia02.png'].map((imageSrc, index) => (
            <Image
              key={imageSrc}
              src={imageSrc}
              alt={`Background Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${index === activeImageIndex ? 'opacity-30' : 'opacity-0'}`}
            />
          ))}
        </div>

        {/* Card for Logo */}
        <div className="relative z-10 bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-lg flex flex-col items-center mb-8">
          <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <Image
              src="/logo.png"
              alt="Logo da SOS Motores"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/orcamento" className="btn-primary">
            Faça seu orçamento conosco!
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="inline-block mr-2 text-green-500" />
            Fale no WhatsApp
          </a>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-12 bg-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center card-anim">
            <FaClock className="text-primary text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Atendimento Emergencial</h4>
            <p className="text-gray-600 text-sm">Pronto atendimento para situações críticas e paradas inesperadas.</p>
          </div>
          <div className="flex flex-col items-center card-anim">
            <FaShieldAlt className="text-primary text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Garantia de Serviço</h4>
            <p className="text-gray-600 text-sm">Serviços realizados com garantia e total transparência.</p>
          </div>
          <div className="flex flex-col items-center card-anim">
            <FaMoneyBillWave className="text-primary text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Preço Justo</h4>
            <p className="text-gray-600 text-sm">Orçamento honesto, sem surpresas e com excelente custo-benefício.</p>
          </div>
        </div>
      </section>

      <div className="h-2 w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark my-12 rounded-full opacity-30" />

      {/* Serviços Section */}
      <section className="py-20 bg-gray-50" id="servicos">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-anim">
              <FaBolt className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Motores Monofásicos</h3>
              <p className="text-gray-600">
                Manutenção e reparo de motores monofásicos para uso residencial e comercial.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-anim">
              <FaCogs className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Motores Trifásicos</h3>
              <p className="text-gray-600">
                Serviços especializados em motores trifásicos para indústrias e comércios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-anim">
              <FaIndustry className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Motores Industriais</h3>
              <p className="text-gray-600">
                Manutenção de motores industriais de grande porte com garantia de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2 w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark my-12 rounded-full opacity-30" />

      {/* Quem Somos Section */}
      <section className="pt-16 pb-12 bg-gray-100" id="quem-somos">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-800 mb-6">
                Sobre Nós
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Com anos de experiência no setor, a SOS Motores se destaca pela excelência em manutenção de motores elétricos monofásicos, trifásicos e industriais. Nosso compromisso é oferecer soluções rápidas, seguras e com o melhor custo-benefício para residências, comércios e indústrias.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Atuamos com total integridade, transparência e respeito ao cliente, garantindo qualidade em cada serviço realizado. Prezamos pelo atendimento personalizado, preço justo e resultados que superam expectativas.
              </p>
            </div>
            <div className="relative h-96 sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden">
              {/* Background Carousel in Quem Somos Section */}
              {[ '/ia01.png', '/ia02.png', '/ia03.png'].map((imageSrc, index) => (
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt={`Background Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`absolute inset-0 object-cover transition-opacity duration-1000 ${index === activeImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 