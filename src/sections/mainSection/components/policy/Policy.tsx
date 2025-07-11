import { Container } from 'react-bootstrap'
import styles from './styles/policy.module.css'
import clsx from 'clsx'

const Policy = () => {
  return (
    <div className={clsx(styles.bg)}>
      <Container>
        <div className={clsx('row justify-content-md-center', styles.spacing)}>
          <div className="col-2 d-none d-md-blok"></div>
          <div className="col-12 col-md-10 text-center policy">
            <h2 className={clsx(styles.titleSection)}>
              Póliza de Arrendamiento
            </h2>
            <p className={clsx('mb-0', styles.textSection)}>
              Ser la póliza jurídica líder en México en materia de
              arrendamiento, garantizando seguridad, confianza y respaldo legal
              tanto para arrendadores como para arrendatarios, mediante
              soluciones claras, efectivas y humanas.
            </p>
          </div>
          <div className="col-2 d-none d-md-blok"></div>
        </div>
      </Container>
    </div>
  )
}

export default Policy
