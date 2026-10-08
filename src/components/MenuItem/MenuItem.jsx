import './MenuItem.css'
export default function MenuItem({children, onClick, isActive}) {
    


    return (
        <li className={isActive ? 'button active' : 'button'} onClick={onClick} >{children}</li>
    )
}