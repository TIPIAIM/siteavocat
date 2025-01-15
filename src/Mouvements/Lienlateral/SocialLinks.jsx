import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function SocialLinks() {
  //pour les quatitre lien gauche
  const links = [
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 1,
      child: (
        <>
          <FaInstagram size={25} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://www.instagram.com/aod.avocats.scpa/",
      style: "rounded-tr-md",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 2,
      child: (
        <>
          <FaFacebook size={25} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://www.facebook.com/profile.php?id=61569855070493&mibextid=ZbWKwL",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 3,
      child: (
        <>
          <MdMessage size={25} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "mailto:amadou.diallo@aod-avocats.com",
    },
    {
      /* {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 4,
      child: (
        <>
     
          <FaLinkedin size={25} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "",
      style: "",
    },*/
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[40%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex bg-gradient-to-ll to-gray-900 via-cyan-400 from-cyan-50  justify-between items-center w-40 h-12 px-1 ml-[-19px] hover:ml-[-30px] hover:rounded-md duration-300 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-cyan-600 font-bold hover:text-cyan-500 hover:underline transition-all duration-200"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
