import { HTMLAttributeAnchorTarget, HtmlHTMLAttributes, ReactElement } from "react";

interface Props{
    title:string;
    paragraph:string;
    // make technologies an array of dictionaries with the key being the title and the value being an array of technologies
    technologies: {title:string, technologies:string[]}[];
    footnote?:string;
    footnoteLink?:ReactElement<HTMLAttributeAnchorTarget>;
    footnoteTwo?:string;
    footnoteLinkTwo?:ReactElement<HTMLAttributeAnchorTarget>;
}

export default ({title, paragraph, technologies, footnote, footnoteLink, footnoteTwo , footnoteLinkTwo}:Props) => {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>{title}</h1>
            <p className='text-xl font-regular pb-2'>{paragraph}</p>
            <div className='mb-6 bg-white dark:bg-dark border-l-6 border-caribbean-current dark:border-caribbean-current-dark max-w-xl'>
                <h1 className="text-lg p-6">Technologies</h1>
                <div className="flex flex-wrap pb-6">
                    {technologies.map((technology, index) => {
                        return (
                            <div key={index} className='flex flex-col px-6'>
                                <h3 className=''>{technology.title}:</h3>
                                <ul className='list-disc list-inside'>
                                    {technology.technologies.map((tech, index) => {
                                        return (
                                            <li key={index}>{tech}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                                    
                </div>
            </div>
            <p className="flex">{footnote}<p className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLink}</p></p>
            <p className="flex">{footnoteTwo}<p className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLinkTwo}</p></p>
        </div>
    );
  };