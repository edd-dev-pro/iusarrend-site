import PrivacyNotice from './components/privacyNotice/PrivacyNotice'

const TermsConditionsSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <PrivacyNotice />
    </section>
  )
}

export default TermsConditionsSection
