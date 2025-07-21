import { Container, Row, Col } from 'react-bootstrap'
import styles from './styles/requirements.module.css'
import clsx from 'clsx'
import { Collapsible } from '../../../../components'

const Requirements = () => {
  return (
    <div className={styles.spacing}>
      <Container>
        <Row>
          <Col xs={12}>
            <h6 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Requisitos
            </h6>
            <Collapsible />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Requirements
