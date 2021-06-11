// dependencies
import classNames from 'classnames';
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
                        linkButtonsList.map( ( linkButton ) => {
                            /* CONTENT */
                            const { content } = linkButton;
                            /* CLASSNAMES */
                            const linkButtonClasses = classNames( 'header-nav-item header-nav-button', 
                                `header-nav-button--${content.text}`)

                            return (
                                <LinkButton key={content.text} 
                                className={linkButtonClasses} 
                                content={content}
                                href={linkButton.href} />
                            );
                        } )
                    }
                </nav>

            </div>
        </header>
    );
}

export default Header;