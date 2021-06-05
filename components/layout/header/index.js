// elements
import { Logo, LinkButton } from '../../elements';

const Header = ( {
    id,
    content: {
        linkButtonsList=[], // { text, link }
    },
    branding,
} ) => {

    return (
        <header id={id} className='header-container'>
            <div className='header-wrapper'>
                
                <Logo className='header-logo-wrapper' 
                    content={{ logo: branding.logo }} 
                    logoClassName='header-logo' />

                <nav className='header-nav-wrapper'>
                    {
                        linkButtonsList.map( ( linkButtonContent ) => {
                            return (
                                <LinkButton className='header-nav-item header-nav-button' content={linkButtonContent} />
                            );
                        } )
                    }
                </nav>

            </div>
        </header>
    );
}

export default Header;