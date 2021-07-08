import PropTypes from 'prop-types'
import { Button } from './button'


const Header = (props) => {


    return (
        <header>
            <h1>Task Tracker {props.title}</h1>
            <Button btntext={props.showAdd ? "Close" : "Add Task"}
                onclick={props.onAdd}
                color={props.showAdd ? "btn-danger" : "btn-primary"}
            />
            {/* <Button btntext="Delete Task" />
            <Button /> */}

        </header>
    )
}


Header.defaultProps =
{
    title: "Task Title",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}


export default Header

