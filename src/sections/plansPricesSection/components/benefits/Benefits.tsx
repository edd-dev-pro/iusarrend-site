import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/benefits.module.css'
import clsx from 'clsx'

const Benefits = () => {
  return (
    <div className={clsx(styles.spacing, styles.bgImg)}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Beneficios
            </h2>
            <div className={styles.card}>
              <ul className={clsx('mb-0', styles.textSection)}>
                <li className="text-start">
                  El despacho jurídico que nos respalda cuenta con más de 20
                  años de experiencia en procesos de arrendamiento.
                </li>
                <li className="text-start">
                  Somos una póliza accesible dentro del mercado.
                </li>
                <li className="text-start">
                  Atención personalizada los 365 días del año.
                </li>
                <li className="text-start">
                  Asistimos directamente al inmueble o firma en la oficina
                  matriz.
                </li>
                <li className="text-start">
                  Rapidez en el servicio (dos días hábiles a partir de contar
                  con el expediente completo).
                </li>
                <li className="text-start">
                  Todas las pólizas incluyen la Ley Nacional de Extinción de
                  Dominio.
                </li>
                <li className="text-start">
                  No hay cargos extras solo costos totales.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Benefits
