
// import Card from './Card'


// function App2({}) {
//   return (
//     <>
//     <Card >
// <h1 className='font-bold'>Kaleem ullah</h1>
// <p>Frontend Developer</p>
// <button>View Profile</button>

//     </Card>
//     <Card>
// <h1 className='font-bold'>Ahmad</h1>
// <p>Backend Developer</p>
// <button>Contact</button>

//     </Card>
//     <Card>
// <h1 className='font-bold'>Usman</h1>
// <p>UI Designer</p>
// <button>Portfolio</button>

//     </Card>
    
//     </>
//   )
// }

// export default App2


import Button from './Button'
import Card from './Card'

function App2({color}) {
  return (<>
  
  
  <Card>
    <img src="https://intaglaptops.com/cdn/shop/files/2_3ab51ff3-ddee-454c-9674-559699539b7a_600x.webp?v=1757429581" className='className="w-40 h-40 object-cover"' alt="" />
  <h2>Laptop</h2>
  <p>$1000</p>
  <Button color="red">
    Buy Now
  </Button>
  </Card>
  <Card>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhCGxavKwIULbRxtyJg4GP9nDShgTKrtywQXWCujKSg&s=101" className='w-10 h-10' alt="" />
  <h2>keyboard</h2>
  <p>$50</p>
  <Button>
    Buy Now
  </Button>
  </Card>
  <Card>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WBJ-dO64DRzLV86v8H23pmZj8aBzAc05QiZdDGbd_A&s=10" className='w-10 h-10' alt="" />
  <h2>Mobile</h2>
  <p>$500</p>
  <Button>
    Add Cart
  </Button>
  </Card>
  
  
  
  </>
    
  )
}

export default App2