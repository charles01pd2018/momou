// dependencies
import Link from 'next/link';
// elements
import SVG from '../svg';

const Logo = ({
    className,
    content: {
        siteName='',
        logo: { path='', alt='' },
    },
    logoClassName='',
    titleClassName='',
    href='/',
}) => {

    /* CONTENT */
    const logoTitle = ( siteName != null && siteName != '' ) && ( <h1 className={titleClassName}>{siteName}</h1> );

    return (
        <>
            <Link href={href}>
                <a>
                    <div className={className}>
                        <SVG className={logoClassName} data={path} alt={alt} />
                    </div>
                </a>
            </Link>
            {logoTitle}
        </>
    );
}

export default Logo;