// components / layout
import { Sidebar } from '../../components/layout';
// content
import branding from '../branding';


const AppLayout = ( { 
    children,
    content: {
        sidebarContent,
    },
} ) => {

    return (
        <>
            <Sidebar id='app-sidebar' content={sidebarContent} />
            <main className='site-content'>{children}</main>
        </>
    );
}

export default AppLayout;