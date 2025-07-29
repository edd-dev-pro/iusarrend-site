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
                <span
                  className={clsx('p-2 mb-3 rounded-circle', styles.iconCircle)}
                >
                  <FiTarget className={clsx(styles.clrGold)} />
                </span>
                Misión
              </h6>
              <p className={clsx('mb-0', styles.textSection)}>
                Proteger los intereses legales de nuestros clientes en contratos
                de arrendamiento mediante asesoría especializada, oportuna y
                precisa; elaborando contratos claros y transparentes, realizando
                procesos de investigación integral y ofreciendo representación
                legal profesional que genere certidumbre durante toda la
                relación arrendaticia.
              </p>
            </div>
          </div>
          <div className={clsx('col-12 col-md-5 px-5', styles.cardRight)}>
            <div className={clsx('text-center')}>
              <h6 className={clsx(styles.titleSection, styles.titleIcon)}>
                <span
                  className={clsx('p-2 mb-3 rounded-circle', styles.iconCircle)}
                >
                  <IoEyeOutline className={clsx(styles.clrGold)} />
                </span>
                Visión
              </h6>
              <p className={clsx('mb-0', styles.textSection)}>
                Ser la empresa líder en México en protección arrendaria,
                brindando seguridad, confianza y respaldo legal a los
                arrendadores, a través de soluciones jurídicas claras,
                efectivas, humanas y orientadas a la conciliación.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MissionVision
