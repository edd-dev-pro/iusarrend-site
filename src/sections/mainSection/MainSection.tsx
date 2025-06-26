import clsx from 'clsx'
import styles from './styles/mainSection.module.css'

const MainSection = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
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
        Agendar
      </button>
    </div>
  )
}

export default MainSection
