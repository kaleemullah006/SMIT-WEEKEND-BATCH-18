import {useState} from 'react'
import Child from './child'

function Parent() {
    const [name,setName] = useState("kaleem")
  return (<>
    <div>Parent</div>
<Child name={name}/>
  </>
  )
}

export default Parent