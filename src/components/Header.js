import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker {props.title}</h1>
            <button className='btn btn-primary'>Add Task</button>
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

