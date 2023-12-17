// import { Outlet } from 'react-router-dom';
// import Header from './Header';

// export default () => {
//     return(
//         <div className=' min-h-screen'>
//             <Header title='Tibo Messiaen' />
//             <div className=' h-full'>
//                 <Outlet/>
//             </div>
//         </div>
//     )
// }

import { Outlet } from 'react-router-dom';
import Header from './Header';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header title="Tibo Messiaen" />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Outlet />
      </div>
    </div>
  );
};
