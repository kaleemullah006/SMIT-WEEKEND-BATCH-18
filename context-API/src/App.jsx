// import Header from './components/Header'
import ThemeProvider from './context/UserContext'
import Profile from './components/Profile'

import './App.css'

function App() {
 

  return (
    <>
     <ThemeProvider>
      {/* <Header/> */}
      <Profile/>

     </ThemeProvider>
    </>
  )
}

export default App
