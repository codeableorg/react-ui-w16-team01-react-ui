import React from "react";
import styles from "./Link.css"

export default function Link({theme, icon, children, ...props}) {
  const themeClassName = theme ? `link--${theme}` : '';

  return (
    <a className={`link ${themeClassName}`}>
      {children}
    </a>
  )
}
