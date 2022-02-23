import Head from "next/head";
import Image from "next/image";
import CourseItem from "../components/courseItem";
import Footer from "../components/footer";
import Navbar from "../components/navBar";

const pStyles = "text-lg mb-1";
const headingStyles = "text-2xl font-bold text-wrap";
const titleStyles = "mt-8 mb-8 text-5xl font-bold";
const containerStyles = "bg-white text-black p-5 m-3 border-4 border-solid border-red-500";

const classes = [
  {
    name: "CPSC 304",
    desc: "Relational Databases",
  },
  {
    name: "CPSC 313",
    desc: "Hardware & Operating Systems",
  },
  {
    name: "CPSC 320",
    desc: "Intermediate Algorithms",
  },
  {
    name: "CPSC 311",
    desc: "Programming Languages",
  },
  {
    name: "CPSC 410",
    desc: "Advanced Software Engineering",
  },
  {
    name: "CPSC 317",
    desc: "Internet Computing",
  },
  {
    name: "CPSC 416",
    desc: "Distributed Systems",
  },
];

function buildClassesGrid() {
  return classes.map((item, index) => {
    return <CourseItem name={item.name} desc={item.desc} key={index}></CourseItem>;
  });
}

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills + Education</title>
        <meta name="description" content="A personal portfolio website." />
        <link rel="icon" href="./images/picrew-img.png" />
      </Head>
      <Navbar></Navbar>
      <main className="mb-8 flex flex-col justify-center items-center">
        <h1 className={titleStyles}>Skills</h1>
        <section className="w-11/12 flex justify-center flex-wrap">
          <div className={containerStyles}>
            <h3 className={headingStyles}>Languages</h3>
            <p className="text-lg">Java, Python, TypeScript, Go, HTML, CSS, C#</p>
          </div>
          <div className={containerStyles}>
            <h3 className={headingStyles}>Dev Tools</h3>
            <p className="text-lg">Git, JIRA, BitBucket, Azure DevOps, GitHub</p>
          </div>
          <div className={containerStyles}>
            <h3 className={headingStyles}>Tools and Frameworks</h3>
            <p className="text-lg">Bash, PL/SQL, MongoDB, React, Next.js</p>
          </div>
          <div className={containerStyles}>
            <h3 className={headingStyles}>Editors/IDEs</h3>
            <p className="text-lg">IntelliJ IDEA, Jupyter Notebook, Visual Studio Code, Visual Studio</p>
          </div>
        </section>
        <h1 className={titleStyles}>Education</h1>
        <section className="w-11/12 flex flex-wrap">
          <div className="mr-6">
            <h3 className="mb-4 text-3xl font-bold">Degree Info</h3>
            <p className={pStyles}>
              <strong className="text-red-500">B.Sc Honours in Computer Science</strong>
            </p>
            <p className={pStyles}>
              <strong className="text-red-500">Date: </strong>2017-Present
            </p>
            <p className={pStyles}>
              <strong className="text-red-500">Location: </strong>Vancouver, BC
            </p>
          </div>

          <div className={containerStyles + " flex flex-col grow"}>
            <h3 className={headingStyles + " mb-2"}>Relevant Courses</h3>
            <div className="w-full grid grid-cols-3 gap-3">{buildClassesGrid()}</div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
