import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {

    let location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </nav>
        </div>
    )
}

export default Navbar;