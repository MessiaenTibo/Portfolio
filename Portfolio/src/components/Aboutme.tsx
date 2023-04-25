import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'

// import dartIcon from '../assets/svgs/dartIcon.svg'
// import { ReactComponent as DartIcon } from '../assets/svgs/dartIcon.svg'
import programmingIcon from '../assets/svgs/programmingIcon.svg'
import swimmingIcon from '../assets/svgs/swimmingIcon.svg'

export default () => {

  return (
    <div className='my-4 p-10 bg-white'>
        <h1 className='text-3xl font-bold mb-6'>About me</h1>
        <h2 className='text-xl font-bold mb-4'>Hello, I'm Tibo</h2>
        <p className='mb-6'>Line 1</p>
        <p className='mb-6'>Line 2</p>
        <p className='mb-6'>Line 3</p>
        <h2 className='text-xl font-bold mb-4'>My hobbies</h2>
        {/* <img className='h-12 w-12 fill-orange-peel' src={dartIcon} alt="Dart arrow icon" /> */}
        {/* <DartIcon/> */}
        <img src={programmingIcon} alt="Programming icon" />
        <img src={swimmingIcon} alt="Swimmer icon" />
        <img src={placeholder} alt="Image" className=''/>
    </div>
  );
};