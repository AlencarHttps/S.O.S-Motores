export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="font-bold text-lg">SOS Motores</h3>
          <p className="text-sm">Manutenção de motores elétricos com confiança e agilidade.</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Endereço:</span> <a href="https://www.google.com/maps?q=R.+Dom+Henrique,+520+-+Vila+Real+Balneário+Camboriú+-+SC,+88337-155" target="_blank" rel="noopener" className="underline hover:text-blue-400 transition-colors">R. Dom Henrique, 520 - Vila Real, Balneário Camboriú - SC, 88337-155</a>
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Horário:</span> Seg a Sex, 8h às 18h (atendimento estendido sob consulta)
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener" className="hover:text-green-400 transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
        </div>
        <div className="text-xs text-center md:text-right">&copy; {new Date().getFullYear()} SOS Motores. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
} 