import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import clsx from 'clsx'
import video from '/assets/video/video-iusarren.mp4'
import styles from './styles/whoAreWe.module.css'

const WhoAreWe = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div>
      <Container>
        <Row className={clsx('gap-5', styles.spacing)}>
          <Col xs={12}>
            <div className={styles.heroVideoWrap}>
              <video
                ref={videoRef}
                className={styles.heroVideo}
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onContextMenu={(e) => e.preventDefault()}
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                disablePictureInPicture
                aria-label="Video de presentación de IUSARREND"
              />

              {/* Botón flotante de sonido con react-icons */}
              <button
                type="button"
                className={styles.soundButton}
                onClick={toggleMute}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? (
                  <FaVolumeMute size={20} />
                ) : (
                  <FaVolumeUp size={20} />
                )}
              </button>
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
