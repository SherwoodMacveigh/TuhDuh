import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import SVG from "../svg";
import styles from "./styles.module.scss";

export const Header = () => {
  useEffect(() => {
    mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

    mixpanel.track("Site Visit");
  }, []);

  const onSignUpClick = () => {
    if (document) {
      document.getElementById("sign-up").scrollIntoView();
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <SVG name="logo" />
      </div>
      <button onClick={onSignUpClick}>
        <SVG name="star" /> Join the Waitlist!
      </button>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
