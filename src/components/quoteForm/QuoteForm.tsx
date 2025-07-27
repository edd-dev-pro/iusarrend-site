import { type FC, useState } from 'react'
import { findPolicies, type PolicyBracket } from './data'
import styles from './styles/quoteForm.module.css'

/** Formatea números MXN: 1234.5 → $1,234.50 */
const mxn = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

const QuoteForm: FC = () => {
  const [input, setInput] = useState('')
  const [quote, setQuote] = useState<PolicyBracket | null>(null)
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setError('')
    setQuote(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const value = input.replace(/[^0-9.]/g, '')
    const rent = parseFloat(value)

    if (!value || isNaN(rent)) {
      setError('Ingresa un monto numérico válido.')
      return
    }

    const result = findPolicies(rent)

    if (result) {
      setQuote(result)
    } else {
      setError('No se encontró un rango que coincida con ese monto.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="rentInput" className="form-label fw-semibold">
          Monto de la renta (MXN)
        </label>
        <input
          type="text"
          inputMode="decimal"
          id="rentInput"
          className="form-control"
          placeholder="Ej. 15000"
          value={input}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Cotizar
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {quote && (
        <div className={`mt-4 p-3 border rounded ${styles.resultBox}`}>
          <h5 className="fw-bold mb-3">
            Rango: {mxn(quote.min)} –{quote.max ? mxn(quote.max) : '∞'}
          </h5>

          <ul className="list-unstyled mb-0">
            <li>
              <strong>Póliza Clásica:</strong> {mxn(quote.classicPolicy)}
            </li>
            <li>
              <strong>Póliza Oro:</strong> {mxn(quote.goldPolicy)}
            </li>
            <li>
              <strong>Póliza Black:</strong> {mxn(quote.blackPolicy)}
            </li>
          </ul>
        </div>
      )}
    </form>
  )
}

export default QuoteForm
