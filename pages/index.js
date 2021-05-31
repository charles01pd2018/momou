// dependencies
import Head from 'next/head';
// layout
import DefaultLayout from '../layout/defaultLayout';
// components
import { Hero } from '../components';

const Home = ({
}) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Head>
            <title>Momou: Message Board</title>
        </Head>

        <h1>
            Momou
        </h1>
        <p>Easily create message boards</p>

        <img className='logo-placeholder' src="/favicon.svg" alt='site-logo' />
      </div>
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      content: {

      }
    }
  }
}

export default Home;