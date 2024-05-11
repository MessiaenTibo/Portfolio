import { useEffect, useState } from 'react';

// Videos
import TeamProject1vs1Demo from '../assets/videos/TeamProject1vs1Demo.mp4';
import TeamProjectShuttleRunDemo from '../assets/videos/TeamProjectShuttleRunDemo.mp4';
import ProjectOneDemo from '../assets/videos/ProjectOneDemo.mp4';

// Components
import Title from '../components/Title';
import ProjectInfo from '../components/ProjectInfo';
import CloudinaryImage from '../components/CloudinaryImage';
import ScrollArrow from '../components/ScrollArrow';

function Projects() {
  useEffect(() => {
    document.title = 'Tibo Messiaen | Projects';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuerys, setSearchQuerys] = useState<String[]>([]);

  const [projects, setProjects] = useState([
    {
      visible: true,
      title: 'JobFunders Mobile App',
      paragraph: `I created the frontend of the JobFunders mobile app. JobFunders is a platform that connects job seekers with companies. The app is built with ReactNative and Expo. The backend is built with NodeJs and hosted on Azure. The database is a MySQL database. The app is available in Dutch and English. The app is also integrated with Intercom, Mixpanel and Clarity. I created this app during my internship at JobFunders. (14 weeks)`,
      technologies: [
        {
          title: 'Front-end',
          technologies: ['ReactNative', 'Expo', 'Javascript', 'i18next'],
        },
        {
          title: 'Back-end',
          technologies: ['NodeJs', 'Azure', 'MySQL'],
        },
        {
          title: 'Other',
          technologies: ['Intercom', 'Mixpanel', 'Clarity'],
        },
      ],
      footnote: 'App:',
      footnoteLink: (
        <a href="" target="_blank">
          Comming soon
        </a>
      ),
    },
    {
      visible: true,
      title: 'Industry project',
      paragraph: `Two classmates and I created this website as an Industry project. We got to work with the company Axxes, a IT consultancy. Axxes hosts a yearly conference for their employees, so that they can listen and learn from each other, and they wanted to digitalis this. So it was up to us to create a website, app and backend system, over the corse of 6 weeks.`,
      technologies: [
        {
          title: 'Front-end',
          technologies: ['React', 'HTML', 'Tailwindcss', 'Typescript'],
        },
        {
          title: 'Back-end',
          technologies: ['HTTP', '.NET', 'Firebase auth', 'Bicep'],
        },
        {
          title: 'Azure',
          technologies: ['WebApp', 'KeyVault', 'BlobStorage', 'CosmosDB'],
        },
      ],
      footnote: 'Website:',
      footnoteLink: (
        <a href="https://axxes-conference-tool.netlify.app/" target="_blank">
          Axxes-Conference-Tool
        </a>
      ),
      footnoteTwo: 'App:',
      footnoteLinkTwo: (
        <a
          href="https://expo.dev/@tibomessiaen/Haxx?serviceType=classic&distribution=expo-go"
          target="_blank"
        >
          Expo dev QR-code
        </a>
      ),
    },
    {
      visible: true,
      title: 'Portfolio',
      paragraph: 'I created my own website portfolio',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['React', 'HTML', 'Tailwindcss', 'Typescript'],
        },
        {
          title: 'Other',
          technologies: ['Cloudinary', 'Netlify', 'For'],
        },
      ],
      footnote: 'Website:',
      footnoteLink: (
        <a href="https://tibomessiaen.netlify.app/" target="_blank">
          Portfolio
        </a>
      ),
    },
    {
      visible: true,
      title: 'Team project',
      paragraph:
        'We created this project in team. The assignment was to create an interactive game with poles. The main goal was to make people move. With the focus on children (age 8-18). I designed and created the website, I also handled the communication with the backend.',
      technologies: [
        { title: 'Design', technologies: ['Adobe XD', 'Photoshop'] },
        {
          title: 'Front-end',
          technologies: ['HTML', 'CSS', 'Javascript'],
        },
        {
          title: 'Back-end',
          technologies: ['HTTP', 'MQTT', 'Socket IO'],
        },
      ],
    },
    {
      visible: true,
      title: 'Project One',
      paragraph: 'Dit is project one!',
      technologies: [
        { title: 'Front-end', technologies: ['HTML', 'CSS'] },
        { title: 'Back-end', technologies: ['C#', '.NET'] },
      ],
      footnote: 'Instructables:',
      footnoteLink: (
        <a
          href="https://www.instructables.com/Water-shower-monitor/"
          target="_blank"
        >
          Water Shower Monitor
        </a>
      ),
    },
    {
      visible: true,
      title: 'Sportcomplex',
      paragraph:
        'This website is a project for our school assignment, focusing on managing a facility. I proposed a sports complex theme, inspired by my passion for swimming. The site enables customers to book either swimming pool sessions or sports halls equipped with various amenities. Additionally, employees have access to log in and view bookings, while administrators can add new staff members and equipment to the system.',
      technologies: [
        {
          title: 'Front-end',
          technologies: [
            'Vue',
            'HTML',
            'tailwindcss',
            'Typescript',
            'i18n',
            'Vite',
          ],
        },
        {
          title: 'Back-end',
          technologies: ['Nodejs', 'Jest', 'Firebase auth', 'Docker'],
        },
      ],
      footnote: 'Website:',
      footnoteLink: (
        <a href="https://dynamic-tarsier-0b6360.netlify.app/" target="_blank">
          Sportcomplex
        </a>
      ),
    },
    {
      visible: true,
      title: 'Blackjack',
      paragraph:
        'I recreated the popular card game blackjack. Also know as 21.',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['HTML', 'Tailwindcss', 'Javascript'],
        },
      ],
      footnote: 'Website:',
      footnoteLink: (
        <a
          href="https://messiaentibo.github.io/Interaction-Design-Eindopdracht/"
          target="_blank"
        >
          Blackjack
        </a>
      ),
    },
  ]);

  useEffect(() => {
    // Check if there are no search queries
    if (searchQuerys.length === 0) {
      setProjects(
        projects.map((project) => {
          return { ...project, visible: true };
        })
      );
      return;
    }

    // Check projects if 1 or more of the search queries are in the title, paragraph or technologies
    setProjects(
      projects.map((project) => {
        if (
          searchQuerys.some(
            (query: String) =>
              project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.paragraph.toLowerCase().includes(query.toLowerCase()) ||
              project.technologies.some((tech) =>
                tech.technologies.some((technology) =>
                  technology.toLowerCase().includes(query.toLowerCase())
                )
              )
          )
        ) {
          return { ...project, visible: true };
        } else {
          return { ...project, visible: false };
        }
      })
    );
  }, [searchQuerys]);

  const renderFilters = () => {
    return (
      <div className="flex flex-wrap gap-4">
        {searchQuerys.map((query) => (
          <div
            key={String(query)}
            className="flex items-center px-2 py-1 bg-caribbean-current text-white dark:bg-caribbean-current-dark font-medium rounded-md"
          >
            {query}
            <button
              className="ml-2"
              onClick={() =>
                setSearchQuerys(searchQuerys.filter((item) => item !== query))
              }
            >
              x
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="Projects w-full mx-4 md:mx-8 2xl:max-w-screen-2xl 2xl:m-auto">
      <Title title="Welcome" />

      <div className=" flex justify-center items-center m-auto max-w-md">
        <div className=" flex flex-col  w-full justify-end mb-2">
          <input
            className="bg-anti-flash-white h-10 dark:bg-anti-flash-white-dark border border-caribbean-current dark:border-caribbean-current-dark rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-caribbean-current dark:focus:ring-caribbean-current-dark"
            type="text"
            placeholder="Filter results: React, HTML, ..."
            value={searchQuery}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearchQuerys([...searchQuerys, searchQuery]);
                setSearchQuery('');
              }
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button
              className="flex justify-center items-center w-max ml-2 rounded-md h-10 px-4 font-bold text-caribbean-current dark:text-caribbean-current-dark"
              onClick={() => {
                setSearchQuerys([]);
                setSearchQuery('');
              }}
            >
              Clear
            </button>
            <button
              className="flex justify-center items-center w-max ml-2 rounded-md h-10 px-4 font-bold bg-caribbean-current dark:bg-caribbean-current-dark text-white"
              onClick={() => {
                setSearchQuerys([...searchQuerys, searchQuery]);
                setSearchQuery('');
              }}
            >
              Search
            </button>
          </div>
          {searchQuerys.length > 0 && (
            <>
              <div>
                Results: {projects.filter((project) => project.visible).length}
              </div>
              <div className="flex gap-2">
                Filters:
                {renderFilters()}
              </div>
            </>
          )}
        </div>
      </div>

      <div className=" min-h-screen">
        {projects[0].visible && (
          <div className="flex flex-col md:gap-8 md:flex-row-reverse mt-8">
            <div className="flex items-center w-full pb-4 md:w-1/2 xl:p-12">
              <CloudinaryImage
                link="JobFundersAppMockup_ijtjo3.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[0].title}
                paragraph={projects[0].paragraph}
                technologies={projects[0].technologies}
                footnote={projects[0].footnote}
                footnoteLink={projects[0].footnoteLink}
                footnoteTwo={projects[0].footnoteTwo}
                footnoteLinkTwo={projects[0].footnoteLinkTwo}
              />
            </div>
          </div>
        )}
        {projects[1].visible && (
          <div className="flex flex-col md:gap-8 md:flex-row mt-8">
            <div className="flex items-center w-full pb-4 md:w-1/2 xl:p-12">
              <CloudinaryImage
                link="AxxesConferenceTool_jxi8d4.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[1].title}
                paragraph={projects[1].paragraph}
                technologies={projects[1].technologies}
                footnote={projects[1].footnote}
                footnoteLink={projects[1].footnoteLink}
                footnoteTwo={projects[1].footnoteTwo}
                footnoteLinkTwo={projects[1].footnoteLinkTwo}
              />
            </div>
          </div>
        )}
        {projects[2].visible && (
          <div className="flex flex-col md:flex-row-reverse md:gap-8">
            <div className="flex items-center w-full pb-4 md:w-1/2 xl:p-12">
              <CloudinaryImage
                link="PortfolioMockup_qjs7ns.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[2].title}
                paragraph={projects[2].paragraph}
                technologies={projects[2].technologies}
                footnote={projects[2].footnote}
                footnoteLink={projects[2].footnoteLink}
              />
            </div>
          </div>
        )}
        {projects[3].visible && (
          <div className="flex flex-col md:gap-8 md:flex-row">
            <div className="flex w-full pb-4 md:w-1/2 xl:p-12">
              <video
                title="1VS1"
                className="xl:w-1/2 p-2"
                src={TeamProject1vs1Demo}
                controls
              >
                Your browser does not support the video tag.
              </video>
              <video
                title="1VS1"
                className="hidden xl:flex w-1/2 p-2"
                src={TeamProjectShuttleRunDemo}
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[3].title}
                paragraph={projects[3].paragraph}
                technologies={projects[3].technologies}
              />
            </div>
          </div>
        )}
        {projects[4].visible && (
          <div className="flex flex-col md:flex-row-reverse md:gap-8">
            <div className="w-full pb-4 md:w-1/2 xl:p-12">
              <video title="Shower monitor" src={ProjectOneDemo} controls>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[4].title}
                paragraph={projects[4].paragraph}
                technologies={projects[4].technologies}
                footnote={projects[4].footnote}
                footnoteLink={projects[4].footnoteLink}
              />
            </div>
          </div>
        )}
        {projects[5].visible && (
          <div className="flex flex-col md:gap-8 md:flex-row">
            <div className="flex items-center w-full pb-4 md:w-1/2 xl:p-12">
              <CloudinaryImage
                link="Sportcomplex_jsazvu.png"
                alt="blackjack"
                divClass="w-full"
              />
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[5].title}
                paragraph={projects[5].paragraph}
                technologies={projects[5].technologies}
                footnote={projects[5].footnote}
                footnoteLink={projects[5].footnoteLink}
              />
            </div>
          </div>
        )}
        {projects[6].visible && (
          <div className="flex flex-col md:gap-8 md:flex-row-reverse">
            <div className="flex items-center w-full pb-4 md:w-1/2 xl:p-12">
              <CloudinaryImage
                link="Blackjack_rbtyfa.png"
                alt="blackjack"
                divClass="w-full"
              />
            </div>
            <div className="w-full pb-12 md:w-1/2 place-self-center xl:p-12">
              <ProjectInfo
                title={projects[6].title}
                paragraph={projects[6].paragraph}
                technologies={projects[6].technologies}
                footnote={projects[6].footnote}
                footnoteLink={projects[6].footnoteLink}
              />
            </div>
          </div>
        )}
      </div>
      <ScrollArrow />
    </div>
  );
}

export default Projects;
