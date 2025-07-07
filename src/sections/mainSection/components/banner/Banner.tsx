import clsx from 'clsx'
import { SocialIcons } from '../../../../components'
import styles from './styles/banner.module.css'

const Banner = () => {
  return (
    <div
      /* TODO EMC [06/26/2025]: Pending style validation */
      // className="d-flex justify-content-center align-items-center"
      className={clsx('row', styles.banner)}
    >
      <div className="col-1 col-md-2 pb-4 pb-md-5 align-content-end justify-items-start">
        <SocialIcons />
      </div>
      <div className="col-10 col-md-8 align-content-center">
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
      </div>
      <div className="col-1 col-md-2"></div>
    </div>
  )
}

export default Banner
