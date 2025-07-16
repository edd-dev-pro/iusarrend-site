import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/address.module.css'
import clsx from 'clsx'
import { SocialIcons } from '../../../../components'

const Address = () => {
  return (
    <div className={clsx(styles.spacing, styles.bgBlue)}>
      <Container>
        <Row className="mb-5 gap-5 text-center text-md-start">
          <Col xs={12} md={3}>
            <img
              src="./src/assets/logo-iusarrend.png"
              alt=""
              className={clsx('mb-3', styles.logo)}
            />
            <p className={clsx(styles.textSectionSmall)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>Dirección</h6>
            <p className={styles.textSection}>
              Avenida Homero 229, Quinto piso oficina 501, Colonia Polanco V
              Sección, Alcaldía Miguel Hidalgo, C.P. 11560
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h6>Telefono</h6>
            <p className={styles.textSection}>56 3738 4304</p>
          </Col>
        </Row>
        <Row className={clsx('pt-0 pt-md-5', styles.lineBorder)}>
          <Col xs={12}>
            <SocialIcons />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Address
