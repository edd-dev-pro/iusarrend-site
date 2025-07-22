import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { FC } from 'react'
import styles from './styles/imageCarousel.module.css'
import clsx from 'clsx'

interface ImageCarouselProps {
  images: string[] // URLs de las imágenes
  interval?: number // Tiempo entre slides en ms (opcional, default 4000)
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images, interval = 4000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Cambio de slide automático
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, interval)

    return () => clearInterval(autoplay)
  }, [emblaApi, interval])

  // Actualizar paginación
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((src, idx) => (
            <div className={styles.embla__slide} key={idx}>
              <img
                className={styles.embla__img}
                src={src}
                alt={`Slide ${idx}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={clsx(
              styles.dot,
              selectedIndex === idx && styles.dotActive,
            )}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
