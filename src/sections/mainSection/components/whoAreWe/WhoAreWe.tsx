import clsx from 'clsx'
import styles from './styles/whoAreWe.module.css'
import { Col, Container, Row } from 'react-bootstrap'
// import video from '../../../../../public/assets/video/video-iusarren.mp4'
import video from '/assets/video/video-iusarren.mp4'

const WhoAreWe = () => {
  return (
    <div>
      <Container>
        <Row className={clsx('gap-5', styles.spacing)}>
          <Col xs={12}>
            <div className={styles.heroVideoWrap}>
              <video
                className={styles.heroVideo}
                src={video}
                // poster={posterImg}
                // Reglas para evitar descarga desde UI:
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                disablePictureInPicture
                // Autoplay silencioso (requerido para que funcione el autoplay en móviles)
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                // Bloquea menú contextual (evita “Guardar video como…” en la UI)
                onContextMenu={(e) => e.preventDefault()}
                aria-label="Video de presentación de IUSARREND"
              />
              {/* (Opcional) Overlay para contraste de textos si luego agregas copy encima */}
              {/* <div className={styles.heroOverlay} /> */}
            </div>
          </Col>
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
