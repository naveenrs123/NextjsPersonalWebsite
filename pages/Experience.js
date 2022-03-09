import Layout from "../components/Layout";

const pStyles = "mt-6 text-2xl w-9/12";
const headingStyles = "text-4xl font-bold";
const titleStyles = "mt-8 mb-4 text-7xl font-bold";

export default function Home() {
  return (
    <Layout>
      <div className="w-9/12 mb-16">
        <div className="flex justify-between">
          <div className="mt-3 mx-3 flex flex-col">
            <h2 className={headingStyles}>Junior Software Engineer (Co-op)</h2>
            <h3 className="mt-2 text-red-500 text-3xl font-bold">Trulioo</h3>
          </div>
          <div className="mt-3 mx-3 flex flex-col text-right">
            <h3 className="italic text-3xl text-red-500">Vancouver</h3>
            <h3 className="italic mt-2 text-2xl">May - Aug 2019</h3>
          </div>
        </div>
        <div className="mt-5 text-xl">
          <p className="mx-3">
            At <span className="font-bold text-red-500">Trulioo</span>, I worked with a team of software developers to
            maintain and improve a full-stack software product using{" "}
            <span className="font-bold text-red-500">React.JS</span> and{" "}
            <span className="font-bold text-red-500">.NET Framework</span>. My responsibilities involved fixing various
            front-end bugs, and supporting framework upgrades.
          </p>
          <p className="mx-3 mt-6">
            <span className="font-bold text-red-500">More than 30 front-end bugs were fixed</span> due to my efforts,
            resulting in faster page-loads, fewer instances of visual regression, and positive customer feedback. In
            addition, I played a key role in upgrading to <span className="font-bold text-red-500">React 16.8</span> and
            preparing projects for a future upgrade to <span className="font-bold text-red-500">.NET Core.</span>
          </p>
        </div>
      </div>

      <div className="w-9/12 mb-16">
        <div className="flex justify-between">
          <div className="mt-3 mx-3 flex flex-col">
            <h2 className={headingStyles}>Software Engineer in Test (Co-op)</h2>
            <h3 className="mt-2 text-red-500 text-3xl font-bold">Copperleaf</h3>
          </div>
          <div className="mt-3 mx-3 flex flex-col text-right">
            <h3 className="italic text-3xl text-red-500">Vancouver</h3>
            <h3 className="italic mt-2 text-2xl">Sep 2020 - Apr 2021</h3>
          </div>
        </div>
        <div className="mt-5 text-xl">
          <p className="mx-3">
            At <span className="font-bold text-red-500">Copperleaf</span> I worked with a group of passionate developers
            to support and extend a full-stack application built with{" "}
            <span className="font-bold text-red-500">Angular</span> and{" "}
            <span className="font-bold text-red-500">.NET Framework</span>. As a Software Engineer in Test, I split my
            responsibilities between developing new features, writing test plans and improving the automation testing
            suites.
          </p>
          <p className="mx-3 mt-6">
            I fixed <span className="font-bold text-red-500">more than 80 bugs</span> across the application, wrote
            multiple test plans with <span className="font-bold text-red-500">over 40 test cases</span>, and fixed
            errors with the automation suite. This reduced test failures, improved page load times, and helped
            streamline future development.
          </p>
        </div>
      </div>

      <div className="w-9/12 mb-16">
        <div className="flex justify-between">
          <div className="mt-3 mx-3 flex flex-col">
            <h2 className={headingStyles}>Software Developer (Co-op)</h2>
            <h3 className="mt-2 text-red-500 text-3xl font-bold">Copperleaf</h3>
          </div>
          <div className="mt-3 mx-3 flex flex-col text-right">
            <h3 className="italic text-3xl text-red-500">Vancouver</h3>
            <h3 className="italic mt-2 text-2xl">May - Aug 2021</h3>
          </div>
        </div>
        <div className="mt-5 text-xl">
          <p className="mx-3">
            Although I was at the same company, the scope of my responsibilities{" "}
            <span className="font-bold text-red-500">significantly changed</span> and I was given{" "}
            <span className="font-bold text-red-500">more challenging tasks</span>. As a Software Developer, my main
            focus was on removing bloated code and implementing new features.
          </p>
          <p className="mx-3 mt-6">
            My most significant accomplishment was the creation of multiple{" "}
            <span className="font-bold text-red-500">500+ line PL/SQL migration scripts</span>, which were used to
            migrate millions of rows of customer data and simplify existing schema. I also implemented{" "}
            <span className="font-bold text-red-500">more than 10 features</span>, which brought useful functionality to
            the application, improved the user experience, and facilitated{" "}
            <span className="font-bold text-red-500">system-wide architecture changes.</span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
