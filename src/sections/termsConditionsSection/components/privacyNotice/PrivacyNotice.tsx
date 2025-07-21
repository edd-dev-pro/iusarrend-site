import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/privacyNotice.module.css'
import clsx from 'clsx'

const PrivacyNotice = () => {
  return (
    <div className={clsx(styles.spacing, styles.bgBlue)}>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className={clsx('text-center', styles.titleSection)}>
              Terminos y Condiciones
            </h2>
          </Col>
          <Col xs={12}>
            <p className={styles.textSection}>
              No se podrá continuar con el proceso de póliza de arrendamiento si
              el prospecto (arrendatario) se encuentra en situación de adeudo
              hipotecario, automotriz, dentro de un procedimiento familiar,
              civil o penal.
              <br />
              IVA incluido
              <br />
              Los costos se encuentran sujetos a cambios sin previo aviso.
              <br />
              La investigación de registro público de la propiedad o su similar
              se realizara en la Ciudad de México o Área Metropolitana, si se
              encuentra fuera de dichos lugares, consultar costo con su
              ejecutivo de venta.
              <br />
              Para dar inicio con el trámite de contratación se requiere el
              anticipo de $1,000.00 (un mil pesos 00/100 M.N) mismos que serán
              tomados a cuenta para el pago total de la póliza, en caso de no
              concretar la operación, por gastos operativos, NO habrá
              devolución.
              <br />
              Toda la documentación deberá ser enviada al correo:
              iusarrendclientes@gmail.com
              <br />
              Todos los documentos solicitados deben ser con fecha de expedición
              no mayor a 3 meses
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PrivacyNotice
