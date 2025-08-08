import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/policy.module.css'
import clsx from 'clsx'

const Policy = () => {
  return (
    <div className={styles.bgImg}>
      <Container>
        <Row className={clsx('row justify-content-md-center', styles.spacing)}>
          <Col xs={12} className="d-none d-md-blok"></Col>
          <Col xs={12} md={10}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Póliza de Arrendamiento
            </h2>
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                Es un mecanismo de protección que valida la capacidad legal y
                económica del arrendatario, establece obligaciones contractuales
                claras y ofrece asistencia legal en caso de incumplimiento,
                reduciendo riesgos para el propietario.
              </p>
            </div>
          </Col>
          <Col xs={12} className="d-none d-md-blok"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Policy
