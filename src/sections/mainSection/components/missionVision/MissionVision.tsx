import { Container } from 'react-bootstrap'
import { FiTarget } from 'react-icons/fi'
import { IoEyeOutline } from 'react-icons/io5'
import styles from './styles/misionVision.module.css'
import clsx from 'clsx'

const MissionVision = () => {
  return (
    <div>
      <Container>
        <div
          className={clsx(
            'row gap-5 gap-md-0 justify-content-center',
            styles.spacing,
          )}
        >
          <div className={clsx('col-12 col-md-5 px-5', styles.cardLeft)}>
            <div className={clsx('text-center')}>
              <h6 className={clsx(styles.titleSection, styles.titleIcon)}>
                <FiTarget className={clsx('pb-2', styles.clrGold)} />
                Misión
              </h6>
              <p className={clsx('mb-0', styles.textSection)}>
                Ser la empresa líder en México en protección Arrendaria,
                garantizando seguridad, confianza y respaldo legal para
                arrendadores, mediante soluciones claras, mediadoras, efectivas
                y humanas.
              </p>
            </div>
          </div>
          <div className={clsx('col-12 col-md-5 px-5', styles.cardRight)}>
            <div className={clsx('text-center')}>
              <h6 className={clsx(styles.titleSection, styles.titleIcon)}>
                <IoEyeOutline className={clsx('pb-2', styles.clrGold)} />
                Visión
              </h6>
              <p className={clsx('mb-0', styles.textSection)}>
                Proteger los intereses legales de nuestros clientes en contratos
                de arrendamiento a través de asesoría especializada, puntual y
                oportuna, mediante redacción de contratos concretos y
                transparentes, realizando procesos de investigación y
                representación legal, brindando certidumbre y tranquilidad
                durante toda la relación arrendaticia.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MissionVision
