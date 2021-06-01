// elements
import { SVG } from '../elements';

const Hero = ( {
    id,
    content: { 
        title='', 
        description='', 
        image: { path='', alt='' }, 
    },
 } ) => {

     return (
         <section id={id} className='hero-container'>
             <div className='hero-wrapper'>

                 <div className='hero-text-wrapper'>
                     <div className='hero-title-wrapper'>
                         <h1>{title}</h1>
                     </div>
                     
                    <div className='hero-description-wrapper'>
                        <h4 className='weak-heading'>{description}</h4>
                    </div>
                 </div>
                
                <SVG className='hero-visual-wrapper' data={path} alt={alt} />
             </div>
         </section>
     );
 }

 export default Hero;