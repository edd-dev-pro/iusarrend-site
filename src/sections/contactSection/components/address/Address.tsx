import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/address.module.css'
import clsx from 'clsx'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { SocialIcons } from '../../../../components'

const Address = () => {
  return (
    <div className={clsx(styles.spacing, styles.bgBlue)}>
      <Container>
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Contáctanos
            </h2>
            {/* <div className={clsx('rounded overflow-hidden', styles.map)}>
              <iframe
                title="Ubicación IUSARREND"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.779844217567!2d-99.19219882562833!3d19.425829981854985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20212f859f7f1%3A0x9bfb9bbf3e0db05b!2sAv.%20Homero%20229%2C%20Polanco%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691524820000!5m2!1ses-419!2smx"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </Col>
          <Col xs={12} md={6}>
            <p className={clsx('ms-4', styles.textSection)}>
              Para más información, dudas, aclaraciones o cualquier situación
              legal relacionada con arrendamientos, estamos a tu disposición en
              los siguientes números:
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-start justify-content-md-end"
          >
            <div>
              <h6>
                <FaPhoneAlt className="me-2" />
                Consultor IUSARREND
              </h6>
              <p className={clsx('ms-4', styles.textSection)}>56 3738 4304</p>
              <h6>
                <FaPhoneAlt className="me-2" />
                Oficina Matriz
              </h6>
              <p className={clsx('ms-4', styles.textSection)}>
                55 5254 2235 Ext. 808
              </p>
              <h6>
                <FaPhoneAlt className="me-2" />
                Asesoría Jurídica IUSARREND
              </h6>
              <p className={clsx('ms-4', styles.textSection)}>55 1681 1973</p>
            </div>
          </Col>
          <Col xs={12}>
            <h6>
              <GiPositionMarker className="me-2" />
              Dirección
            </h6>
            <p className={clsx('ms-4', styles.textSection)}>
              Avenida Homero 229, Quinto piso oficina 501, Colonia Polanco V
              Sección, Alcaldía Miguel Hidalgo, C.P. 11560
            </p>
          </Col>
          <Col xs={12}>
            <div className={clsx('rounded overflow-hidden', styles.map)}>
              <iframe
                title="Ubicación IUSARREND"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.779844217567!2d-99.19219882562833!3d19.425829981854985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20212f859f7f1%3A0x9bfb9bbf3e0db05b!2sAv.%20Homero%20229%2C%20Polanco%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1691524820000!5m2!1ses-419!2smx"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row
          className={clsx(
            'gap-5 pt-5 text-center text-md-start',
            styles.lineBorder,
          )}
        >
          <Col xs={12} md={3}>
            <img
              src="./src/assets/logo-iusarrend.png"
              alt=""
              className={clsx('mb-3', styles.logo)}
            />
            <p className={clsx(styles.textSectionSmall)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </Col>
          {/* <Col xs={12} md={3}>
            <h6>
              <FaPhoneAlt className="me-2" />
              Contáctanos
            </h6>
            <p className={clsx('ms-4', styles.textSection)}>
              Para más información, dudas, aclaraciones o cualquier situación
              legal relacionada con arrendamientos, estamos a tu disposición en
              los siguientes números:
            </p>
            <h6 className="ms-4">Consultor IUSARREND</h6>
            <p className={clsx('ms-4', styles.textSection)}>56 3738 4304</p>
            <h6 className="ms-4">Oficina Matriz</h6>
            <p className={clsx('ms-4', styles.textSection)}>
              55 5254 2235 Ext. 808
            </p>
            <h6 className="ms-4">Asesoría Jurídica IUSARREND</h6>
            <p className={clsx('ms-4', styles.textSection)}>55 1681 1973</p>
          </Col>
          <Col xs={12} md={3}>
            <h6>
              <GiPositionMarker className="me-2" />
              Dirección
            </h6>
            <p className={clsx('ms-4', styles.textSection)}>
              Avenida Homero 229, Quinto piso oficina 501, Colonia Polanco V
              Sección, Alcaldía Miguel Hidalgo, C.P. 11560
            </p>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default Address
