import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/quote.module.css'
import { QuoteForm } from '../../../../components'
import { clsx } from 'clsx'

const Quote = () => {
  return (
    <div id="quote">
      <Container>
        <Row className={styles.spacing}>
          <Col xs={12}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Cotizador
            </h2>
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
