import React from "react";
import "./styles.css";
import { Alert } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert with{" "}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </div>
  );
}
