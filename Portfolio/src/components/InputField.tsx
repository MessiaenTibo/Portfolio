

export default ({title, id, type = "text", placeholder, required = false}:{title:string, id:string, type?:string, placeholder?:string, required?:boolean}) => {
  return (
    <div className="flex flex-col w-full text-black dark:text-white">
        <label
            htmlFor={id}
            className="text-sm md:text-base xl:text-lg font-medium w-fit cursor-pointer text-caribbean-current dark:text-caribbean-current-dark"
        >
            {title} {required ? <span className='text-red-500' title="Required">*</span> : null}
        </label>
        {type != "textarea" ? <input
            id={id}
            type={type}
            name={id}
            placeholder={placeholder}
            required={required}
            className="w-full bg-anti-flash-white dark:bg-anti-flash-white-dark border border-caribbean-current dark:border-caribbean-current-dark rounded-md px-4 py-2 mt-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-caribbean-current dark:focus:ring-caribbean-current-dark"
        /> : <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            className="w-full bg-anti-flash-white dark:bg-anti-flash-white-dark border border-caribbean-current dark:border-caribbean-current-dark rounded-md px-4 py-2 mt-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-caribbean-current dark:focus:ring-caribbean-current-dark h-32 resize-none"
        />}
    </div>
  );
};