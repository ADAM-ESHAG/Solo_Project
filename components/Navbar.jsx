import Earth from "../public/images/earth.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={Earth} alt="earth-icon" className="nav--img"/>
            <h3>My travel journal</h3>
        </nav>
    )
}