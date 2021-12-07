import Button from 'components/Button'
import { IoMoon } from 'react-icons/io5'
type HomeProps = {
  title: string
}

const Home = ({ title = 'The Octocat' }: HomeProps) => {
  return (
    <div>
      <p>{title}</p>
      <Button>Search</Button>
      <Button
        background="none"
        hover="none"
        spacing={2.5}
        color="gray"
        colorHover="grayOpacity"
        weight="bold"
        icon={<IoMoon />}
        size="xsmall"
      >
        DARK
      </Button>
    </div>
  )
}

export default Home
