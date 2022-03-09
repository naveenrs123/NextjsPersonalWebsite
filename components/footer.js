import Image from "next/image";

const icons = [
  {
    href: "mailto:naveen.sivasankar1234@gmail.com",
    url: "https://img.icons8.com/ios-glyphs/48/ffffff/email.png",
    alt: "Email icon.",
  },
  {
    href: "https://github.com/naveenrs123",
    url: "https://img.icons8.com/ios-glyphs/48/ececec/github.png",
    alt: "GitHub icon.",
  },
  {
    href: "https://www.linkedin.com/in/nrs1/",
    url: "https://img.icons8.com/ios-glyphs/48/ececec/linkedin.png",
    alt: "LinkedIn icon.",
  },
  {
    href: "https://www.twitter.com/nsivasa/",
    url: "https://img.icons8.com/ios-glyphs/48/ececec/twitter.png",
    alt: "Twitter icon.",
  },
];

function buildIcons() {
  return icons.map((item, index) => {
    return (
      <a className="relative h-7 w-7 mx-4" href={item.href} key={index}>
        <Image priority src={item.url} alt={item.alt} layout="fill" objectFit="cover" />
      </a>
    );
  });
}

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-900 py-8 flex flex-col items-center">
      <div className="mb-5 flex justify-center items-center">{buildIcons()}</div>
      <p className="font-thin">© 2022 Naveen Sivasankar</p>
    </footer>
  );
}
