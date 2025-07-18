import { Address, Reviews } from './components'

const ContactSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <Reviews />
      <Address />
    </section>
  )
}

export default ContactSection
