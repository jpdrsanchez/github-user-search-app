type HomeProps = {
  title: string
}

const Home = ({ title = 'Home' }: HomeProps) => {
  return <div>{title}</div>
}

export default Home
