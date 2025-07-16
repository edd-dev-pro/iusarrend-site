import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'

interface MenuCtxValue {
  open: boolean
  toggle: VoidFunction
  close: VoidFunction
}

const MenuCtx = createContext<MenuCtxValue | null>(null)

const useMenuCtx = (): MenuCtxValue => {
  const ctx = useContext(MenuCtx)
  if (!ctx) throw new Error('useMenuCtx debe usarse dentro de <MenuProvider>')
  return ctx
}

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((o) => !o), [])
  const close = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ open, toggle, close }), [open])

  return <MenuCtx.Provider value={value}>{children}</MenuCtx.Provider>
}

export { useMenuCtx, MenuProvider }
