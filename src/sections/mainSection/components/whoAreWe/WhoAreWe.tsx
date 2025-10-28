import { useEffect, useRef, useState, type FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaVolumeMute, FaVolumeUp, FaExpand, FaCompress } from 'react-icons/fa'
import clsx from 'clsx'
import video from '/assets/video/video-iusarren.mp4'
import styles from './styles/whoAreWe.module.css'

type IOSPresentationMode = 'fullscreen' | 'picture-in-picture' | 'inline'

interface WebKitHTMLVideoElement extends HTMLVideoElement {
  webkitEnterFullscreen?: () => void
  webkitSetPresentationMode?: (mode: IOSPresentationMode) => void
  webkitPresentationMode?: IOSPresentationMode
}

const isWebKitVideo = (el: HTMLVideoElement): el is WebKitHTMLVideoElement =>
  'webkitEnterFullscreen' in el || 'webkitSetPresentationMode' in el

const WhoAreWe: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const enterFullscreen = () => {
    const v = videoRef.current
    if (!v) return

    // iOS 16+: presentation mode
    if (isWebKitVideo(v) && typeof v.webkitSetPresentationMode === 'function') {
      v.webkitSetPresentationMode('fullscreen')
      setIsFullscreen(true)
      return
    }
    // iOS clásico
    if (isWebKitVideo(v) && typeof v.webkitEnterFullscreen === 'function') {
      v.webkitEnterFullscreen()
      setIsFullscreen(true)
      return
    }
    // Estándar (Android/desktop)
    if (document.fullscreenEnabled && v.requestFullscreen) {
      v.requestFullscreen()
      setIsFullscreen(true)
    }
  }

  const exitFullscreen = () => {
    const v = videoRef.current
    if (!v) return

    // iOS 16+: volver a inline
    if (isWebKitVideo(v) && typeof v.webkitSetPresentationMode === 'function') {
      v.webkitSetPresentationMode('inline')
      setIsFullscreen(false)
      return
    }
    // Estándar
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    setIsFullscreen(false)
  }

  const toggleFullscreen = () => {
    const v = videoRef.current
    if (!v) return

    // iOS: si existe presentationMode, úsalo para decidir
    if (isWebKitVideo(v) && typeof v.webkitPresentationMode === 'string') {
      if (v.webkitPresentationMode === 'fullscreen') {
        exitFullscreen()
      } else {
        enterFullscreen()
      }
      return
    }

    // Estándar
    if (!document.fullscreenElement) enterFullscreen()
    else exitFullscreen()
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const syncState = () => {
      const iosFs =
        isWebKitVideo(v) && v.webkitPresentationMode === 'fullscreen'
      const stdFs = !!document.fullscreenElement
      setIsFullscreen(iosFs || stdFs)
    }

    document.addEventListener('fullscreenchange', syncState)
    if (isWebKitVideo(v)) {
      v.addEventListener(
        'webkitpresentationmodechanged',
        syncState as EventListener,
      )
    }

    return () => {
      document.removeEventListener('fullscreenchange', syncState)
      if (isWebKitVideo(v)) {
        v.removeEventListener(
          'webkitpresentationmodechanged',
          syncState as EventListener,
        )
      }
    }
  }, [])

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
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onContextMenu={(e) => e.preventDefault()}
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                disablePictureInPicture
                aria-hidden="true"
                tabIndex={-1}
              >
                <track
                  kind="captions"
                  src="data:text/vtt,WEBVTT%0A"
                  srcLang="es"
                  label="Oculto"
                />
              </video>

              {/* Botón de sonido */}
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

              {/* Botón de pantalla completa */}
              <button
                type="button"
                className={clsx(styles.soundButton, styles.fullscreenButton)}
                onClick={toggleFullscreen}
                aria-label={
                  isFullscreen
                    ? 'Salir de pantalla completa'
                    : 'Pantalla completa'
                }
              >
                {isFullscreen ? (
                  <FaCompress size={18} />
                ) : (
                  <FaExpand size={18} />
                )}
              </button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src="/assets/fachada-iusarrend.png"
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
