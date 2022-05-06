import Image from "next/image";
import Layout from "../components/Layout";

const titleCommon = "mx-4 rounded my-6 w-fit text-3xl font-bold text-center bg-green-900 text-white px-4 py-2";
const titleResp = "md:text-5xl";

const pCommon = "mx-4 mb-3 text-lg font-light text-center";
const pResp = "md:text-2xl";

const linkCommon = "font-normal text-amber-700 hover:bg-green-900 hover:text-white hover:px-2";
const spanCommon = "font-normal text-amber-700";

export default function Home() {
  return (
    <Layout>
      <div className="mt-1 mx-4">
        <Image
          className="rounded"
          priority
          src="/images/hellothere.gif"
          alt="Cartoon illustration of Naveen Sivasankar"
          layout="intrinsic"
          width={480}
          height={240}
        />
      </div>

      <h1 className={titleCommon + " " + titleResp}>Naveen Sivasankar</h1>

      <p className={pCommon + " " + pResp}>
        UBC graduate with a{" "}
        <a title="Download thesis" href="/docs/thesis.pdf" className={linkCommon} download="thesis.pdf">
          B.Sc. Honours in Computer Science
        </a>
        .
      </p>

      <p className={pCommon + " " + pResp}>
        Completed internships at{" "}
        <a
          data-tooltip-target="tooltip-animation"
          title="Go to website"
          href="https://www.trulioo.com/"
          className={linkCommon}
        >
          Trulioo
        </a>{" "}
        and{" "}
        <a title="Go to website" href="https://www.copperleaf.com/" className={linkCommon}>
          Copperleaf
        </a>
        .
      </p>

      <p className={pCommon + " " + pResp}>
        Interested in <span className={spanCommon}>full-stack software development</span>,{" "}
        <span className={spanCommon}>programming languages</span>, and{" "}
        <span className={spanCommon}>distributed systems</span>.
      </p>

      <p className={pCommon + " " + pResp}>
        Amateur <span className={spanCommon}>chef</span>,{" "}
        <span className={spanCommon}>movie/TV show </span>enthusiast, and self-proclaimed{" "}
        <span className={spanCommon}>food critic</span>.
      </p>
    </Layout>
  );
}
