import './Header.css'

const Header = () => {
    return(
        <div className="div-styles">
            <h1 className="welcome">Welcome to the Location App.</h1>
            <h3 className="des">We will take your location, and show you a satelite image of 
                where you are, a good place to eat, and what the weather is. 
            </h3>
        </div>
    )
}

export default Header;