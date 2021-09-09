import "../../styles/header.css";
import HeaderItem from "./HeaderItem";

const Header = (props) => {
  return (
    <header>
      <HeaderItem title={props.titles[0]} ref={props.refs[0]} order={1} />
      <HeaderItem title={props.titles[1]} ref={props.refs[1]} order={2} />
      <HeaderItem title={props.titles[2]} ref={props.refs[2]} order={3} />
    </header>
  );
};

export default Header;
