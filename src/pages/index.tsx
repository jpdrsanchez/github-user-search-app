import Button from 'components/Button'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import { IoMoon } from 'react-icons/io5'

const Home = () => {
  return (
    <Layout>
      <Header>
        <Heading color="logo">devfinder</Heading>
        <Button
          spacing={2.5}
          icon={<IoMoon />}
          size="xsmall"
          background="none"
          color="gray"
          weight="bold"
          hover="none"
          colorHover="logo"
        >
          DARK
        </Button>
      </Header>
    </Layout>
  )
}

export default Home
