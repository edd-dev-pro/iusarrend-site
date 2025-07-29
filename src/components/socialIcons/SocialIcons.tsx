// src/components/socialIcons/SocialIcons.tsx
import type { FC } from 'react'
import clsx from 'clsx'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import styles from './styles/socialIcons.module.css'

interface SocialIconsProps {
  direction?: 'horizontal' | 'vertical'
}

const SOCIAL_MEDIA = [
  {
    href: 'https://www.facebook.com/iusarrend/',
    Icon: FaFacebookF,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/iusarrend/',
    Icon: FaInstagram,
    label: 'Instagram',
  },
]

const SocialIcons: FC<SocialIconsProps> = ({ direction = 'horizontal' }) => (
  <div
    className={clsx(styles.iconContainer, {
      [styles.vertical]: direction === 'vertical',
    })}
  >
    {SOCIAL_MEDIA.map(({ href, Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={styles.iconLink}
      >
        <Icon />
      </a>
    ))}
  </div>
)

export default SocialIcons
