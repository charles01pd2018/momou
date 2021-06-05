// components
import { Header } from '../../components/layout';
// content
import branding from '../branding';


const PageLayout = ({
    children,
    content: {
        headerContent
    },
}) => {

    return (
        <>
            <Header id='page-header' content={headerContent} branding={branding} />
            <main className='site-content'>{children}</main>
        </>
    );
}

export default PageLayout;