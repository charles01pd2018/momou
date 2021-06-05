// dependencies
import Head from 'next/head';
// layout
import { PageLayout } from '../layout';
// components
import { Hero, Split, List } from '../components';


const Home = ({
  content: {
    pageTitle,
    layoutContent,
    heroContent,
    splitContent,
    listContent,
  }
}) => {
  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>
      <PageLayout content={layoutContent}>
          <Hero id='home-hero-branding' content={heroContent} />
          <Split id='home-split-features' content={splitContent} />
          <List id='home-list-features' content={listContent} />
      </PageLayout>
    </>
  );
}


const HomeContent = {
  pageTitle: 'Momou: Message Board',
  layoutContent: {
    headerContent: {
      linkButtonsList: [
        {
          text: 'App',
          href: '/app',
        }
      ]
    },
  },
  heroContent: {
    title: 'Momou',
    description: 'Easily create message boards',
    image: {
      path: '/favicon.svg',
      alt: 'site-logo',
    }
  },
  splitContent: {
    splitList: [
      {
        text: 'Increase visibility into community discussion. Share ideas and collaborate all in one location.',
        image: {
          path: 'static/illustrations/message-board.svg',
          alt: 'Message Board Illustration',
        }
      },
    ]

  },
  listContent: {
    mainList: {
      title: 'Main Features',
      listItems: [
        'Create a message board',
        'Share board via email or user account.',
      ]
    },
    subList: {
      title: 'Additional Features',
      listItems: [
        'Toggle between private/public boards.',
      ]
    },
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