import React from "react";
import "../styles/headerItem.css";

const scrollTo = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

const HeaderItem = React.forwardRef((props, ref) => {
  let classes = "header-" + props.order;
  classes += " header";

  return (
    <div className={classes} onClick={() => scrollTo(ref)}>
      <h2 className="menu-title">{props.title}</h2>
      {props.children}
    </div>
  );
});

export default HeaderItem;
