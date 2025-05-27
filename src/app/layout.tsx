import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'SOS Motores - Manutenção de Motores Elétricos',
  description: 'Especialistas em manutenção de motores elétricos monofásicos, trifásicos e industriais. Serviços de qualidade com preço justo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>SOS Motores - Manutenção de Motores Elétricos em Balneário Camboriú</title>
        <meta name="description" content="Manutenção de motores elétricos monofásicos, trifásicos e industriais em Balneário Camboriú. Atendimento emergencial, garantia e preço justo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SOS Motores - Manutenção de Motores Elétricos" />
        <meta property="og:description" content="Especialistas em manutenção de motores elétricos. Atendimento emergencial, garantia e preço justo." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://sosmotores.com.br" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 