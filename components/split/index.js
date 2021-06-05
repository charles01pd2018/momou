// elements
import { SVG } from '../elements';

const Split = ( {
    id,
    content: {
        splitList,
    },
} ) => {

    return (
        <section id={id} className='split-container'>
            <div className='container'>
                {
                    splitList.map( ( { text, image } ) => {
                        /* CONTENT */
                        const { path, alt } = image;
                        
                        return (
                            <div key={path} className='split-wrapper'>
                                <div className='split-text-wrapper'>
                                    {text}
                                </div>
                
                                <SVG className='split-visual-wrapper' data={path} alt={alt} />
                            </div>
                        );
                    } )
                }
            </div>
        </section>
    );
}

export default Split;