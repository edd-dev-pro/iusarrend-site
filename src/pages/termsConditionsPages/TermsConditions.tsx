import DefaultLayout from '../../layouts/DefaultLayout'
import { PrivacyNotice, TermsConditionsSection } from '../../sections'

const TermsConditions = () => {
  return (
    <DefaultLayout>
      <TermsConditionsSection />
      <PrivacyNotice />
    </DefaultLayout>
  )
}

export default TermsConditions
