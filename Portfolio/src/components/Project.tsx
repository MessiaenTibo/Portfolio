import React from 'react';

interface Technology {
    title: string;
    technologies: string[];
}

interface ProjectProps {
    project: {
        visible: boolean;
        title: string;
        paragraph: string;
        technologies: Technology[];
        footnote?: string;
        footnoteLink?: JSX.Element;
        footnoteTwo?: string;
        footnoteLinkTwo?: JSX.Element;
    };
    reverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({ project, reverse }) => {
    return (
        <div className={`project ${reverse ? 'reverse' : ''}`}>
            <h2>{project.title}</h2>
            <p>{project.paragraph}</p>
            {/* Render technologies and footnotes here */}
        </div>
    );
};

export default Project;
