// elements
import { SVG } from '../../elements';

const Sidebar = ( { 
    id,
    content: {
        itemList=[],
    },
} ) => {

    return ( 
        <section id={id} className='sidebar-container'>
            <aside className='sidebar-wrapper'>

                <nav className='sidebar-nav'>
                    {
                        itemList.map( ( item ) => {
                            /* CONTENT */
                            const { text, image }  = item;

                            return ( 
                                <div className='nav-item'>
                                    {text}
                                    <SVG className='nav-item-icon' data={image.path} alt={image.alt} />
                                </div>
                            )
                        } )
                    }
                </nav>
            </aside>
        </section>
    );
}

export default Sidebar;