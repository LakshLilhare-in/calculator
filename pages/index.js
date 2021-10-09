// eslint-disable

import styles from "../styles/Home.module.css";
import React from "react";
import InputController from "../hooks/useControlledInput";
export default function Home() {
  var [mode, Setmode] = React.useState("Add");
  var [curresult, Setres] = React.useState(0);
  var FirstInput = InputController("");
  var SecondInput = InputController("");
  function result() {
    if (mode === "Add") {
      Setres(parseInt(FirstInput.value) + parseInt(SecondInput.value))
    }
    if (mode === "Substract") {
      Setres(parseInt(FirstInput.value) - parseInt(SecondInput.value))
    }
    if (mode === "Multiply") {
      Setres(parseInt(FirstInput.value) * parseInt(SecondInput.value))
    }
    if (mode === "Divide") {
      Setres(parseInt(FirstInput.value) / parseInt(SecondInput.value))
    }
    if (Math.sign(curresult) === -1) {
      Setres('Sum failed!')
    }
    if (Number.isNaN(curresult) === true) {
      Setres('Sum failed!')
    }
    FirstInput.reset()
    SecondInput.reset()
    setTimeout(() => {
      Setres(0)
    },5000)
  }
  return (
    <>
<nav className="navbar navbar-light p-3 shadow-lg bg-light">
        <div className="container-fluid">

          <span className="navbar-brand mb-0 h3">Laksh&apos;s Calculator</span>
  </div>
      </nav>
      {curresult === 'Sum failed!' && <div className="alert alert-danger alert-dismissible fade show" role="alert">
        Sum failed. Enter Proper values
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
    <div className={styles.container}>
      <h1>Calculator: {mode}</h1>
      <input
        type="text"
        onChange={FirstInput.handleChange}
        value={FirstInput.value}
        className="form-control mb-3 my-3"
        style={{ width: "69%" }}
      />
      <input type="text" className="form-control" style={{ width: "69%" }}
        onChange={SecondInput.handleChange}
        value={SecondInput.value}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-5 text-center">
            <h3 className="pt-3">Modes</h3>
            <a
              name=""
              id=""
              onClick={() => Setmode("Add")}
              className="btn btn-primary m-3"
              href="#"
              role="button"
            >
              +
            </a>
            <a
              name=""
              id=""
              onClick={() => Setmode("Substract")}
              className="btn btn-primary m-3"
              href="#"
              role="button"
            >
              -
            </a>
            <a
              name=""
              id=""
              onClick={() => Setmode("Multiply")}
              className="btn btn-primary m-3"
              href="#"
              role="button"
            >
              *
            </a>
            <a
              name=""
              id=""
              onClick={() => Setmode("Divide")}
              className="btn btn-primary m-3"
              href="#"
              role="button"
            >
              ÷
            </a>
            <h1 style={{color: curresult === 'Sum failed!' ? 'red' : 'black'}}>{ curresult}</h1>
          </div>
          <button
            type="button"
            name=""
            onClick={result}
            id=""
            className="btn btn-primary btn-lg pt-3 pb-3 mt-3"
            style={{
              marginTop: "7rem !important",
              width: "4rem",
              marginLeft: "25rem",
              justifyContent: "center",
            }}
          >
            =
          </button>
        </div>
      </div>
      </div>
      </>
  );
}
