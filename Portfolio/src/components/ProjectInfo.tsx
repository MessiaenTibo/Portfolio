import { HTMLAttributeAnchorTarget, HtmlHTMLAttributes, ReactElement } from "react";

interface Props {
    title: string;
    paragraph: string;
    technologies: { title: string, technologies: string[] }[];
    footnote?: string;
    footnoteLink?: ReactElement<HTMLAttributeAnchorTarget>;
    footnoteTwo?: string;
    footnoteLinkTwo?: ReactElement<HTMLAttributeAnchorTarget>;
    handleTechClick?: (tech: string) => void;
}

const backgroundColorsForEachTechnologie = [
    { tech: 'HTML', color: '#e65027' },
    { tech: 'CSS', color: '#0c73b8' },
    { tech: 'Javascript', color: '#e7a328' },
    { tech: 'Typescript', color: '#3179c6' },
    { tech: 'Tailwindcss', color: '#0c73b8' },
    { tech: 'Vue', color: '#00c181' },
    { tech: 'React', color: '#23272f' },
    { tech: 'ReactNative', color: '#23272f' },
    { tech: 'Expo', color: '#000020' },
    { tech: 'Vite', color: '#fec723' },
    { tech: 'C#', color: '#a179dc' },
    { tech: 'C', color: '#659ad2' },
    { tech: 'Azure', color: '#0078d7' },
    { tech: 'WebApp', color: '#0078d7' },
    { tech: 'KeyVault', color: '#0078d7' },
    { tech: 'BlobStorage', color: '#0078d7' },
    { tech: 'CosmosDB', color: '#0078d7' },
    { tech: 'Python', color: '#3670a0' },
    { tech: 'MySQL', color: '#00618b' },
    { tech: 'Socket IO', color: '#0F0F0F' },
    { tech: 'NodeJS', color: '#8ac500' },
    { tech: 'Docker', color: '#2497ed' },
    { tech: 'Jest', color: '#853957' },
    { tech: 'Mediapipe(Facelandmarker)', color: '#0098a6' },
    { tech: 'Bluetooth', color: '#0191e4' },
    { tech: 'WindowsFormsApp(.NETFramework)', color: '#512bd4' },
    { tech: 'Clarity', color: '#3b72d9' },
    { tech: 'Intercom', color: '#081c34' },
    { tech: 'Mixpanel', color: '#7856ff' },
    { tech: 'Rollbar', color: '#343f55' },
    { tech: 'Cloudinary', color: '#3447c5' },
    { tech: 'Netlify', color: '#05bdba' },
    { tech: 'Formspree', color: '#cc0e27' },
    { tech: 'Chart.js', color: '#ff6385' }
];

export default ({ title, paragraph, technologies, footnote, footnoteLink, footnoteTwo, footnoteLinkTwo, handleTechClick }: Props) => {
    const getBackgroundByTech = (tech: string) => {
        const backgroundColor = backgroundColorsForEachTechnologie.find(e =>
            e.tech.toLowerCase().split(' ').join('') === tech.toLowerCase().split(' ').join('')
        );
        return backgroundColor?.color ?? null;
    };

    // Handles clicks on any technology item using event delegation.
    // Instead of attaching individual click handlers to each <li>, 
    // this function listens on the parent <ul> and determines which 
    // specific technology item was clicked using `data-tech` attributes.
    // This is called "Delegation" and is used to optimise preformance
    const handleDelegatedClick = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLElement;
        const tech = target.dataset.tech;
        if (tech && handleTechClick) {
            handleTechClick(tech);
        }
    };

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>{title}</h1>
            <p className='text-xl font-regular pb-2'>{paragraph}</p>
            <div className='mb-6 bg-white dark:bg-dark border-l-6 border-caribbean-current dark:border-caribbean-current-dark max-w-xl'>
                <h1 className="text-lg p-6 pb-0">Technologies</h1>
                <div className="flex flex-wrap pb-6">
                    {technologies.map((technology, index) => (
                        <div key={index} className='flex flex-col px-6'>
                            <p className='pt-4'>{technology.title}:</p>
                            <ul
                                className='flex flex-wrap gap-3 cursor-pointer'
                                onClick={handleDelegatedClick}
                            >
                                {technology.technologies.map((tech, index) => {
                                    let backgroundColor = getBackgroundByTech(tech);
                                    if (technology.title === 'Hardware') backgroundColor = '#0f611a';

                                    return (
                                        <li
                                            key={index}
                                            data-tech={tech}
                                            style={backgroundColor ? { backgroundColor } : {}}
                                            className={`${backgroundColor ? '' : ' bg-caribbean-current dark:bg-caribbean-current-dark'} text-white font-medium py-0.5 px-2 rounded-sm hover:scale-105 duration-100`}
                                        >
                                            {tech}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="flex gap-1.5">{footnote}<span className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLink}</span></p>
            <p className="flex gap-1.5">{footnoteTwo}<span className='underline text-caribbean-current dark:text-caribbean-current-dark hover:text-orange-peel dark:hover:text-orange-peel-dark'>{footnoteLinkTwo}</span></p>
        </div>
    );
};
