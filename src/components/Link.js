import React from "react";
import styles from "./../stylesheets/Link.css"

export default function Link({href, children, ...props}) {
  return (
    <a className={`link`} href={href}>
      {children}
    </a>
  )
}
