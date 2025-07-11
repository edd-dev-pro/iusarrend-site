import clsx from 'clsx'
import styles from './styles/whoAreWe.module.css'
import { Container } from 'react-bootstrap'

const WhoAreWe = () => {
  return (
    <div>
      <Container>
        <div className={clsx('row gap-5', styles.spacing)}>
          <div className="col-12 col-md-6 ">
            <div>
              <img
                src="./src/assets/fachada-iusarrend.png"
                alt="fachada-iusarrend"
                className={styles.img}
              />
            </div>
          </div>
          <div className="col-12 col-md-5 align-content-md-center">
            <div>
              <h2
                className={clsx('ps-3', styles.titleSection, styles.titleLine)}
              >
                ¿Quiénes somos?
              </h2>
              <p className={styles.textSection}>
                En Iusarrend, somos profesionales y especialistas en derecho
                inmobiliario y arrendamiento; Creamos una póliza jurídica que
                protege a arrendadores, mediante un esquema integral Jurídico
                que incluye, elaboración de contratos, verificación de perfiles
                de inquilinos, asesoría legal oportuna y pertinente, defensa en
                caso de incumplimiento.
              </p>
              <p className={styles.textSection}>
                Nuestro compromiso es ofrecer certeza legal, certidumbre y
                respaldo profesional en cada relación contractual.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WhoAreWe
