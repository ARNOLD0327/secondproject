import{Link} from 'react-router-dom'
function Navbar(){
    return(<>
    <div className="nav">
        <h1>Navbar</h1>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/contact">Contact</Link>
        </ul>
    </div>
    </>)
}
export default Navbar