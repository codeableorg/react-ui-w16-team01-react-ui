import React from "react";
import "../stylesheets/Link.css"

export default function Link({href, children, ...props}) {
  return (
    <a className={`link`} href={href}>
      {children}
    </a>
  )
}
