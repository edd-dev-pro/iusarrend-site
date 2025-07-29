import { type FC } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FEATURES } from './data'
import styles from './styles/planComparison.module.css'
import clsx from 'clsx'

const PlanComparisonTable: FC = () => (
  <div className={clsx('table-responsive', styles.tableContainer)}>
    <table className={clsx('table table-bordered mb-0', styles.table)}>
      <thead>
        <tr className={styles.headRow}>
          <th scope="col">Concepto</th>
          <th scope="col" className="text-center">
            Clásica
          </th>
          <th scope="col" className="text-center">
            Oro
          </th>
          <th scope="col" className="text-center">
            Black
          </th>
        </tr>
      </thead>

      <tbody>
        {FEATURES.map(({ concept, classic, gold, black }) => (
          <tr key={concept}>
            <td>{concept}</td>

            {/* ——— celda Clásica ——— */}
            <td className="text-center">
              {classic && (
                <span className={styles.check}>
                  <FaCheck size={12} /> {/* ← Ícono */}
                </span>
              )}
            </td>

            {/* ——— celda Oro ——— */}
            <td className="text-center">
              {gold && (
                <span className={styles.check}>
                  <FaCheck size={12} />
                </span>
              )}
            </td>

            {/* ——— celda Black ——— */}
            <td className="text-center">
              {black && (
                <span className={styles.check}>
                  <FaCheck size={12} />
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default PlanComparisonTable
