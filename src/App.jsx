import{BrowserRouter,Routes,Route}from react-router-dom
import Home from './pages./Home.jsx'
import About from './Page./About.jsx'
import Contact from'./Pages.jsx./Contact.jsx'
import Layout from './Layout.jsx'
function App(){
return(<>
<Layout>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
</Layout>
</>)
}
export default App;
