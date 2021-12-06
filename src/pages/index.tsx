type HomeProps = {
  title: string
}

const Home = ({ title = 'The Octocat' }: HomeProps) => {
  return <div>{title}</div>
}

export default Home
