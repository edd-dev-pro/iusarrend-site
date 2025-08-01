import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/quote.module.css'
import { QuoteForm } from '../../../../components'

const Quote = () => {
  return (
    <div id="quote">
      <Container>
        <Row className={styles.spacing}>
          <Col xs={12}>
            <h1 className={styles.titleSection}>Cotizador</h1>
          </Col>
          <Col xs={12}>
            <QuoteForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Quote
