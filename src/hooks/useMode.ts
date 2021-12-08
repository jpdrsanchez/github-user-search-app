import { ModeContext } from 'contexts/ModeContext'
import { useContext } from 'react'

const useMode = () => {
  const { mode } = useContext(ModeContext)
  return mode
}

export default useMode
