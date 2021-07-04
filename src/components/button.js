
import PropTypes from 'prop-types';
export const Button = (props) => {
    return (
        <div>
            <button className='btn btn-primary my-2'>{props.btntext}</button>
        </div>
    )
}


Button.defaultProps =
{
    btntext: "Hello"
}

Button.protoTypes = {
    btntext: PropTypes.string
}