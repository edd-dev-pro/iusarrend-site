import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles/termsConditions.module.css'
import clsx from 'clsx'

const TermsConditions = () => {
  return (
    <div>
      <Container>
        <Row className={styles.spacing}>
          <Col xs={12}>
            <h2 className={clsx('ps-3', styles.titleSection, styles.titleLine)}>
              Aviso de Privacidad
            </h2>
          </Col>
          <Col xs={12}>
            <p className={styles.textSection}>
              Mexicana de Servicios para el Arrendamiento, IUSARREND S.C., con
              domicilio en Avenida Homero 229, Piso 5, Oficina 501, Colonia
              Polanco Quinta Sección, Alcaldía Miguel Hidalgo, Ciudad de México,
              C.P. 11560, y portal de internet www.iusarrend.com, así como
              correo de contacto iusarrendclientes@gmail.com, es responsable del
              uso y protección de sus datos personales, y al respecto le informa
              lo siguiente:
            </p>
            <div className="d-flex my-5 flex-wrap flex-md-nowrap">
              <div className={styles.contSubtitle}>
                <p className={styles.subtitleSection}>
                  <span className={styles.clrGold}>1.</span> Finalidad del
                  tratamiento de datos
                </p>
              </div>
              <div className={styles.constText}>
                <p className={styles.textSection}>
                  Los datos personales que recabamos de usted, así como aquellos
                  relacionados con sus bienes, serán utilizados para fines
                  internos necesarios para la correcta prestación de los
                  servicios ofrecidos por IUSARREND. Entre estos propósitos se
                  encuentran:
                </p>
                <ul className={styles.textSection}>
                  <li>
                    Identificación y verificación de la identidad del titular.
                  </li>
                  <li>
                    Evaluación para la contratación de servicios de
                    arrendamiento, análisis de riesgo, y generación de pólizas o
                    contratos.
                  </li>
                  <li>
                    Seguimiento y administración de relaciones jurídicas o
                    comerciales.
                  </li>
                  <li>
                    Contacto, atención al cliente, y cumplimiento de
                    obligaciones legales y contractuales.
                  </li>
                </ul>

                <p className={styles.textSection}>
                  Los datos pueden incluir, entre otros: nombre, estado civil,
                  RFC, lugar y fecha de nacimiento, nacionalidad, domicilio,
                  teléfonos, firma autógrafa, edad, ocupación, domicilio
                  laboral, correos electrónicos, referencias personales y
                  laborales, calidad migratoria, derechos de residencia,
                  información fiscal, historial crediticio, movimientos
                  bancarios, así como cualquier otro dato necesario para la
                  evaluación del servicio solicitado.
                </p>
              </div>
            </div>

            <div className="d-flex mb-5 flex-wrap flex-md-nowrap">
              <div className={styles.contSubtitle}>
                <p className={styles.subtitleSection}>
                  <span className={styles.clrGold}>2.</span> Protección de datos
                </p>
              </div>
              <div className={styles.constText}>
                <p className={styles.textSection}>
                  Los datos personales son resguardados en medios físicos y
                  electrónicos dentro de nuestras instalaciones, conforme a la
                  legislación vigente en los Estados Unidos Mexicanos. IUSARREND
                  S.C. se compromete a no divulgar, compartir ni comercializar
                  sus datos personales sin su consentimiento, salvo en los casos
                  legalmente permitidos o exigidos por autoridad competente.
                </p>
              </div>
            </div>

            <div className="d-flex mb-5 flex-wrap flex-md-nowrap">
              <div className={styles.contSubtitle}>
                <p className={styles.subtitleSection}>
                  <span className={styles.clrGold}>3.</span> Derechos ARCO
                </p>
              </div>
              <div className={styles.constText}>
                <p className={styles.textSection}>
                  Usted tiene derecho a ejercer en todo momento sus derechos
                  ARCO, que consisten en:
                </p>
                <ul className={styles.textSection}>
                  <li>Acceder a sus datos personales.</li>
                  <li>
                    Rectificar los datos que sean inexactos o incompletos.
                  </li>
                  <li>
                    Cancelar sus datos cuando considere que no se requieren para
                    alguna de las finalidades señaladas, o cuando estén siendo
                    utilizados de manera indebida.
                  </li>
                  <li>Oponerse al uso de sus datos para fines específicos.</li>
                </ul>

                <p className={styles.textSection}>
                  Para ejercer cualquiera de estos derechos, deberá enviar una
                  solicitud al correo iusarrendclientes@gmail.com, incluyendo:
                </p>
                <ul className={styles.textSection}>
                  <li>Nombre completo del titular.</li>
                  <li>
                    Documentos que acrediten su identidad o, en su caso, la
                    representación legal.
                  </li>
                  <li>Descripción clara del derecho que desea ejercer.</li>
                  <li>
                    Cualquier otro elemento que facilite la localización de los
                    datos personales.
                  </li>
                </ul>

                <p className={styles.textSection}>
                  Le daremos respuesta en un plazo no mayor a 20 días hábiles,
                  conforme a lo establecido por la ley.
                </p>
              </div>
            </div>

            <div className="d-flex mb-5 flex-wrap flex-md-nowrap">
              <div className={styles.contSubtitle}>
                <p className={styles.subtitleSection}>
                  <span className={styles.clrGold}>4.</span> Modificaciones al
                  aviso
                </p>
              </div>
              <div className={styles.constText}>
                <p className={styles.textSection}>
                  Nos reservamos el derecho de realizar modificaciones o
                  actualizaciones al presente aviso de privacidad en cualquier
                  momento, ya sea para cumplir con reformas legislativas,
                  políticas internas o nuevos requerimientos para la prestación
                  de nuestros servicios. Cualquier cambio será notificado a
                  través de nuestro sitio web oficial.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-md-nowrap">
              <div className={styles.contSubtitle}>
                <p className={styles.subtitleSection}>
                  <span className={styles.clrGold}>5.</span> Aceptación del
                  aviso
                </p>
              </div>
              <div className={styles.constText}>
                <p className={styles.textSection}>
                  El uso de nuestros servicios implica el consentimiento expreso
                  del titular respecto al tratamiento de sus datos personales
                  conforme a los términos del presente Aviso de Privacidad
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TermsConditions
