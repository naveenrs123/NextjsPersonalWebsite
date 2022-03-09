import Image from "next/image";
import Layout from "../components/Layout";

const pStyles = "mt-6 text-2xl w-9/12 font-light";
const headingStyles = "mt-8 text-4xl font-bold w-9/12";
const titleStyles = "mt-8 mb-4 text-7xl font-bold";

export default function Home() {
  return (
    <Layout>
      <div className="relative h-72 w-72">
        <Image
          className="rounded-full "
          priority
          src="/../public/images/picrew-img.png"
          alt="Cartoon illustration of Naveen Sivasankar"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className={titleStyles}>Hello!</h1>
      <h2 className={headingStyles}>Background</h2>
      <p className={pStyles}>
        I am <strong className="text-red-500">Naveen Sivasankar</strong>, a soon-to-be graduate of the University of
        British Columbia. I have several years of experience developing{" "}
        <strong className="text-red-500">full-stack enterprise applications</strong> and even more experience with
        various academic projects.
      </p>
      <p className={pStyles}>
        My academic and professional experiences have helped me to understand many{" "}
        <strong className="text-red-500">software development processes</strong> and will allow me to work effectively
        with others in a professional setting.
      </p>
      <h2 className={headingStyles}>Future</h2>
      <p className={pStyles}>
        I am still exploring my options but I am excited to work in the fields of{" "}
        <strong className="text-red-500">full-stack development</strong>,{" "}
        <strong className="text-red-500">data science</strong>, or{" "}
        <strong className="text-red-500">cloud computing</strong>. I am also curious about the latest technologies such
        as <strong className="text-red-500">Web3</strong> and the blockchain.
      </p>
      <h2 className={headingStyles}>Hobbies</h2>
      <p className={pStyles}>
        When I am not involved with academics or work, I enjoy{" "}
        <strong className="text-red-500">exploring new cuisines</strong> by experimenting in the kitchen or exploring
        the Vancouver restaurant scene. I also <strong className="text-red-500">consume a lot of media</strong>, such as
        movies and books, and especially enjoy intellectually challenging content.
      </p>
    </Layout>
  );
}
