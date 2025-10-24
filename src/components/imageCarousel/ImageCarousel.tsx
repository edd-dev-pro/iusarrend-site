// src/components/ImageCarousel.tsx
import {
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import styles from './styles/imageCarousel.module.css'

interface ImageCarouselProps {
  /** Imágenes del carrusel (después del video) */
  images: string[]
  /** Intervalo entre slides (ms). Default: 4000 */
  interval?: number
  /** (Opcional) Video inicial como primer slide */
  videoSrc?: string
  /** (Opcional) Duración del video en ms para fallback. Default: 5000 */
  videoDurationMs?: number
  /** (Opcional) Silenciar video (recomendado para autoplay móvil). Default: true */
  muted?: boolean
  /** (Opcional) Imagen poster para evitar “pantalla negra” en el primer frame */
  poster?: string
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  interval = 4000,
  videoSrc,
  videoDurationMs = 5000,
  muted = true,
  poster,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Bloqueo temporal mientras corre el video inicial
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(!!videoSrc)

  // Timer para autoplay
  const autoplayTimerRef = useRef<number | null>(null)

  // Mantener índice seleccionado para los dots
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Autoplay condicionado: no iniciar mientras el video esté activo
  useEffect(() => {
    if (!emblaApi) return

    if (autoplayTimerRef.current) {
      window.clearInterval(autoplayTimerRef.current)
      autoplayTimerRef.current = null
    }

    if (!isVideoPlaying && interval > 0) {
      autoplayTimerRef.current = window.setInterval(() => {
        emblaApi.scrollNext()
      }, interval) as unknown as number
    }

    return () => {
      if (autoplayTimerRef.current) {
        window.clearInterval(autoplayTimerRef.current)
        autoplayTimerRef.current = null
      }
    }
  }, [emblaApi, interval, isVideoPlaying])

  // Al terminar el video: desbloquear y avanzar
  const handleVideoEnded = useCallback(() => {
    setIsVideoPlaying(false)
    // pequeño delay para asegurar re-render
    window.setTimeout(() => emblaApi?.scrollNext(), 50)
  }, [emblaApi])

  // Fallback por tiempo si por algún motivo no dispara 'ended'
  useEffect(() => {
    if (!videoSrc || !isVideoPlaying) return
    const id = window.setTimeout(
      () => {
        handleVideoEnded()
      },
      Math.max(1000, videoDurationMs),
    )
    return () => window.clearTimeout(id)
  }, [videoSrc, isVideoPlaying, videoDurationMs, handleVideoEnded])

  // Deshabilitar interacción mientras corre el video
  const interactionBlocker = isVideoPlaying
    ? { pointerEvents: 'none' as const }
    : undefined

  // Construcción de slides: primero el video (si existe), luego imágenes
  const slides: ReactNode[] = []
  if (videoSrc) {
    slides.push(
      <div className={styles.embla__slide} key="__video">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className={styles.embla__img} // usa la misma clase que las imágenes
          src={videoSrc}
          autoPlay
          playsInline
          muted={muted}
          preload="metadata"
          onEnded={handleVideoEnded}
          aria-hidden="true"
          tabIndex={-1}
          {...(poster ? { poster } : {})}
        />
      </div>,
    )
  }
  images.forEach((src, idx) => {
    slides.push(
      <div className={styles.embla__slide} key={`img-${idx}`}>
        <img className={styles.embla__img} src={src} alt="" />
      </div>,
    )
  })

  const totalDots = slides.length

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.embla}>
        <div
          className={styles.embla__viewport}
          ref={emblaRef}
          style={interactionBlocker}
        >
          <div className={styles.embla__container}>{slides}</div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              className={clsx(
                styles.dot,
                selectedIndex === idx && styles.dotActive,
              )}
              onClick={() => {
                if (isVideoPlaying) return
                emblaApi?.scrollTo(idx)
              }}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
