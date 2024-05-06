import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Setting from './pages/Setting/Setting';
import Header from './components/Header/Header';
import NotPage from './pages/404/NotPage';
function App() {

  return (
    <div className="App">
      <Header/>                   
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/*' element={<NotPage/>}/>
       </Routes>
    </div>
  );
}

export default App;