import PropTypes from 'prop-types'
import { Button } from './button'

const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker {props.title}</h1>
            <Button btntext="Add Task" />
            <Button btntext="Delete Task" />
            <Button/>
        </header>
    )
}


Header.defaultProps=
{
    title: "Task Title"
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}


export default Header

