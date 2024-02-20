/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiJavascript,
  SiBootstrap,
  SiDjango,
  SiFastapi,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";
import {DiNodejs, DiNpm, DiSass} from "react-icons/di";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jonathan Gordon",
  title: "Hi all, I'm Jonathan",
  subTitle: emoji(
    "I'm a full stack software developer driven by a passion for problem solving and innovation. My professional journey began in the tech industry as a Cloud Technology Consultant at Oracle. Fueled by the desire to improve the tools I utilized, I transitioned to software engineering, graduating from Hack Reactor's advanced software engineering bootcamp. Now, I apply my skills to create innovative and effective solutions that exceed end-users expectations. I thrive in the ever-evolving programming landscape, and enjoy the challenge of mastering new tools, programming languages, and frameworks. I am eager to continue my development and expand my skills as a software engineer!"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1CYyJ2B9-wQHgM9sVqvNvzNsuAnSbqaaBetQ8HhFeCa0/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gordon-JS",
  linkedin: "https://www.linkedin.com/in/j-gordon123/",
  gmail: "gordonjohn123@gmail.com",
  gitlab: "https://gitlab.com/jgordon123",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEDICATED FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Passionate about crafting robust and efficient Back-end solutions"
    ),
    emoji("⚡ Experienced in creating Single Page Applications (SPA)"),
    emoji(
      "⚡ Develop highly interactive Front-end / User Interfaces for your web and mobile applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      iconComponent: <SiHtml5 />
    },
    {
      skillName: "css3",
      iconComponent: <SiCss3 />
    },
    {
      skillName: "python",
      iconComponent: <SiPython />
    },
    {
      skillName: "javascript",
      iconComponent: <SiJavascript />
    },
    {
      skillName: "fastapi",
      iconComponent: <SiFastapi />
    },
    {
      skillName: "django",
      iconComponent: <SiDjango />
    },
    {
      skillName: "reactjs",
      iconComponent: <SiReact />
    },
    {
      skillName: "bootstrap",
      iconComponent: <SiBootstrap />
    },
    {
      skillName: "tailwindCSS",
      iconComponent: <SiTailwindcss />
    },
    {
      skillName: "docker",
      iconComponent: <SiDocker />
    },
    {
      skillName: "mongodb",
      iconComponent: <SiMongodb />
    },
    {
      skillName: "postgreSQL",
      iconComponent: <SiPostgresql />
    },
    {
      skillName: "npm",
      iconComponent: <DiNpm />
    },
    {
      skillName: "nodejs",
      iconComponent: <DiNodejs />
    },
    {
      skillName: "sass",
      iconComponent: <DiSass />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hack Reactor",
      logo: require("./assets/images/hackreactor.png"),
      subHeader: "Advanced Software Engineering Certificate",
      duration: "2023",
      desc: "Hack Reactor Scholarship Recipient"
    },
    {
      schoolName: " University of California, Los Angeles",
      logo: require("./assets/images/uclaLogo.png"),
      subHeader: "Bachelor of Arts in Political Science",
      duration: "2015 - 2019",
      desc: "Minor in Philosophy",
      descBullets: [
        "Afrikan Student Union",
        "Coaching Corps Club Vice President",
        "Sigma Chi Fraternity",
        "Bruin Woods Athletic Director"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "University of California, Los Angeles",
      company: "UCLA",
      companylogo: require("./assets/images/uclaLogo.png"),
      date: "September 2015 – June 2019",
      desc: "Bachelor of Arts in Political Science, Minor in Philosophy",
      descBullets: [
        "Afrikan Student Union.",
        "Coaching Corps Vice President.",
        "Sigma Chi Fraternity.",
        "Bruin Woods Athletic Director.",
        "HR Assistant Athletics Department."
      ]
    },
    {
      role: "Cloud Technology Consultant",
      company: "Oracle",
      companylogo: require("./assets/images/oracle.png"),
      date: "June 2019 – June 2021",
      desc: "",
      descBullets: [
        "Developed customer relationships & progressed sales cycles resulting in $200k+ deals.",
        "Trained in Technical Program Management.",
        "Co-Founded Social Selling Team, assisted the hiring, onboarding, and training of 20+ candidates."
      ]
    },
    {
      role: "Senior Sales & Marketing Associate",
      company: "Bozzuto",
      companylogo: require("./assets/images/bozzuto.png"),
      date: "June 2021 – November 2022",
      desc: "",
      descBullets: [
        "Fostered hundreds of relationships resulting in +20% Online Reputation Assessment(ORA) Growth.",
        "Managed Sales & Marketing Team resulting in +8% Occupancy Growth.",
        "2x Bozzuto Sales Achiever of the Month (Dec ‘21, May ‘22)."
      ]
    },
    {
      role: "Software Engineering Student",
      company: "Hack Reactor",
      companylogo: require("./assets/images/hackreactorlogo2.png"),
      date: "June 2023 - November 2023",
      desc: "Galvanize / Hack Reactor Scholarship Recipient",
      descBullets: [
        "Transitioned monolith to microservices using Dockerized RESTful APIs, optimizing PostgreSQL infrastructure and a Django-based Poller for improved app performance and real time communication.",
        "Integrated React front-end components for intuitive interaction with microservices, enhancing application management.",
        "Leveraged AGILE methodology, emphasizing SQL database schema design and wireframe creation for optimal performance.",
        "Ensured secure user authentication with JWTdown, prioritizing data protection and privacy."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/pickleplay_logo.png"),
      projectName: "PicklePlay",
      projectDesc: "Pickleball Matchmaking Service",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://gitlab.com/gitjaacd/pickle-play"
        },
        {
          name: "Visit Site",
          url: "https://gitjaacd.gitlab.io/pickle-play/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/autohaven_logo.png"),
      projectName: "AutoHaven",
      projectDesc: "Automobile Dealership Management",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://gitlab.com/jgordon123/autohaven"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me!",
  subtitle:
    "Discuss a project, work opportunity, or just want to say hi? My Inbox is open for all.",
  email_address: "gordonjohn123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
