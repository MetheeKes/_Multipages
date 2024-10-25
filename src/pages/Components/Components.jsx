import Counter from './components/Counter/Counter'
import Timer from './components/Timer/Timer'
import Add from './components/Add/Add'
import Temperatures from './components/Temperatures/Temperatures'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './Components.css'


function Components() {

  return (
    <div className='main-container'>

      <span className='text'>React Components</span>
      <div className='sub-container'>
        <div className='ct-container'>
          <Counter />
          <Timer />
        </div>
        <div className='add-container'><Add aValue={10} bValue={20} /></div>
        <div className='temp-container'><Temperatures /></div>
      </div>
      <span className='text'>นาย เมธี เกษรเพชร 66077789</span>
    </div>
  )
}

export default Components