import clsx from 'clsx'
import { SocialIcons } from '../../../../components'
import styles from './styles/banner.module.css'

const Banner = () => {
  return (
    <div
      /* TODO EMC [06/26/2025]: Pending style validation */
      // className="d-flex justify-content-center align-items-center"
      className={clsx(
        'd-flex flex-column justify-content-center align-items-center',
        styles.banner,
      )}
    >
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
        AGENDAR
      </button>
      <SocialIcons />
    </div>
  )
}

export default Banner
