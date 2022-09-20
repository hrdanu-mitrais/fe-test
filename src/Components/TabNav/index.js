import { useEffect } from "react";

import styles from "./tabNav.module.scss";

const TabNav = ({ children, className }) => {
  useEffect(() => {
    const rootElement = document.querySelector(":root");
    rootElement.style.setProperty("--tab-nav-items", children.length);
  }, [children]);

  return (
    <div className={[styles.tabs, className].join(" ")}>
      {children}
    </div>
  );
};

export default TabNav;
