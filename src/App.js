// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';

// import Dashboard from './Dashboard'; // Import the Dashboard component
// import './App.css';
// import TaskManager from './taskManager';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <div className="sidebar">
//           <h2>To-do</h2>
//           <div className="logo">
//             <img src="path_to_your_logo.png" alt="Logo" /> {/* Update with the path to your logo */}
//           </div>
          
//           <nav>
//             <ul>
//               <li>
//                 <NavLink className='color' to="/dashboard" activeClassName="active" >Dashboard</NavLink>
//               </li>
//               <li>
//                 <NavLink className='color' to="/taskManager" activeClassName="active">Categories</NavLink>
//               </li>
//               {/* <li> */}
//                 {/* <NavLink className='color' to="/sub-categories" activeClassName="active">Sub-categories</NavLink>
//               </li>
//               <li>
//                 <NavLink className='color' to="/products" activeClassName="active">Products</NavLink>
//               </li> */}
//             </ul>
//           </nav>
//         </div>
//         <div className="main-content">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/taskManager" element={<TaskManager />} />
//             {/* <Route path="/sub-categories" element={<SubCategoryManager />} />
//             <Route path="/products" element={<ProductManager />} /> */}
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import TaskManager from './taskManager';
function App(){
  return(
    <>
    <TaskManager/>
    </>
  )
}

export default App;