import Head from 'next/head'
import { useAmp } from 'next/amp'
import 'isomorphic-unfetch'
import Byline from '../components/Byline'
import Layout from '../components/Layout'

const Index = ({ stars }) => {
  const isAmp = useAmp()
  const title = `Next.js has ${stars} ⭐️`
  const version = `${isAmp ? 'AMP' : 'Non-AMP'} Version`
  const author = 'Dan Zajdband'
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <h2>{version}</h2>
      <Byline author={author} />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  // eslint-disable-next-line no-undef
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Index
