import Image from "next/image";

const icons = [
  {
    href: "mailto:naveen.sivasankar1234@gmail.com",
    url: "https://img.icons8.com/ios-glyphs/90/000000/email.png",
    alt: "Email icon.",
    title: "Email"
  },
  {
    href: "https://github.com/naveenrs123",
    url: "https://img.icons8.com/ios-glyphs/90/000000/github.png",
    alt: "GitHub icon.",
    title: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/nrs1/",
    url: "https://img.icons8.com/ios-glyphs/90/000000/linkedin.png",
    alt: "LinkedIn icon.",
    title: "LinkedIn"
  },
  {
    href: "https://www.twitter.com/nsivasa/",
    url: "https://img.icons8.com/ios-glyphs/90/000000/twitter.png",
    alt: "Twitter icon.",
    title: "Twitter"
  },
  {
    href: "https://letterboxd.com/rxpt0rs/",
    url: "https://img.icons8.com/ios-glyphs/90/000000/movie--v1.png",
    alt: "Link to Letterboxd account.",
    title: "Letterboxd"
  }
];

function buildIcons() {
  return icons.map((item, index) => {
    return (
      <a title={item.title} className="relative h-6 w-6 mx-3 md:h-10 md:w-10 md:mx-5" href={item.href} key={index}>
        <Image priority src={item.url} alt={item.alt} layout="fill" objectFit="cover" />
      </a>
    );
  });
}

export default function Footer() {
  return (
    <footer className="mt-4 mb-8 flex flex-col items-center font-jost">
      <div className="mb-5 flex justify-center items-center">{buildIcons()}</div>
      <p className="font-light text-normal md:text-lg">© 2022 Naveen Sivasankar - All rights reserved.</p>
    </footer>
  );
}
