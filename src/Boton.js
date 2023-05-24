import PropTypes from 'prop-types';
export function Button({ text, name }){
    console.log(text)
    if(!text){
        console.error('el texto es requerido')
    }
    return <button>
        
        {text}-{name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string
}

Button.defaultProps = {
    name: 'Some User'
}