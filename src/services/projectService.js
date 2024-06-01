const projects = [
  {
    id: 1,
    imageSrc: "/images/projects/eCafe/thumbnail.jpeg",
    title: "eCafé",
    description: "Online store to order eatables for a local café",
  },
  {
    id: 2,
    imageSrc: "/images/projects/statistics-app/thumbnail.jpg",
    title: "Statistics Application",
    description:
      "This web app is designed for wholesale traders. It helps manage orders, suppliers, and products easily. Plus, it provides detailed stats for all orders, making business decisions simpler.",
  },
  {
    id: 3,
    imageSrc: "/images/projects/tournamentSchedulingSystem/thumbnail.jpeg",
    title: "کھیل",
    description:
      "Use this app to schedule your cricket tournament. It also provide points table feature.",
  },
  {
    id: 4,
    imageSrc: "/images/projects/Rehaish/thumbnail.png",
    title: "Rehasih",
    description:
      "Rehaish: Crafting a dynamic marketplace for property rentals and sales with MERN stack. Exciting features in progress!",
  },
];

const details = [
  {
    id: 1,
    technologies: [
      { name: "Java", image: "/images/technologies/java.png" },
      { name: "SpringBoot", image: "/images/technologies/spring-boot.png" },
      { name: "Thymeleaf", image: "/images/technologies/thymeleaf.png" },
      { name: "HTML", image: "/images/technologies/html.png" },
      { name: "CSS", image: "/images/technologies/css.png" },
      { name: "Javascript", image: "/images/technologies/javascript.png" },
    ],
    video: "3waglUa5Ako",
    github: "https://github.com/MuhammadUmar7831/eCafe",
    screenshots:
      "https://drive.google.com/drive/folders/1M5JoB2spi6cJd-rhs4cp9eqwGAN2QFme?usp=sharing",
    img: [
      "/images/projects/eCafe/1.png",
      "/images/projects/eCafe/2.png",
      "/images/projects/eCafe/3.png",
      "/images/projects/eCafe/4.png",
      "/images/projects/eCafe/5.png",
      "/images/projects/eCafe/6.png",
      "/images/projects/eCafe/7.png",
      "/images/projects/eCafe/8.png",
      "/images/projects/eCafe/9.png",
      "/images/projects/eCafe/10.png",
      "/images/projects/eCafe/11.png",
      "/images/projects/eCafe/12.png",
      "/images/projects/eCafe/13.png",
      "/images/projects/eCafe/14.png",
      "/images/projects/eCafe/15.png",
      "/images/projects/eCafe/16.png",
      "/images/projects/eCafe/17.png",
      "/images/projects/eCafe/18.png",
      "/images/projects/eCafe/19.png",
      "/images/projects/eCafe/20.png",
      "/images/projects/eCafe/21.png",
      "/images/projects/eCafe/22.png",
      "/images/projects/eCafe/23.png",
      "/images/projects/eCafe/24.png",
    ],
    completed: true,
    contributors: [
      {
        name: "Huzaifa",
        image: "https://avatars.githubusercontent.com/u/124560775?v=4",
        link: "https://github.com/HuzaifaRizwan1231",
      },
      {
        name: "Daniyal",
        image: "https://avatars.githubusercontent.com/u/144957322?v=4",
        link: "https://github.com/D-Soft08",
      },
    ],
  },
  {
    id: 2,
    technologies: [
      { name: "MySql", image: "/images/technologies/mysql.png" },
      { name: "Express js", image: "/images/technologies/expressjs.png" },
      { name: "React", image: "/images/technologies/react.png" },
      { name: "Node js", image: "/images/technologies/nodejs.png" },
      { name: "Tailwindcss", image: "/images/technologies/tailwindcss.png" },
    ],
    video: "aVRNOz23oSM",
    github: "https://github.com/MuhammadUmar7831/Statistics-Application",
    screenshots:
      "https://drive.google.com/drive/folders/1prNU-BGK1r6tnrwCRfEFvfN-eBsqHlHe?usp=drive_link",
    img: [
      "/images/projects/statistics-app/1.png",
      "/images/projects/statistics-app/2.png",
      "/images/projects/statistics-app/3.png",
      "/images/projects/statistics-app/4.png",
      "/images/projects/statistics-app/5.png",
      "/images/projects/statistics-app/6.png",
      "/images/projects/statistics-app/7.png",
    ],
    completed: true,
  },
  {
    id: 3,
    technologies: [
      { name: "MongoDB", image: "/images/technologies/mongodb.png" },
      { name: "Express Js", image: "/images/technologies/expressjs.png" },
      { name: "React", image: "/images/technologies/react.png" },
      { name: "Node js", image: "/images/technologies/nodejs.png" },
      { name: "Tailwindcss", image: "/images/technologies/tailwindcss.png" },
    ],
    video: "VTNwu6_tzDE",
    github: "https://github.com/MuhammadUmar7831/Tournament_Scheduling_System",
    screenshots:
      "https://drive.google.com/drive/folders/1i480wfG2Rg0Dc9izAPhhmP16kdEJzGYz?usp=drive_link",
    img: [
      "/images/projects/tournamentSchedulingSystem/1.png",
      "/images/projects/tournamentSchedulingSystem/2.png",
      "/images/projects/tournamentSchedulingSystem/3.png",
      "/images/projects/tournamentSchedulingSystem/4.png",
      "/images/projects/tournamentSchedulingSystem/5.png",
      "/images/projects/tournamentSchedulingSystem/6.png",
      "/images/projects/tournamentSchedulingSystem/7.png",
      "/images/projects/tournamentSchedulingSystem/8.png",
      "/images/projects/tournamentSchedulingSystem/9.png",
      "/images/projects/tournamentSchedulingSystem/10.png",
      "/images/projects/tournamentSchedulingSystem/11.png",
      "/images/projects/tournamentSchedulingSystem/12.png",
    ],
    completed: true,
  },
  {
    id: 4,
    technologies: [
      { name: "MongoDB", image: "/images/technologies/mongodb.png" },
      { name: "Express Js", image: "/images/technologies/expressjs.png" },
      { name: "React", image: "/images/technologies/react.png" },
      { name: "Node js", image: "/images/technologies/nodejs.png" },
      { name: "Tailwindcss", image: "/images/technologies/tailwindcss.png" },
      { name: "Redux", image: "/images/technologies/redux.png" },
    ],
    github: "https://github.com/MuhammadUmar7831/Rehaish",
    liveDemo: "https://rehaish.vercel.app/",
    completed: false,
  },
];

export { details, projects };
