import{Link}from 'react-router-dom'
function Sidebar(){
    return(<>
    <div className="sidebar">
       <h1>sidebar</h1>
       <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
       </ul>
      
       </div>
    </>)
}
export default Sidebar