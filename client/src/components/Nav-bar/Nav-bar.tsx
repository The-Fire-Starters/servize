import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { store, add } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../reducers/rootReducer';
import Button from "@material-ui/core/Button";
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import ProviderSignup from '../Provider-signup/Provider-signup'
import Logout from '../Logout/Logout';
import "./Nav-bar.css";
const $ = require('jquery');

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("white");
    } else {
        $("nav").removeClass("white");
    }
});

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)
    let token: any;
    try {
        const serializedState = localStorage.getItem("access_token");
        console.log("token", serializedState);
        if (serializedState === null) {
            token = null;
        }
        token = JSON.parse(serializedState);
    }
    catch (e) {
        console.log(e);
    }

    function openLoginForm() {
        $("#login-form").addClass("showLoginForm");
        $('.login-overlay').css({ "display": "block" });
    }

    function openSignupForm() {
        $("#signup-form").addClass("showSignupForm");
        $('.signup-overlay').css({ "display": "block" });
    }

    // const selectLang = () => {

    // }

    const openClick = () => {
        document.getElementById("mySidenav").style.width = "200px"
    }
    const closeClick = (e: any) => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";

    }

    return (
        // <header id="nav-bar">
        <nav id="nav-bar">
            <div className="menu-icon" onClick={openClick}>
                <i className="fa fa-bars fa-2x"></i>
            </div>

            <div id="mySidenav" className="sidenav">
                <a href="/" className="sidenav-logo">Servize</a>
                <a href="/" className="closebtn" onClick={closeClick}>&times;</a>
                <a href="#">About</a>
                <a href="#">{t("how_it_works")}</a>
                <a href="#">Browse Jobs</a>
                <a href="#">Contact</a>
            </div>

            <div className="logo-container">
                <a href="/" className="logo">
                    {t("app_name")}
                </a>
            </div>

            <div className="navbar-items">
                <a href="#" className="pc-view">{t("how_it_works")}</a>
                <a href="#" className="pc-view">{t("Browse_Jobs")}</a>

                <div className="toggle-container">
                    <label htmlFor="dark-mode" style={{ "display": "none" }}>dark mode switch</label>
                    <input type="checkbox" id="dark-mode" />
                    <div className="slider round"></div>
                </div>

                {/* <li className="lang-dropdown">
                        <button onClick={selectLang} className="lang-dropbtn">Languages</button>
                        < div id="lang-Dropdown pc-view" className="lang-dropdown-content">
                            <span className="pc-view-lang" onClick={() => i18n.changeLanguage("en")}> English</span>
                            <span className="pc-view-lang" onClick={() => i18n.changeLanguage("ar")}>عربي</span>
                        </div>

                    </li>
                    {token === null ?
                        <span>
                            <li><Link to="/user/login">{t("log_in")}</Link></li>
                            <li onClick={openLoginForm}>{t("log_in")}</li>
                            <li><Link to="/user/signup">{t("join")}</Link></li>
                            <li onClick={openSignupForm}>{t("join")}</li>

                        </span>
                        :
                        <span>
                            <li><a href="profiles/user">Profile</a></li>
                            <li>
                                <Button onClick={() => { localStorage.clear(); window.location.href = "/"; }} id="logout">
                                    Logout
                                    </Button>
                            </li>
                        </span>} */}

            </div>

            {/* <div className="select">
                        <select
                            value={i18n.language}
                            onChange={(e) =>{
                                i18n.changeLanguage(e.target.value)
                                console.log(e.target.value)
                            }}
                        >
                            <option value="en">English</option>
                            <option value="ar">عربي</option>
                        </select>
                    </div> */}
        </nav>
        // </header>
    )
}

export default Navbar;