
import PropTypes from 'prop-types';
export const Button = (props) => {



    return (
        <div>
            <button className={'btn ' + props.color + ' my-2'} onClick={props.onclick}>{props.btntext}</button>
        </div >
    )
}


const onclickHeader = (e) => {
    console.log("Button clicked on button.js" + e)
}

Button.defaultProps =
{
    btntext: "Hello",
    onclick: onclickHeader,
    color: 'btn-primary',
}
Button.propTypes = {
    btntext: PropTypes.string
}