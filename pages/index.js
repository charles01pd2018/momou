// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../layout';
// components
import { Hero } from '../components';


const Home = ({
  content: {
    pageTitle,
    HeroContent,
  }
}) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Head>
            <title>{pageTitle}</title>
        </Head>

        <Hero id='site-hero' content={HeroContent} />

      </div>
    </DefaultLayout>
  );
}


const HomeContent = {
  pageTitle: 'Momou: Message Board',
  HeroContent: {
    title: 'Momou',
    description: 'Easily create message boards',
    image: {
      path: '/favicon.svg',
      alt: 'site-logo',
    }
  }
}

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  }
}

export default Home;