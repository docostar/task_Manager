
import PropTypes from 'prop-types';
export const Button = (props) => {



    return (
        <div>
            <button className='btn btn-primary my-2' onClick={props.onclick}>{props.btntext}</button>
        </div>
    )
}


const onclickHeader = (e) => {
    console.log("Button clicked on button.js" + e)
}

Button.defaultProps =
{
    btntext: "Hello",
    onclick: onclickHeader
}

Button.propTypes = {
    btntext: PropTypes.string
}