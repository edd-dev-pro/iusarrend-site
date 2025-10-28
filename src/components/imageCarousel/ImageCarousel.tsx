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
  images: string[]
  interval?: number
  videoSrc?: string
  videoDurationMs?: number
  muted?: boolean
  poster?: string
  videoLoop?: boolean
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  interval = 4000,
  videoSrc,
  videoDurationMs = 5000,
  muted = true,
  poster,
  videoLoop = false,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(!!videoSrc)

  // --- Control de timers/flags para evitar dobles disparos ---
  const autoplayTimerRef = useRef<number | null>(null)
  const fallbackTimeoutRef = useRef<number | null>(null)
  const hasAdvancedFromVideoRef = useRef<boolean>(false)

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

  // Autoplay condicionado: no iniciar mientras el video esté activo (salvo videoLoop)
  useEffect(() => {
    if (!emblaApi) return

    if (autoplayTimerRef.current !== null) {
      window.clearInterval(autoplayTimerRef.current)
      autoplayTimerRef.current = null
    }

    if ((videoLoop || !isVideoPlaying) && interval > 0) {
      autoplayTimerRef.current = window.setInterval(() => {
        emblaApi.scrollNext()
      }, interval) as unknown as number
    }

    return () => {
      if (autoplayTimerRef.current !== null) {
        window.clearInterval(autoplayTimerRef.current)
        autoplayTimerRef.current = null
      }
    }
  }, [emblaApi, interval, isVideoPlaying, videoLoop])

  // Avance único al terminar el video (o por fallback)
  const advanceAfterVideoOnce = useCallback(() => {
    if (videoLoop) return // En loop no bloqueamos ni forzamos avance

    // Si ya avanzamos una vez, no repetir
    if (hasAdvancedFromVideoRef.current) return
    hasAdvancedFromVideoRef.current = true

    // Limpiar fallback si estuviera armado
    if (fallbackTimeoutRef.current !== null) {
      window.clearTimeout(fallbackTimeoutRef.current)
      fallbackTimeoutRef.current = null
    }

    setIsVideoPlaying(false)
    // Pequeño delay para permitir reactivación de autoplay antes del scroll
    window.setTimeout(() => emblaApi?.scrollNext(), 50)
  }, [emblaApi, videoLoop])

  // Handler de 'ended' del video
  const handleVideoEnded = useCallback(() => {
    advanceAfterVideoOnce()
  }, [advanceAfterVideoOnce])

  // Fallback por tiempo si por algún motivo no dispara 'ended'
  useEffect(() => {
    if (!videoSrc || !isVideoPlaying || videoLoop) return

    // Reiniciar flag en cada reproducción inicial
    hasAdvancedFromVideoRef.current = false

    const ms = Math.max(1000, videoDurationMs)
    const id = window.setTimeout(() => {
      advanceAfterVideoOnce()
    }, ms)
    fallbackTimeoutRef.current = id as unknown as number

    return () => {
      if (fallbackTimeoutRef.current !== null) {
        window.clearTimeout(fallbackTimeoutRef.current)
        fallbackTimeoutRef.current = null
      }
    }
  }, [
    videoSrc,
    isVideoPlaying,
    videoDurationMs,
    advanceAfterVideoOnce,
    videoLoop,
  ])

  // Deshabilitar interacción mientras corre el video (si no está en loop)
  const interactionBlocker =
    isVideoPlaying && !videoLoop
      ? { pointerEvents: 'none' as const }
      : undefined

  // Construcción de slides: primero el video (si existe), luego imágenes
  const slides: ReactNode[] = []
  if (videoSrc) {
    slides.push(
      <div className={styles.embla__slide} key="__video">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className={styles.embla__img} // misma clase que las imágenes
          src={videoSrc}
          autoPlay
          playsInline
          muted={muted}
          loop={videoLoop}
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
                if (isVideoPlaying && !videoLoop) return
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
