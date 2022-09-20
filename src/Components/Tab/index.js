import { useState } from "react";

import "./tab.scss";
import TabNav from "../TabNav";

export default function Tab(props) {
  const [active, setActive] = useState(1);

  const handleNavItemClick = (i) => () => {
    const rootElement = document.querySelector(":root");
    rootElement.style.setProperty("--tab-nav-current-item", i);
    setActive(i);
    props.updateNavIndex(i);
  };

  return (
    <TabNav className="tab-nav border-bottom border-top">
      {props.list.map((data, index) => (
        <a
          href={`#${index}`}
          className={`fw-semibold py-2 ${active === index ? "active" : " "}`}
          onClick={handleNavItemClick(index)}
          key={index}
        >
          {data.title}
        </a>
      ))}
    </TabNav>
  );
}
