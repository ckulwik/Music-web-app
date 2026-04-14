import React from "react";
import { Button } from "./ui/button";

const scrollTo = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

const HeaderItem = React.forwardRef((props, ref) => {
  let classes = "header-" + props.order;
  classes += " header";

  return (
    <Button
      className={classes}
      variant="primary"
      onClick={() => scrollTo(ref)}
      style={{
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    >
      <h2 className="menu-title" style={{ margin: 0 }}>{props.title}</h2>
      {props.children}
    </Button>
  );
});

export default HeaderItem;
