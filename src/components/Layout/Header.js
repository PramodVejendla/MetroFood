import React, { Fragment } from "react";
import classes from "./Header.module.css";
import Meals from "../../Assets/meals.jpg";
import HeaderCart from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MetroFood</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes['meals-image']}>
        <img src={Meals} alt="img" />
      </div>
    </Fragment>
  );
};

export default Header;
