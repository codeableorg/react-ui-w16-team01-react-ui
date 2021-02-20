import React from "react";
import styles from "./../stylesheets/Container.css"

export default function Container({title, children, ...props}) {
  return (
    <div className="container__wrapper">
      <div className="container">
        <h2 className="container__title">{title}</h2>
        <div className="container__cards">
          {children}
        </div>
      </div>
    </div>
  )
}
