import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Content from 'components/Content'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Search from 'components/Search'
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
      <Search />
      <Content>
        <Avatar
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="Profile Image of Tom Preston-Werner"
        />
      </Content>
    </Layout>
  )
}

export default Home
