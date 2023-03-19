export default ({year}:{year:string}) => {
    return (
        <div>
            <hr className='inline-block border border-dashed border-caribbean-current my-20 w-full'/>
            <div className="absolute font-bold text-white text-xl -mt-28 px-4 py-2 rounded-md bg-caribbean-current xl:text-2xl">{year}</div>
        </div>
    );
  };