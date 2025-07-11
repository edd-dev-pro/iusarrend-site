import { Container } from 'react-bootstrap'
import { FaRegGem } from 'react-icons/fa'
import styles from './styles/values.module.css'
import clsx from 'clsx'

const Values = () => {
  return (
    <div className={styles.spacing}>
      <Container>
        <div className="row">
          <div className="col-12 col-md-12 list-none">
            <h6
              className={clsx(
                'text-center p-0 ps-md-3',
                styles.titleSection,
                styles.titleIcon,
              )}
            >
              <FaRegGem className={styles.clrGold} />
              Nuestros Valores
            </h6>
          </div>
        </div>
        <div className="row gy-4 text-center justify-content-center">
          <div className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>LEGALIDAD</span>
                <br />
                Actuamos dentro del Marco Jurídico vigente.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>RESPONSABILIDAD</span>
                <br />
                Claridad y efectividad en cada una de las manifestaciones, de
                las relaciones contractuales.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>ÉTICA</span>
                <br /> Transparencia y veracidad en el actuar en cada
                manifestación de la voluntad de nuestros clientes.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>CONFIANZA</span>
                <br /> Generamos relaciones sólidas con nuestros clientes
                mediante limpidez y conclusiones satisfactorias de los acuerdos
                de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>PREVENCIÓN</span>
                <br /> Mediante las investigaciones, anticipamos riesgos dentro
                de las relaciones contractuales, evitando conflictos.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>COMPROMISO</span>
                <br /> Conformamos un equipo capaz de llevar a cabo desde el
                primer contacto con nuestros clientes, hasta la terminación de
                la relación contractual, logrando certeza y certidumbre para
                nuestros contratantes.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex">
            <div className={styles.card}>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>ACCESIBILIDAD</span>
                <br /> A petición del cliente se realiza una explicación clara y
                concisa sobre la complejidad de la interpretación jurídica,
                haciendo digerible y amable la formulación contractual.
              </p>
              <p className={clsx('mb-0', styles.textSection)}>
                <span className={styles.highlighted}>EFICIENCIA</span>
                <br /> Respondemos de forma oportuna y precisión jurídica
                durante la relación contractual de arrendamiento.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Values
