import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img src="/images/bmw.png" alt="bmw-logo" width={50} />
        </Link>
        <CustomButton
          designs=" min-w-[130px] "
          btnType="button"
          title="Kayıt Ol"
        />
      </nav>
    </header>
  );
};

export default Header;
