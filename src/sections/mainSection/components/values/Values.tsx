import { Col, Container, Row } from 'react-bootstrap'
import { FaRegGem } from 'react-icons/fa'
import styles from './styles/values.module.css'
import clsx from 'clsx'

const Values = () => {
  return (
    <div className={clsx(styles.spacing, styles.bgImg)}>
      <Container>
        <Row>
          <Col className="col-12 col-md-12 list-none">
            <h2
              className={clsx(
                'text-center p-0 ps-md-3',
                styles.titleSection,
                styles.titleIcon,
              )}
            >
              <span
                className={clsx('p-3 mb-3 rounded-circle', styles.iconCircle)}
              >
                <FaRegGem className={styles.clrGold} />
              </span>
              Nuestros Valores
            </h2>
          </Col>
        </Row>
        <Row className="gy-4 text-center justify-content-center">
          <Col className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>LEGALIDAD</span>
                <br />
                Actuamos con estricto apego al marco jurídico vigente.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>RESPONSABILIDAD</span>
                <br />
                Garantizamos claridad y eficacia en cada manifestación jurídica
                dentro de las relaciones contractuales.
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>ÉTICA</span>
                <br />
                Nos regimos por la transparencia y la veracidad en cada acto
                jurídico, reflejando fielmente la voluntad de nuestros clientes.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>CONFIANZA</span>
                <br />
                Construimos relaciones sólidas mediante procesos claros,
                resultados satisfactorios y compromiso profesional.
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>PREVENCIÓN</span>
                <br />
                Anticipamos riesgos a través de investigaciones rigurosas,
                evitando conflictos en las relaciones contractuales.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>COMPROMISO</span>
                <br />
                Acompañamos a nuestros clientes desde el primer contacto hasta
                la conclusión de la relación contractual, brindando certeza y
                respaldo constante.
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>ACCESIBILIDAD</span>
                <br />
                Facilitamos la comprensión de términos jurídicos mediante
                explicaciones claras y accesibles, haciendo amigable el proceso
                legal.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>EFICIENCIA</span>
                <br />
                Respondemos con prontitud y precisión jurídica durante toda la
                relación de arrendamiento.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Values
