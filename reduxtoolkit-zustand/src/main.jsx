// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // import { Provider } from 'react-redux'
// // import { useWallet } from './zustand/excercise.js'

// // import { useCounter } from './zustand/zustandStore.js'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Provider store={useWallet}> */}

//     <App />
//     {/* </Provider> */}
//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { useCounter } from './zustand/excercise.js'




createRoot(document.getElementById('root')).render(
  <StrictMode>



    <App />
   
  </StrictMode>,
)
