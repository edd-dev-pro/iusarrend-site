import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/privacyNotice.module.css'
import clsx from 'clsx'

const PrivacyNotice = () => {
  return (
    <div className={styles.bgImg}>
      <Container>
        <Row className={styles.spacing}>
          <Col xs={12}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Terminos y Condiciones
            </h2>
          </Col>
          <Col xs={12}>
            <div className={styles.card}>
              <ul className={clsx('mb-0', styles.textSection)}>
                <li className="text-start">
                  No se podrá continuar con el proceso de póliza de
                  arrendamiento si el prospecto (arrendatario) se encuentra en
                  situación de adeudo hipotecario, automotriz, dentro de un
                  procedimiento familiar, civil o penal.
                </li>
                <li className="text-start">IVA incluido</li>
                <li className="text-start">
                  Los costos se encuentran sujetos a cambios sin previo aviso.
                </li>
                <li className="text-start">
                  La investigación de registro público de la propiedad o su
                  similar se realizara en la Ciudad de México o Área
                  Metropolitana, si se encuentra fuera de dichos lugares,
                  consultar costo con su ejecutivo de venta.
                </li>
                <li className="text-start">
                  Para dar inicio con el trámite de contratación se requiere el
                  anticipo de $1,000.00 (un mil pesos 00/100 M.N) mismos que
                  serán tomados a cuenta para el pago total de la póliza, en
                  caso de no concretar la operación, por gastos operativos, NO
                  habrá devolución.
                </li>
                <li className="text-start">
                  Toda la documentación deberá ser enviada al correo:
                  iusarrendclientes@gmail.com
                </li>
                <li className="text-start">
                  Todos los documentos solicitados deben ser con fecha de
                  expedición no mayor a 3 meses
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PrivacyNotice
