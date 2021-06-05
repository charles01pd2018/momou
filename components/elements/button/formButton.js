// dependencies
import classNames from 'classnames';

const FormButton = ( {
    className,
    content: {
        text,
    },
    onClick,
    type='submit',
} ) => {

    /* CLASSNAMES */
    const formButtonClasses = classNames( 'form-button-wrapper', className );

    return (
        <button className={formButtonClasses} onClick={onClick} type={type}>
            {text}
        </button>
    );
}

export default FormButton;