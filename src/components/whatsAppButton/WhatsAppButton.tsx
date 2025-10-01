import type { FC } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './styles/whatsappButton.module.css'

interface WhatsAppButtonProps {
  /** Número en formato internacional sin + ni símbolos. Ej: 521234567890 */
  phone: string
  /** Mensaje inicial opcional */
  message?: string
  /** Posición fija flotante (bottom-right por defecto) */
  fixed?: boolean
  /** Etiqueta accesible */
  ariaLabel?: string
}

const buildWaMeUrl = (phone: string, message?: string) => {
  const BASE = `https://wa.me/${phone}`
  if (!message) return BASE
  return `${BASE}?text=${encodeURIComponent(message)}`
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  phone,
  message = 'Hola, me interesa una cotización.',
  fixed = true,
  ariaLabel = 'Chatear por WhatsApp',
}) => {
  const waUrl = buildWaMeUrl(phone, message)

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={fixed ? styles.fab : styles.inline}
      aria-label={ariaLabel}
      title="WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  )
}

export default WhatsAppButton
