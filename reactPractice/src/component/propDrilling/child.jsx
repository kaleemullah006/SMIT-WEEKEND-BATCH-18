import GrandChild from "./grandChild"

function Child({name}) {
  return (
    <>
    <div>Child</div>
    <GrandChild name={name}/>
    <h1>nameC:{name}</h1>
    </>
  )
}

export default Child