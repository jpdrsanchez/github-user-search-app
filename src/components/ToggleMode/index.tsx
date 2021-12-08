import Button from 'components/Button'
import { IoMoon, IoSunny } from 'react-icons/io5'

type ToggleModeProps = {
  mode: string
  changeMode(): void
}

const ToggleMode = ({ mode, changeMode }: ToggleModeProps) => {
  return (
    <Button
      spacing={2.5}
      icon={mode === 'light' ? <IoMoon /> : <IoSunny />}
      size="xsmall"
      background="none"
      color="gray"
      weight="bold"
      hover="none"
      colorHover="buttonHover"
      onClick={changeMode}
    >
      {mode === 'light' ? 'DARK' : 'LIGHT'}
    </Button>
  )
}

export default ToggleMode
