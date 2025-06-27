import clsx from 'clsx'
import styles from './styles/mainSection.module.css'

const Banner = () => {
  return (
    <div
      /* TODO EMC [06/26/2025]: Pending style validation */
      // className="d-flex justify-content-center align-items-center"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: 'calc(100vh - 104px)' }}
    >
      <h1 className={styles.title}>Renta Segura</h1>
      <p className={clsx('text-light', styles.subTitle)}>
        Lorem ipsum dolor sit amet
      </p>
      <button
        className={clsx(
          'btn text-light border border-2 rounded-pill mt-4 px-4',
          styles.btnMain,
        )}
        type="submit"
      >
        AGENDAR
      </button>
    </div>
  )
}

export default Banner
