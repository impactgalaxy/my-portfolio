import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <p className="text-3xl">Follow me on</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://www.facebook.com/pisacoder">
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nur-mohammad-palash">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
