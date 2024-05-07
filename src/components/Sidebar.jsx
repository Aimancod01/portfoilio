import { GiMailbox, GiPhone } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import img from "../../public/images/img1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import { IoListOutline } from "react-icons/io5";
function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={img} alt="" className="w-24" />
        </figure>
        <div className="info-content">
          <h1 className="name">Aiman Naeem</h1>
          <p className="title">
            <span className="font-medium">Mern Stack Developer</span>
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bg-sky-200 p-2 hover:bg-sky-300 transition-all lg:hidden  rounded-lg text-xl right-1 top-1 "
        >
          <IoListOutline />
        </button>
      </div>
      {isOpen && (
        <div className="w-[19rem] md:w-[36rem] md:bottom-28 lg:hidden p-5 rounded-lg  bottom-52  absolute bg-gray-800 ">
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <BiLogoGmail />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:aimannaeem80@gmail.com"
                  className="contact-link"
                >
                  aimannaeem80@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <GiPhone />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+92301-4974490" className="contact-link">
                  +92301-4974490
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <FaGithub />
              </div>
              <div className="contact-info">
                <p className="contact-title">Github</p>
                <a
                  href="https://github.com/Aimancod01"
                  className="contact-link"
                >
                  github.com/Aimancod01
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <FaLinkedin />
              </div>
              <div className="contact-info">
                <p className="contact-title">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/aiman-naeem-600b1b27a/"
                  className="contact-link"
                >
                  linkedin.com/in/aimannaeem1
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <GrLocation />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <a className="contact-link">Lahore, Pakistan</a>
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className={`sidebar-info_more `}>
        <hr className="seprator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <BiLogoGmail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:aimannaeem80@gmail.com" className="contact-link">
                aimannaeem80@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+92301-4974490" className="contact-link">
                +92301-4974490
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/Aimancod01" className="contact-link">
                github.com/Aimancod01
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/aiman-naeem-600b1b27a/"
                className="contact-link"
              >
                linkedin.com/in/aimannaeem1
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GrLocation />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <a className="contact-link">Lahore, Pakistan</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
