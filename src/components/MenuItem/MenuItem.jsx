import classes from './MenuItem.module.css'
export default function MenuItem({ children, onClick, isActive }) {



    return (
        <li
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}
            onClick={onClick}
            style={{'marginRight': '20px', 'color': 'rgb(207, 144, 144)'}}
        >{children}
        </li>
    )
}