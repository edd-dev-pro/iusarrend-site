import { useState } from 'react'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'
import { SECTIONS } from '../constants/requirements'
import styles from './styles/collapsible.module.css'
import clsx from 'clsx'

const Collapsible = () => {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const toggle = (key: string) => setOpenKey((k) => (k === key ? null : key))

  return (
    <div className={styles.containerList}>
      {SECTIONS.map(({ key, title, blocks }) => {
        const isOpen = openKey === key
        return (
          <div key={key} className={clsx(styles.item, isOpen && styles.open)}>
            <button
              className={styles.header}
              onClick={() => toggle(key)}
              aria-expanded={isOpen}
            >
              {title}
              {isOpen ? (
                <FiChevronDown className={styles.icon} />
              ) : (
                <FiChevronRight className={styles.icon} />
              )}
            </button>
            {isOpen && (
              <div className={styles.body}>
                {blocks.map((block, i) =>
                  block.type === 'list' ? (
                    <ul key={i} className={styles.list}>
                      {block.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className={styles.note}>
                      {block.text}
                    </p>
                  ),
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Collapsible
