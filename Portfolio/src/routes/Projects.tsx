import { useEffect, useRef, useState } from 'react';

// Videos
import TeamProject1vs1Demo from '../assets/videos/TeamProject1vs1Demo.mp4';
import TeamProjectShuttleRunDemo from '../assets/videos/TeamProjectShuttleRunDemo.mp4';
import ProjectOneDemo from '../assets/videos/ProjectOneDemo.mp4';
import LedMatrixDemo from '../assets/videos/LedMatrixDemo.mp4';
import EyeTrackingDemo from '../assets/videos/Eye-trackingDemo.mp4';

// Components
import Title from '../components/Title';
import ProjectInfo from '../components/ProjectInfo';
import CloudinaryImage from '../components/CloudinaryImage';
import ScrollArrow from '../components/ScrollArrow';

// PDFs
import thesis from '../assets/pdfs/Bachelor_thesis.pdf';


function Projects() {
  useEffect(() => {
    document.title = 'Tibo Messiaen | Projects';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuerys, setSearchQuerys] = useState<String[]>([]);

  const [showControlsVideo1, setShowControlsVideo1] = useState(false);
  const [showControlsVideo2, setShowControlsVideo2] = useState(false);
  const [showControlsVideo3, setShowControlsVideo3] = useState(false);
  const [showControlsVideo4, setShowControlsVideo4] = useState(false);
  const [showControlsVideo5, setShowControlsVideo5] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      appearedOnScreen: false,
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
          technologies: ['Intercom', 'Mixpanel', 'Rollbar', 'Clarity'],
        },
      ],
      footnote: 'Google Play:',
      footnoteLink: (
        <a href="https://play.google.com/store/apps/details?id=com.jobfunders.app&pli=1" target="_blank">
          JobFunders
        </a>
      ),
      footnoteTwo: 'App Store:',
      footnoteLinkTwo: (
        <a href="https://apps.apple.com/us/app/jobfunders/id6475038222" target="_blank">
          JobFunders
        </a>
      ),
    },
    {
      id: 2,
      appearedOnScreen: false,
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
      id: 3,
      appearedOnScreen: false,
      visible: true,
      title: 'Portfolio',
      paragraph: 'I created this portfolio website to showcase my projects and skills. The website is built with React and is hosted on Netlify. I also added a darkmode, animations that are hidden when the user prefers reduced motion and a search function to filter the projects. Also all the images are optimized with Cloudinary to get the best website preformance and a almost perfect lighthouse score.',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['React', 'HTML', 'Tailwindcss', 'Typescript'],
        },
        {
          title: 'Other',
          technologies: ['Cloudinary', 'Netlify', 'Formspree'],
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
      id: 4,
      appearedOnScreen: false,
      visible: true,
      title: 'Team project',
      paragraph:
        'We created this project in team. The assignment was to create an interactive game with poles. The main goal was to make people move. With the focus on children (age 8-18). I designed and created the website, I also handled the communication with the backend.',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['HTML', 'CSS', 'Javascript'],
        },
        {
          title: 'Back-end',
          technologies: ['Python', 'HTTP', 'MQTT', 'Socket IO', 'MySQL'],
        },
        {
          title: 'Design',
          technologies: ['Adobe XD', 'Photoshop', 'FreePik']
        },
      ],
    },
    {
      id: 5,
      appearedOnScreen: false,
      visible: true,
      title: 'Project One',
      paragraph: 'I created a water shower monitor. This monitor shows the the users how much water they use during a shower. The monitor also shows the temperature and humidity of the room. The monitor is connected to the internet and can be viewed on a website. A user can set a goal for the amount of water they want to use during a shower. The Led circle is a visible representation of how much water you have used of the set goal while showering.',
      technologies: [
        { title: 'Front-end', technologies: ['HTML', 'CSS', 'Javascript', 'Chart.js'] },
        { title: 'Back-end', technologies: ['C#', 'MySQL', 'Python', 'Socket IO'] },
        { title: 'Hardware', technologies: ['Raspberry Pi 4', 'Water Flow Sensor', 'Humidity Sensor', 'Temperature sensor', 'Magnetic Contacts', 'LED Screen', 'Neopixel Ledcircle'] },
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
      id: 6,
      appearedOnScreen: false,
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
      id: 7,
      appearedOnScreen: false,
      visible: true,
      title: 'Multifunctional LED Matrix',
      paragraph:
        'Me and a good friend have created a LED Matrix Clock. This was a scool project in high school to demonstrate our knowledge of electronics and programming. We designed custom PCBs, soldered the components and programmed the clock. The display is a 32*64 LED matrix. The display is controlled by a custom PCB that connects with a windows application over bluetooth. This application can set the time, text and color of the display. It is even possible to play the game snake on the display.',
      technologies: [
        {
          title: 'Windows application',
          technologies: ['C#', 'Bluetooth', 'Windows Forms App (.NET Framework)'],
        },
        {
          title: 'Hardware',
          technologies: ['LED Matrix', 'PCB', '5V@10A Powersuply', '3D printed case'],
        },
        {
          title: 'PCB',
          technologies: ['Atmega324p Microcontroller', 'RN42 Bluetooth Module', 'C']
        },
      ],
      footnote: 'Blog:',
      footnoteLink: (
        <a
          href="https://giptibomessiaen.wordpress.com/"
          target="_blank"
        >
          Multifunctional LED Matrix
        </a>
      ),
    },
    {
      id: 8,
      appearedOnScreen: false,
      visible: true,
      title: 'Eye Tracking',
      paragraph:
        'I researched the possibilities of controlling a website with eye tracking. I created a Chrome-extension that uses the webcam to track the users eyes. The extension works with all websites and starts working when opened. The user can click, double click, scroll and navigate back with eye blinking. This was a research project for my bachelor thesis about "Can eye movement and blinking via a Chrome-extension be translated to website interactions?".',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['HTML', 'CSS', 'Javascript', 'Chrome-extension', 'Chrome Storage API'],
        },
        {
          title: 'Back-end',
          technologies: ['GazeCloudAPI', 'MediaPipe (FaceLandMarker)'],
        },
        {
          title: 'Researched and tested (not implemented in final product)',
          technologies: ['WebGazer.js', 'OpenCv (dlib)'],
        },
      ],
      footnote: 'Github:',
      footnoteLink: (
        <a
          href="https://github.com/MessiaenTibo/ResearchProject"
          target="_blank"
        >
          ResearchProject
        </a>
      ),
      footnoteTwo: 'Thesis:',
      footnoteLinkTwo: (
        <a
          href={thesis}
          target="_blank"
        >
          Bachelor thesis (Dutch)
        </a>
      ),
    },
    {
      id: 9,
      appearedOnScreen: false,
      visible: true,
      title: 'Sorting Algorithms',
      paragraph:
        'This website is a visual representation of the most common sorting algorithms. The user can see how the algorithms work and how they compare to each other.',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['HTML', 'Tailwindcss', 'Javascript'],
        },
        {
          title: 'Other',
          technologies: ['Netlify'],
        },
      ],
      footnote: 'Website:',
      footnoteLink: (
        <a
          href="https://sorting-algorithms-visuals.netlify.app/"
          target="_blank"
        >
          Sorting Algorithms
        </a>
      ),
    },
    {
      id: 10,
      appearedOnScreen: false,
      visible: true,
      title: 'Blackjack',
      paragraph:
        'I recreated the popular card game blackjack. Also know as 21.',
      technologies: [
        {
          title: 'Front-end',
          technologies: ['HTML', 'CSS', 'Javascript'],
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

  const project0Ref = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);
  const project4Ref = useRef<HTMLDivElement>(null);
  const project5Ref = useRef<HTMLDivElement>(null);
  const project6Ref = useRef<HTMLDivElement>(null);
  const project7Ref = useRef<HTMLDivElement>(null);
  const project8Ref = useRef<HTMLDivElement>(null);
  const project9Ref = useRef<HTMLDivElement>(null);

  // Observer for projects to show fade in animation on screen appear
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setProjects((prevProjects) =>
            prevProjects.map((project) =>
              project.id === id
                ? { ...project, appearedOnScreen: true }
                : project
            )
          );
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });

    const projectRefs = [
      project0Ref,
      project1Ref,
      project2Ref,
      project3Ref,
      project4Ref,
      project5Ref,
      project6Ref,
      project7Ref,
      project8Ref,
      project9Ref,
    ];

    projectRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-id', (index + 1).toString());
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [projects]);

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

  const handleTechClick = (tech: string) => {
    window.scrollTo({ top: 0 });
    setSearchQuerys([...searchQuerys, tech]);
  };

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
          <div
            ref={project0Ref}
            className="flex flex-col md:gap-8 md:flex-row-reverse mt-8">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[0].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <CloudinaryImage
                link="JobFundersAppMockup_ijtjo3.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[0].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[0].title}
                paragraph={projects[0].paragraph}
                technologies={projects[0].technologies}
                footnote={projects[0].footnote}
                footnoteLink={projects[0].footnoteLink}
                footnoteTwo={projects[0].footnoteTwo}
                footnoteLinkTwo={projects[0].footnoteLinkTwo}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[1].visible && (
          <div
            ref={project1Ref}
            className="flex flex-col md:gap-8 md:flex-row mt-8">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[1].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <CloudinaryImage
                link="AxxesMockup_elfpuu.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[1].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[1].title}
                paragraph={projects[1].paragraph}
                technologies={projects[1].technologies}
                footnote={projects[1].footnote}
                footnoteLink={projects[1].footnoteLink}
                footnoteTwo={projects[1].footnoteTwo}
                footnoteLinkTwo={projects[1].footnoteLinkTwo}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[2].visible && (
          <div
            ref={project2Ref}
            className="flex flex-col md:flex-row-reverse md:gap-8">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[2].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <CloudinaryImage
                link="PortfolioMockup_qjs7ns.png"
                alt="Portfolio Mockup"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[2].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[2].title}
                paragraph={projects[2].paragraph}
                technologies={projects[2].technologies}
                footnote={projects[2].footnote}
                footnoteLink={projects[2].footnoteLink}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[3].visible && (
          <div
            ref={project3Ref}
            className="flex flex-col md:gap-8 md:flex-row">
            <div className={`flex w-full gap-4 pb-4 md:w-1/2 xl:p-12 ${projects[3].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <video
                onMouseEnter={() => setShowControlsVideo1(true)}
                onMouseLeave={() => setShowControlsVideo1(false)}
                title="1VS1"
                className="xl:w-1/2 shadow-md"
                src={TeamProject1vs1Demo}
                controls={showControlsVideo1}
                autoPlay
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
              <video
                title="1VS1"
                className="hidden xl:flex w-1/2  shadow-md"
                onMouseEnter={() => setShowControlsVideo2(true)}
                onMouseLeave={() => setShowControlsVideo2(false)}
                src={TeamProjectShuttleRunDemo}
                controls={showControlsVideo2}
                autoPlay
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[3].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[3].title}
                paragraph={projects[3].paragraph}
                technologies={projects[3].technologies}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[4].visible && (
          <div
            ref={project4Ref}
            className="flex flex-col md:flex-row-reverse md:gap-8">
            <div className={`w-full pb-4 place-self-center md:w-1/2 xl:p-12 ${projects[4].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <video title="Shower monitor"
                className='shadow-md'
                src={ProjectOneDemo}
                onMouseEnter={() => setShowControlsVideo3(true)}
                onMouseLeave={() => setShowControlsVideo3(false)}
                controls={showControlsVideo3}
                autoPlay
                muted
                loop>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[4].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[4].title}
                paragraph={projects[4].paragraph}
                technologies={projects[4].technologies}
                footnote={projects[4].footnote}
                footnoteLink={projects[4].footnoteLink}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[5].visible && (
          <div
            ref={project5Ref}
            className="flex flex-col md:gap-8 md:flex-row">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[5].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <CloudinaryImage
                link="SportComplexMockup_ycwnid.png"
                alt="Sportcomplex Mockup"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[5].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[5].title}
                paragraph={projects[5].paragraph}
                technologies={projects[5].technologies}
                footnote={projects[5].footnote}
                footnoteLink={projects[5].footnoteLink}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[6].visible && (
          <div
            ref={project6Ref}
            className="flex flex-col md:gap-8 md:flex-row-reverse">
            <div className={`flex flex-col gap-8 items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[6].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <video
                title="1VS1"
                className="xl:w-1/2 shadow-md"
                src={LedMatrixDemo}
                onMouseEnter={() => setShowControlsVideo4(true)}
                onMouseLeave={() => setShowControlsVideo4(false)}
                autoPlay
                muted
                loop
                controls={showControlsVideo4}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[6].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[6].title}
                paragraph={projects[6].paragraph}
                technologies={projects[6].technologies}
                footnote={projects[6].footnote}
                footnoteLink={projects[6].footnoteLink}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[7].visible && (
          <div
            ref={project7Ref}
            className="flex flex-col md:gap-8 md:flex-row">
            <div className={`w-full pb-4 place-self-center md:w-1/2 xl:p-12 ${projects[7].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <video
                className='shadow-md'
                onMouseEnter={() => setShowControlsVideo5(true)}
                onMouseLeave={() => setShowControlsVideo5(false)}
                style={{ width: '600px', height: 'auto', overflow: 'hidden' }}
                title="Shower monitor" src={EyeTrackingDemo}
                autoPlay
                muted
                loop
                controls={showControlsVideo5}>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[7].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[7].title}
                paragraph={projects[7].paragraph}
                technologies={projects[7].technologies}
                footnote={projects[7].footnote}
                footnoteLink={projects[7].footnoteLink}
                footnoteTwo={projects[7].footnoteTwo}
                footnoteLinkTwo={projects[7].footnoteLinkTwo}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[8].visible && (
          <div
            ref={project8Ref}
            className="flex flex-col md:gap-8 md:flex-row-reverse">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[8].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <CloudinaryImage
                link="SortingAlgorithms_iyu2mn.png"
                alt="Sorting Algorithms"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[8].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[8].title}
                paragraph={projects[8].paragraph}
                technologies={projects[8].technologies}
                footnote={projects[8].footnote}
                footnoteLink={projects[8].footnoteLink}
                handleTechClick={handleTechClick}
              />
            </div>
          </div>
        )}
        {projects[9].visible && (
          <div
            ref={project8Ref}
            className="flex flex-col md:gap-8 md:flex-row">
            <div className={`flex items-center w-full pb-4 md:w-1/2 xl:p-12 ${projects[8].appearedOnScreen ? 'motion-safe:animate-fade-in-from-left' : 'opacity-0'}`}>
              <CloudinaryImage
                link="BlackJackMockup_m9cuit.png"
                alt="blackjack"
                divClass="w-full"
              />
            </div>
            <div className={`w-full pb-12 md:w-1/2 place-self-center xl:p-12 ${projects[8].appearedOnScreen ? 'motion-safe:animate-fade-in-from-right' : 'opacity-0'}`}>
              <ProjectInfo
                title={projects[9].title}
                paragraph={projects[9].paragraph}
                technologies={projects[9].technologies}
                footnote={projects[9].footnote}
                footnoteLink={projects[9].footnoteLink}
                handleTechClick={handleTechClick}
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
