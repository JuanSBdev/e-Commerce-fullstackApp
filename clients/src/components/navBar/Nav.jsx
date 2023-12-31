import { useState, useEffect } from "react";
import Styles from "./Nav.module.css";
import logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import LogInButton from "../Login/LogInButton";
import Profile from "../Login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import LogOut from '../Login/LogOut'
import { useDispatch, useSelector } from "react-redux";
import { getNameProducts } from "../../Redux/actions/actions";
import { createUser } from "../../Redux/actions/actions";
import { BsCart3 } from "react-icons/bs";

export default function Nav() {
  let dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();
  const userLog = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.name !== userLog.name && isAuthenticated) {
      dispatch(createUser(user.name, user.email));
    }
  }, [user, dispatch, userLog, isAuthenticated]);
  /* eslint-disable no-unused-vars */
  let name = useSelector((state) => state.product_name[0]);
  //dropdown para logout profile
  useEffect(() => {
    if (user && user.name !== userLog.name && isAuthenticated) {
      dispatch(createUser(user.name, user.email));
    }
  }, [user, dispatch, isAuthenticated, userLog]);

  // Estado del carrito
  const cart = useSelector((state) => state.cart);

  // Calcula la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.buyQ, 0);

  let [inputSearch, setInputSearch] = useState("");

  //para buscar con enter
  let handleSearch = (e) => {
    let { value } = e.target;
    setInputSearch(value);
  };

  let dispatchSearch = () => {
    dispatch(getNameProducts(inputSearch));
  };

  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.col_5}`}>
        <div className={`${Styles.div_logo} ${Styles.col_3}`}>
          <NavLink to="/">
            <img src={logo} alt="logo" className={`${Styles.logo}`} />
          </NavLink>
        </div>
        <div className={` ${Styles.col_1}`}>
          <NavLink to="/">
            <button className={`${Styles.background} ${Styles.font}`}>
              Home
            </button>
          </NavLink>
        </div>
        <div className={`${Styles.col_1}`}>
          <div className={Styles.dropdown}>
            <NavLink to="/products">
              <button
                className={`${Styles.background} ${Styles.dropdownToggle}`}
              >
                Products
              </button>
            </NavLink>
          </div>
        </div>
        <div className={` ${Styles.col_1}`}>
          <NavLink to={"/help"} className={Styles.btn_help}>
            <h6 className={Styles.font}>Help</h6>
          </NavLink>
        </div>
        <div className={` ${Styles.col_4}`}>
          <NavLink to={"/about"} className={Styles.btn_help}>
            <h6 className={Styles.font}>About</h6>
          </NavLink>
        </div>
      </div>
      <div className={` ${Styles.col_4}`}>
        <div className={`${Styles.col_search} `}>
          <form className={`${Styles.form_search}`} onSubmit={dispatchSearch}>
            <input
              type="text"
              placeholder="Search"
              className={`${Styles.searchInput}`}
              onChange={handleSearch}
            />
            <NavLink to={`/products/search`}>
              <button
                className={`${Styles.searchButton}`}
                onClick={dispatchSearch}
              >
                <BsSearch />
              </button>
            </NavLink>
          </form>
        </div>
      </div>
      <div className={Styles.col_4}>
        <NavLink to="/ShoppingCar" className={Styles.link_cart}>
          <BsCart3 className={`${Styles.cart}`} />
          <span className={Styles.cartCount}>{totalQuantity}</span>
        </NavLink>
      </div>
      <div className={` ${Styles.col_2}`}>
        <div className={` ${Styles.containerLogin}`}>
          {!isAuthenticated ? (
            <div className={Styles.div_not_auth}>
              <LogInButton />
            </div>
          ) : (
            <div className={Styles.div_auth}>
              <Profile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
