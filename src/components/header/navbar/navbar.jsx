import { BulbOutlined } from "@ant-design/icons";
import { Btn } from "../../btn";
import logo from "./logo.png";
import "./navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";

export const Navbar = () => {
  let { theme, settheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
            <h1>Product</h1>
          </a>
        </div>
        <div className="link">
          <a href="">Product</a>
          <a href="">Customers</a>
          <a href="">Prising</a>
          <a href="">Resources</a>
          <Btn clas={"basisBtn"} props={"Sign In"} pading={"10px 25px"} />
          <Btn clas={"basisBtn"} props={"Sign Up"} pading={"10px 25px"} />
          <form
            className="switch"
            onClick={() => {
              settheme(!theme);
            }}
          >
            <label className="switch">
              <BulbOutlined
                className={theme ? "yelow" : "black"}
                style={{ fontSize: "20px " }}
              />
            </label>
          </form>
        </div>
      </nav>
    </>
  );
};
