// import styles from '../styles/Layout.module.css'
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-auto bg-[#ffffff]">
      <Nav />
      <div className="flex flex-1 flex-col p-[50px]">{children}</div>
    </div>
  );
};

export default Layout;
