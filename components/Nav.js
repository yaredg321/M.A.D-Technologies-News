import Link from "next/link";
import logo from "../assets/logo.jpg";

const Nav = () => {
  console.log(logo, "PP");
  return (
    <nav className=" h-[60px] w-full flex items-center bg-[#fff] px-[50px] sticky top-0 gap-10 shadow-md">
      <div className="h-full flex items-center">
        <img className="h-full" src={logo.src} />
        <p className="text-[#000000] text-bold text-[22px ]">News Project</p>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-bold text-[22px ]  mt-8 h-[50px] flex-col ml-8 mr-8 text-[#000000] flex-row ">
          <Link href="/">
            <a className="mr-8">Home</a>
          </Link>
          <Link href="/about">
            <a>About</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
