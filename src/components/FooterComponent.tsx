import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface FooterComponentProps {
  src: string;
  alt: string;
  link: string;
  linkLabel: ReactNode;
  p: ReactNode;
}

const FooterComponent = ({
  src,
  alt,
  link,
  linkLabel,
  p,
}: FooterComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat text-white">
      <img src={src} alt={alt} className="pt-5 xl:pt-0" />
      <Link to={link} className=" text-xl font-semibold underline pt-4 md:text-4xl">
        {linkLabel}
      </Link>
      <p className="text-xl pt-2 px-2">{p}</p>
    </div>
  );
};

export default FooterComponent;
