import type { FC } from 'react'
import clsx from 'clsx'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import styles from './styles/socialIcons.module.css'

interface SocialIconsProps {
  direction?: 'horizontal' | 'vertical'
}

const SOCIAL_MEDIA = [
  {
    href: 'https://www.facebook.com/IUSARREND',
    icon: 'facebook',
    label: 'Facebook',
  },
  {
    href: 'https://www.twitter.com/IUSARREND',
    icon: 'twitter-x',
    label: 'Twitter',
  },
]

const SocialIcons: FC<SocialIconsProps> = ({ direction = 'horizontal' }) => {
  return (
    <div
      /* TODO EMC [06/27/2025]: Refactorizar con clsx */
      className={clsx(styles.iconContainer, {
        [styles.vertical]: direction === 'vertical',
      })}
    >
      <FaFacebookF className={styles.iconLink} />
      <FaXTwitter className={styles.iconLink} />
      {SOCIAL_MEDIA.map(({ href, icon, label }) => (
        <a
          key={icon}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.iconLink}`}
          aria-label={label}
          title={label}
        />
      ))}
    </div>
  )
}

export default SocialIcons
