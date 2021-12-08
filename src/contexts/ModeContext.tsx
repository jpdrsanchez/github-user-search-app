import { createContext, ReactNode } from 'react'

type ModeContextProps = {
  mode: 'light' | 'dark'
}

type ModeProviderProps = {
  children: ReactNode
}

export const ModeContext = createContext({} as ModeContextProps)

export const ModeProvider = ({ children }: ModeProviderProps) => {
  return (
    <ModeContext.Provider value={{ mode: 'light' }}>
      {children}
    </ModeContext.Provider>
  )
}
