// dependencies
import Head from 'next/head';
// layout
import { AppLayout } from '../../layout';
// components


const App = ( {
    content: {
        pageTitle,
        layoutContent,
    },
} ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <AppLayout content={layoutContent} >
            
            </AppLayout>
        </>
    );
}

const AppContent = {
    pageTitle: 'Momou: Message Board',
    layoutContent: {
        sidebarContent: {
            itemList: [
                {
                    text: 'redirect',
                    image: {
                        path: '/favicon.svg',
                        alt: 'site-logo',
                    },
                },
                {
                    text: 'redirect',
                    image: {
                        path: '/favicon.svg',
                        alt: 'site-logo',
                    },
                },
            ],
        },
        headerContent: {

        }
    }
};

export function getStaticProps() {
    return {
        props: {
          content: AppContent,
        }
      };
}

export default App;