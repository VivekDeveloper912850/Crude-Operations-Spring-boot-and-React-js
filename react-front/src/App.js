import ListEmployee from './Component/ListEmployee';
import './App.css';
import {BrowserRouter as  Router, Routes,Route} from 'react-router-dom'
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import CreateEmployee from './Component/CreateEmployee';
import UpdateEmployee from './Component/UpdateEmployee';

function App() {
  return (
    <div>
    
    
      
      <HeaderComponent/>
    
      <Router>
      <div className='container'>
        <Routes>
        
          <Route exact path='/' element = {<ListEmployee/>}></Route>
          <Route exact path='/employees' element = {<ListEmployee/>}></Route>
        
          <Route  exact path='/add-employee' element={<CreateEmployee/>}></Route>
          <Route  exact path='/update-employee/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
        </div>
      </Router>
  

    <FooterComponent/>

    
      
   
    </div>
    
    
   
  );

  

 
}

export default App;
