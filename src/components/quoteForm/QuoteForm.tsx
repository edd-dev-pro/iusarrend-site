import { type FC, useState } from 'react'
import {
  findPolicies,
  MAX_DIGITS,
  NON_ALLOWED,
  type PolicyBracket,
} from './data'
import styles from './styles/quoteForm.module.css'
import { PlanComparison } from '..'

const mxn = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

const QuoteForm: FC = () => {
  const [input, setInput] = useState('')
  const [quote, setQuote] = useState<PolicyBracket | null>(null)
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = e.target.value.replace(NON_ALLOWED, '')
    const digitsOnly = sanitized.replace(/[^0-9]/g, '')

    if (digitsOnly.length > MAX_DIGITS) return

    setInput(sanitized)
    setError('')
    setQuote(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const cleaned = input.replace(/[^0-9.]/g, '')
    const digitsOnly = cleaned.replace(/\./g, '')

    if (!cleaned || isNaN(parseFloat(cleaned))) {
      setError('Ingresa un monto numérico válido.')
      return
    }

    if (digitsOnly.length > MAX_DIGITS) {
      setError(`El monto no debe exceder ${MAX_DIGITS} dígitos.`)
      return
    }

    const rent = parseFloat(cleaned)
    const result = findPolicies(rent)

    if (result) {
      setQuote(result)
    } else {
      setError('No se encontró un rango que coincida con ese monto.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="rentInput" className="form-label fw-semibold">
          Monto de la renta (MXN)
        </label>
        <input
          type="text"
          inputMode="decimal"
          id="rentInput"
          className="form-control"
          placeholder="Ej. $1,500.00"
          value={input}
          onChange={handleChange}
          autoComplete="off"
        />
        <small className="text-muted">
          Máximo {MAX_DIGITS} dígitos · solo números, ‘$’, ‘,’ o ‘.’.
        </small>
        <small className="text-muted mt-4 d-block">
          COSTO DE PÓLIZA CLÁSICA MAYOR A $50,000 20% DEL VALOR DE LA RENTA MÁS
          IVA.
        </small>
        <small className="text-muted mt-2 d-block">
          COSTO DE PÓLIZA ORO MAYOR A $50,000 27% DEL VALOR DE LA RENTA MÁS IVA.
        </small>
        <small className="text-muted mt-2 d-block">
          COSTO DE PÓLIZA BLACK MAYOR A $50,000 35% DEL VALOR DE LA RENTA MÁS
          IVA.
        </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Cotizar
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {quote && (
        <>
          <div className={`mt-4 p-3 border rounded ${styles.resultBox}`}>
            <h5 className="fw-bold mb-3">
              Rango: {mxn(quote.min)} – {quote.max ? mxn(quote.max) : '∞'}
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

          <div className="mt-5">
            <h4 className="mb-3 text-center">¿Qué incluye cada plan?</h4>
            <PlanComparison />
          </div>
        </>
      )}
    </form>
  )
}

export default QuoteForm
