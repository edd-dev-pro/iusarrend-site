import { Col, Container, Row } from 'react-bootstrap'
import {
  ImageCarousel,
  SocialIcons,
  WhatsAppButton,
} from '../../../../components'
import { IMGS } from '../../../../components/types/values'
import clsx from 'clsx'
import styles from './styles/banner.module.css'
import { useScrollToSection } from '../../../../hooks'

const Banner = () => {
  const scrollToSection = useScrollToSection(64)

  return (
    <div className="position-relative">
      <ImageCarousel
        images={IMGS}
        // interval={5000}
        videoSrc="/assets/video/video-iusarren-intro.mp4"
        videoDurationMs={8000}
      />
      <Container className="position-relative">
        <Row className={styles.banner}>
          <Col
            xs={1}
            md={2}
            className="pb-md-5 align-content-end justify-items-start"
          >
            <div className="d-none d-md-block">
              <SocialIcons />
            </div>
          </Col>
          <Col xs={10} md={8} className="align-content-center">
            <h1 className={styles.title}>Renta Segura</h1>
            <p className={clsx('text-light', styles.subTitle)}>
              Blindamos tu renta, cuidamos tu futuro
            </p>
            <button
              type="button"
              className={clsx(
                'btn text-light border border-2 rounded-pill mt-4 px-4',
                styles.btnMain,
              )}
              onClick={() => scrollToSection('quote')}
            >
              Cotizar Ahora
            </button>
          </Col>
          <Col xs={1} md={2}>
            <WhatsAppButton phone="525637384304" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
