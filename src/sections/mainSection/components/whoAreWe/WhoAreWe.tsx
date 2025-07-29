import clsx from 'clsx'
import styles from './styles/whoAreWe.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const WhoAreWe = () => {
  return (
    <div>
      <Container>
        <Row className={clsx('gap-5', styles.spacing)}>
          <Col xs={12} md={6}>
            <div>
              <img
                src="./src/assets/fachada-iusarrend.png"
                alt="fachada-iusarrend"
                className={styles.img}
              />
            </div>
          </Col>
          <Col xs={12} md={5} className="align-content-md-center">
            <div>
              <h2
                className={clsx('ps-3', styles.titleSection, styles.titleLine)}
              >
                ¿Quiénes somos?
              </h2>
              <p className={styles.textSection}>
                En IUSARREND, somos especialistas en derecho inmobiliario y
                arrendamiento. Diseñamos pólizas jurídicas integrales que
                protegen a los arrendadores mediante un esquema completo que
                incluye:
              </p>
              <ul className={styles.textSection}>
                <li>Redacción y formalización de contratos.</li>
                <li>Verificación de perfiles de inquilinos.</li>
                <li>Asesoría legal puntual y pertinente.</li>
                <li>
                  Representación y defensa jurídica ante cualquier
                  incumplimiento.
                </li>
              </ul>
              <p className={styles.textSection}>
                Nuestro compromiso es brindar certeza legal, seguridad y
                respaldo profesional en cada relación arrendaticia, ofreciendo
                soluciones prácticas y humanas para proteger tu patrimonio.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhoAreWe
