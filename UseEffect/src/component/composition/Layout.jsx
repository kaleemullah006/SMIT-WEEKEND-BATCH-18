// import React from 'react'

// function Layout({header,sidebar,footer,children}) {
//   return (<>
//   {header}
//   <div className='flex'>
//     <div className='w-1/4 pt-4'>
//       {sidebar}
//     </div>
//     <div className='w-3/4 p-4'>
//       {children}
//     </div>
//   </div>
//   {footer}
  
  
  
  
  
//   </>
    
//   )
// }

// export default Layout

function Layout({ header, sidebar, footer, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}

      <div className="flex flex-1">
        <div className="w-1/4 p-4">
          {sidebar}
        </div>

        <div className="w-3/4 p-4">
          {children}
        </div>
      </div>

      {footer}
    </div>
  );
}

export default Layout;