import {Link, useHistory, useLocation} from 'react-router-dom';

const Navbar = () => {
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        
        history.push('/login');
    }

    let location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="https://download.logo.wine/logo/Microsoft_OneNote/Microsoft_OneNote-Logo.wine.png" style={{height: "30px", width: "50px"}} alt="logo" />
                <Link className="navbar-brand" to="/">inotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                    {!localStorage.getItem('token')?<form  className="d-flex">
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button className="btn btn-primary" onClick={handleLogout} >Logout</button> }
            </nav>
        </div>
    )
}

export default Navbar;