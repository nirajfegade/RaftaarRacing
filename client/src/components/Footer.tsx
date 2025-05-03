import { Link } from 'wouter';
import { scrollToSection } from '@/lib/utils';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok 
} from 'react-icons/fa';

interface FooterLinkGroup {
  title: string;
  links: {
    name: string;
    url: string;
    isSection?: boolean;
  }[];
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "#home", isSection: true },
      { name: "Features", url: "#features", isSection: true },
      { name: "Gallery", url: "#screenshots", isSection: true },
      { name: "Team", url: "#team", isSection: true },
      { name: "Contact", url: "#contact", isSection: true }
    ]
  },
  {
    title: "Game Info",
    links: [
      { name: "How to Play", url: "#" },
      { name: "Characters", url: "#" },
      { name: "Racetracks", url: "#" },
      { name: "Power-ups", url: "#" },
      { name: "Game Modes", url: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", url: "#" },
      { name: "System Requirements", url: "#" },
      { name: "Bug Reports", url: "#" },
      { name: "Community Forum", url: "#" },
      { name: "Privacy Policy", url: "#" }
    ]
  }
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaYoutube />, url: "#" },
  { icon: <FaTiktok />, url: "#" }
];

export default function Footer() {
  const handleLinkClick = (url: string, isSection?: boolean) => {
    if (isSection) {
      const sectionId = url.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-darker py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <span 
                className="text-3xl text-primary mb-4 inline-block cursor-pointer"
                style={{ fontFamily: '"Racing Sans One", cursive' }}
              >
                RAFTAAR
              </span>
            </Link>
            <p className="text-light/60 mb-4">
              The most exciting kart racing game that combines speed, strategy, and spectacular stunts.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="text-light/60 hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinkGroups.map((group, index) => (
            <div key={index}>
              <h4 className="text-light font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.url, link.isSection);
                      }}
                      className="text-light/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-light/10 pt-8 text-center">
          <p className="text-light/40 text-sm">
            &copy; {new Date().getFullYear()} RAFTAAR Racing Game. All rights reserved. All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
