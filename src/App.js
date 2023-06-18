import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AddTasx from './Components/AddTask';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TasksList from './Components/TasksList';
//..................................................................................................................................................
// 1.
//  install bootstrap and icons 
//  https://react-bootstrap.github.io/getting-started/introduction/
//  https://icons.getbootstrap.com/ 
//   next go to index.js

// function App() {
//   return (
//   <>
//   <Navbar />
//   </>
//   );
// }

// export default App;

//----------------------------------------------------------------------------
// step .4 
// import navbar from here 
// next create AddTask.js from Component folder 
// next go to AddTask.js 

// function App() {
//   return (
//   <>
//   <Navbar />
//   </>
//   );
// }

// export default App;

//-------------------------------------------------------------------
// step 6
// add AddTask and import 
// go to bootstrap grid system and 
// copy the {Row and Col-lg 6 } and import also 
// appo thaan alingment correct ah varum 
// next go to Add Task .JS

// function App() {
//   return (
// <div className='container'>
//      <Navbar />
//      <Row className="justify-content-md-center">
//      <Col lg="6">
//      <AddTask />
//      </Col>
//      </Row>
      
   
// </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------
// 9 
// import and add TaskList .js here 
// next go to TaskList.js


function App() {
  return (
<div className='container'>
     <Navbar />
     <Row className="justify-content-md-center">
     <Col lg="6">
     <AddTasx />
     <TasksList />
     </Col>
     </Row>
    
   
</div>
  );
}

export default App;
