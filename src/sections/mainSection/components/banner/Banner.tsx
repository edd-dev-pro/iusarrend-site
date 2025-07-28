import clsx from 'clsx'
import { ImageCarousel, SocialIcons } from '../../../../components'
import styles from './styles/banner.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IMGS } from '../../../../components/types/values'

const Banner = () => {
  return (
    <div className="position-relative">
      <ImageCarousel images={IMGS} interval={5000} />
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
              Lorem ipsum dolor sit amet
            </p>
            <button
              type="button"
              className={clsx(
                'btn text-light border border-2 rounded-pill mt-4 px-4',
                styles.btnMain,
              )}
            >
              Cotizar ahora
            </button>
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
