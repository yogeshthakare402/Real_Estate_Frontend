import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './Components/Protected';
import Signin from './Components/EntryExitPages/Signin';
import Signup from './Components/EntryExitPages/Signup';
import PropertyListingPage from './Components/PropertyListingPages/PropertyListingPage';
import Form from './Components/AddNewProperty/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/propertyListingPage' element={
            <Protected>
              <PropertyListingPage />
            </Protected>
          } />
          <Route path="/form" element={
            <Protected>
              <Form />
            </Protected>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
