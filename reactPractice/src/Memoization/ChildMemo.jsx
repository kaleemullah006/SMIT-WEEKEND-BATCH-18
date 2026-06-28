
// import GrandChildMemo from './GrandChildMemo'

// function ChildMemo({name}) {
//      console.log("child rerender hua")
//   return (
//     <>
    

//     <GrandChildMemo name={name}/>
//     </>


//   )
// }

// export default ChildMemo

import GrandChildMemo from "./GrandChildMemo"

function ChildMemo({items}) {
     console.log("Child")
  return (<>
    <div>ChildMemo</div>



  <GrandChildMemo items={items}/>  
  </>
  )
}

export default ChildMemo