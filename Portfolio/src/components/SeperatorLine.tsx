export default ({ year }: { year: string }) => {
    return (
        <div data-testid="cypress-seperator-line">
            <hr className='inline-block border border-dashed border-caribbean-current dark:border-caribbean-current-dark my-20 w-full' />
            <div className="absolute font-bold text-white text-xl -mt-28 px-4 py-2 rounded-md bg-caribbean-current dark:bg-caribbean-current-dark xl:text-2xl">{year}</div>
        </div>
    );
};