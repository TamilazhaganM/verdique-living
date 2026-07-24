import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";


import { Link } from "react-router-dom";

import Container from "../ui/Container";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const categories = [
  "Indoor Plants",
  "Outdoor Plants",
  "Pots",
  "Fertilizers",
  "Garden Tools",
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">

      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 mt-20">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-green-400">

              Verdique Living

            </h2>

            <p className="mt-5 text-gray-400 leading-8">

              Bringing nature closer to every home through premium quality
              plants and sustainable gardening solutions.

            </p>

            <div className="flex gap-4 mt-8">

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                 <a
  key={index}
  href={item.href}
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-11
    h-11
    rounded-full
    bg-white/10
    flex
    items-center
    justify-center
    text-white
    hover:bg-green-600
    hover:scale-110
    transition-all
    duration-300
  "
>
  <Icon size={18} />
</a>
                );
              })}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              Categories

            </h3>

            <ul className="space-y-4">

              {categories.map((item) => (

                <li
                  key={item}
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone
                  size={20}
                  className="text-green-400 mt-1"
                />

                <span className="text-gray-400">

                  +91 98765 43210

                </span>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={20}
                  className="text-green-400 mt-1"
                />

                <span className="text-gray-400">

                  support@verdiqueliving.com

                </span>

              </div>

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="text-green-400 mt-1"
                />

                <span className="text-gray-400">

                  Chennai, Tamil Nadu, India

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">

            © {new Date().getFullYear()} Verdique Living. All Rights Reserved.

          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-green-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 hover:text-green-400"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;