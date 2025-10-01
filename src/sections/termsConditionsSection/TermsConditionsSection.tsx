import PrivacyNotice from './components/privacyNotice/PrivacyNotice'
import TermsConditions from './components/termsConditions/TermsConditions'

const TermsConditionsSection = ({ idValue }: { idValue: string }) => {
  return (
    <section id={idValue}>
      <PrivacyNotice />
      <TermsConditions />
    </section>
  )
}

export default TermsConditionsSection
