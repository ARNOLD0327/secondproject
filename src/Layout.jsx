import Navbar from "./Companents.jsx/Navbar"
import Sidebar from "./Companents.jsx/Sidebar"
import Footer from "./Companents.jsx/Footer"
const Layout=({children})=>{
   return(<>
     <div>
      <div className="navbar">{Navbar}</div>
      <div>
         {/* skjhdsdfjfkjjks */}
         <div>{Sidebar}</div>
         <div>{children}</div>
      </div>
      <div>{Footer}</div>
     </div>
   </>)
}