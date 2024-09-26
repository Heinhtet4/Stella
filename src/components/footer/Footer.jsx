import React from "react";
import Container from "../Container";
import { FaFacebookF, FaTiktok, FaViber } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";

const Footer = () => {
  return (
    <Container className={"mt-auto pt-14"}>
      <footer className="footer footer-center bg-base-200 rounded-t-xl text-primary-content p-10 mt-auto shadow-md">
        <aside>
        <GiBowTieRibbon className="text-5xl text-primary" />
          <p className="font-bold">
            Stella Clothing For You
            <br />
            Start your shopping adventure with us today!
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="btn btn-circle bg-primary-content text-base-200 hover:text-primary-content duration-300">
                <FaFacebookF className="text-lg"/>
            </a>
            <a href="#" className="btn btn-circle bg-primary-content text-base-200 hover:text-primary-content duration-300">
                <FaTiktok className="text-lg"/>
            </a>
            <a href="#" className="btn btn-circle bg-primary-content text-base-200 hover:text-primary-content duration-300">
                <FaViber className="text-lg"/>
            </a>
          </div>
        </nav>
      </footer>
    </Container>
  );
};

export default Footer;
