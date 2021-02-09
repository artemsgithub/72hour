import { Link } from 'react-router-dom'
import './Navbar.css'

// Function name matches file name
const Navbar = ({routes}) => {
    // return must have one parent element
    return (
        <nav>
            {routes.map((route)=>{
                return <Link style={{textDecoration: 'none'}} key={route} to={route}> {route}     |    </Link>
            })}
        </nav>
    )
}

// Makes it available for import
export default Navbar;