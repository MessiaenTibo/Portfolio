import { HTMLAttributeAnchorTarget, HtmlHTMLAttributes, ReactElement } from "react";

interface Props {
    title: string;
    paragraph: string;
    // make technologies an array of dictionaries with the key being the title and the value being an array of technologies
    technologies: { title: string, technologies: string[] }[];
    footnote?: string;
    footnoteLink?: ReactElement<HTMLAttributeAnchorTarget>;
    footnoteTwo?: string;
    footnoteLinkTwo?: ReactElement<HTMLAttributeAnchorTarget>;
}


const backgroundColorsForEachTechnologie = [
    {
        tech: 'HTML',
        color: '#e65027'
    },
    {
        tech: 'CSS',
        color: '#0c73b8'
    },
    {
        tech: 'Javascript',
        color: '#e7a328'
    },
    {
        tech: 'Typescript',
        color: '#3179c6'
    },
    {
        tech: 'Tailwindcss',
        color: '#0c73b8'
    },
    {
        tech: 'Vue',
        color: '#00c181'
    },
    {
        tech: 'React',
        color: '#23272f'
    },
    {
        tech: 'ReactNative',
        color: '#23272f'
    },
    {
        tech: 'Expo',
        color: '#000020'
    },
    {
        tech: 'Vite',
        color: '#fec723'
    },
    {
        tech: 'C#',
        color: '#a179dc'
    },
    {
        tech: 'C',
        color: '#659ad2'
    },
    {
        tech: 'Azure',
        color: '#0078d7'
    },
    {
        tech: 'WebApp',
        color: '#0078d7'
    },
    {
        tech: 'KeyVault',
        color: '#0078d7'
    },
    {
        tech: 'BlobStorage',
        color: '#0078d7'
    },
    {
        tech: 'CosmosDB',
        color: '#0078d7'
    },
    {
        tech: 'Python',
        color: '#3670a0'
    },
    {
        tech: 'MySQL',
        color: '#00618b'
    },
    {
        tech: 'Socket IO',
        color: '#0F0F0F'
    },
    {
        tech: 'NodeJS',
        color: '#8ac500'
    },
    {
        tech: 'Docker',
        color: '#2497ed'
    },
    {
        tech: 'Jest',
        color: '#853957'
    },
    {
        tech: 'Mediapipe(Facelandmarker)',
        color: '#0098a6'
    },
    {
        tech: 'Bluetooth',
        color: '#0191e4'
    },
    {
        tech: 'WindowsFormsApp(.NETFramework)',
        color: '#512bd4'
    }
]

export default ({ title, paragraph, technologies, footnote, footnoteLink, footnoteTwo, footnoteLinkTwo }: Props) => {
    const getBackgroundByTech = (tech: string) => {
        const backgroundColor = backgroundColorsForEachTechnologie.find(e => e.tech.toLowerCase().split(' ').join('') === tech.toLocaleLowerCase().split(' ').join(''));
        return backgroundColor ? backgroundColor.color : null; // Return null if no specific color is found
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>{title}</h1>
            <p className='text-xl font-regular pb-2'>{paragraph}</p>
            <div className='mb-6 bg-white dark:bg-dark border-l-6 border-caribbean-current dark:border-caribbean-current-dark max-w-xl'>
                <h1 className="text-lg p-6 pb-0">Technologies</h1>
                <div className="flex flex-wrap pb-6">
                    {technologies.map((technology, index) => {
                        return (
                            <div key={index} className='flex flex-col px-6'>
                                <h3 className='pt-4'>{technology.title}:</h3>
                                <ul className='flex flex-wrap gap-3 cursor-pointer'>
                                    {technology.technologies.map((tech, index) => {
                                        let backgroundColor = getBackgroundByTech(tech); // Get background color by tech
                                        if (technology.title == 'Hardware') backgroundColor = '#0f611a' // Deffault bg for hardware
                                        return (
                                            <li
                                                style={backgroundColor ? { backgroundColor } : {}}
                                                className={`${backgroundColor ? '' : ' bg-caribbean-current dark:bg-caribbean-current-dark'} text-white font-medium py-0.5 px-2`} // Default Background color (if no match)
                                                key={index}
                                            >
                                                {tech}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                </div>
            </div>
            <p className="flex gap-1.5">{footnote}<span className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLink}</span></p>
            <p className="flex gap-1.5">{footnoteTwo}<span className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLinkTwo}</span></p>
        </div >
    );
};