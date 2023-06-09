import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Hire Chef</span>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-[75%] md:w-full pr-8"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none w-[35%]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
