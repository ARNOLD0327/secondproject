import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from'./Pages/Contact.jsx'
import Layout from './Layout.jsx'
function App(){
return(<>

    <BrowserRouter>
      <Layout>
    <Routes>
      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      
    </Routes>
      </Layout>
    </BrowserRouter>

</>)
}
export default App;
