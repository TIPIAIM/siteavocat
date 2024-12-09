import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Liensoci() {
  //pour les quatitre lien gauche
  const links = [
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://www.linkedin.com/in/alphaousmane-diallo-guinea14?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 2,
      child: (
        <>
          GhitHub
          <FaGithubSquare size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://github.com/TIPIAIM",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 3,
      child: (
        <>
          E-mail
          <MdContactMail size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "mailto:alphaousmaneousmane@gmail.com",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 4,
      child: (
        <>
          C-Watchap
          <AiOutlineWhatsApp size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://call.whatsapp.com/voice/6BltD24KmGj7ymIleODD5N",
      style: "rounded-tr-md",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 5,
      child: (
        <>
          ResumeCV
          <FaFileDownload size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "/alphaousmane23.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[15%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex bg-gradient-to- to-gray-900 via-green-300 from-black  justify-between items-center w-40 h-12 px-1 ml-[-145px] hover:ml-[-130px] hover:rounded-md duration-300 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-green-900 font-bold hover:text-blue-900 hover:underline transition-all duration-200"
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
