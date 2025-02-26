import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Function from './components/Website/FirstNav';
import Second from './components/Website/SubNav';
import CodeBox from './components/Website/Codebox';
import Features from './components/Website/Features';
import UseCases from './components/Website/UseCases';
import Resources from './components/Website/Resources';
import Support from './components/Website/Support';
import Pricing from './components/Website/Pricing';
import SignIn from './components/Website/Sign';
import LearnMore from './components/Website/LearnMore';



let App=()=>{
  return(
    <div className='Nav'>
      <Router>
        <Function/>
        <Second/>

        <Routes>
          <Route path='/' element={<CodeBox/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/useCases' element={<UseCases/>}/>
          <Route path='/Resources' element={<Resources/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/sign' element={<SignIn/>}/>
          <Route path='/' element={<LearnMore/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;