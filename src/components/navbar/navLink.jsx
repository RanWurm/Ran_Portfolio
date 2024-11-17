"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isDownload = link.url.includes('drive.google.com');
  const linkClassName = `rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`;

  // Handle download links (like CV)
  if (isDownload) {
    return (
      <a 
        href={link.url} 
        className={linkClassName}
        download="Ran_Wurmbrand_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
    );
  }

  // Handle external links
  if (link.url.startsWith('http')) {
    return (
      <a 
        href={link.url} 
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
    );
  }

  // Handle internal navigation links
  return (
    <Link 
      href={link.url} 
      className={linkClassName}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;