import Button from 'components/Button'
import Heading from 'components/Heading'
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
        colorHover="logo"
        weight="bold"
        icon={<IoMoon />}
        size="xsmall"
      >
        DARK
      </Button>
      <Heading level={1}>H1 Title</Heading>
      <Heading level={2}>H2 Title</Heading>
      <Heading level={3}>H3 Title</Heading>
      <Heading level={4}>H4 Title</Heading>
    </div>
  )
}

export default Home
