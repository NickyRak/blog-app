import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Navbar.Collapse className="order-last md:order-first">
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-gray-950 dark:text-white"
      >
        My
        <span className="px-2 pb-1.5 ml-1 bg-gray-950 rounded-lg text-gray-100 dark:text-gray-950">
          Blog
        </span>
      </Link>
      <div className="flex gap-2 items-center">
        <Button
          className="w-12 h-12 m-0 rounded-full focus:ring-transparent hidden sm:inline"
          color="light"
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="border-none" color="light">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
