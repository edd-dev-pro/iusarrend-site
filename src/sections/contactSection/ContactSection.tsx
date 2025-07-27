import { Address } from './components'

const ContactSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <Address />
    </section>
  )
}

export default ContactSection
