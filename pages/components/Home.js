import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";
import Tables from "./Tables";
export default function Homeo() {
    return (
        <div>
             <div classNameName="preloader">
        <svg
          className="tea lds-ripple"
          width="37"
          height="48"
          viewbox="0 0 37 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
            stroke="#2962FF"
            strokeWidth="2"
          ></path>
          <path
            d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
            stroke="#2962FF"
            strokeWidth="2"
          ></path>
          <path
            id="teabag"
            fill="#2962FF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"
          ></path>
          <path
            id="steamL"
            d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#2962FF"
          ></path>
          <path
            id="steamR"
            d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13"
            stroke="#2962FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      <div id="main-wrapper">
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header">
              <a
                className="nav-toggler waves-effect waves-light d-block d-md-none"
                href="javascript:void(0)"
              >
                <i className="ri-close-line fs-6 ri-menu-2-line"></i>
              </a>

              <a
                className="navbar-brand"
                href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/adminpro-bootstrap/package/html/main/index.html"
              >
      

               
              </a>

       
            </div>

            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="
                    nav-link
                    sidebartoggler
                    d-none d-md-block
                    waves-effect waves-dark
                  "
                    href="javascript:void(0)"
                  >
                    <i data-feather="menu" className="feather-sm"></i>
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav justify-content-end">
                <li className="nav-item d-none d-md-block search-box">
                  <a
                    className="nav-link d-none d-md-block waves-effect waves-dark"
                    href="javascript:void(0)"
                  >
                    <i data-feather="search"></i>
                  </a>
                  <form className="app-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search & enter"
                    />
                    <a className="srh-btn">
                      <i data-feather="x" className="feather-sm"></i>
                    </a>
                  </form>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-feather="bell"></i>
                    <div className="notify">
                      <span className="heartbit"></span>{" "}
                      <span className="point"></span>
                    </div>
                  </a>
                  <div
                    className="
                    dropdown-menu dropdown-menu-end
                    mailbox
                    dropdown-menu-animate-up
                  "
                  >
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">
                            Notifications
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="message-center notifications position-relative"
                          style={{ height: "230px" }}
                        >
                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="btn btn-light-danger text-danger btn-circle">
                              <i
                                data-feather="link"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Luanch Admin
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >
                                Just see the my new admin!
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:30 AM
                              </span>
                            </div>
                          </a>

                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span
                              className="
                              btn btn-light-success
                              text-success
                              btn-circle
                            "
                            >
                              <i
                                data-feather="calendar"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Event today
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >
                                Just a reminder that you have event
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:10 AM
                              </span>
                            </div>
                          </a>

                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="btn btn-light-info text-info btn-circle">
                              <i
                                data-feather="settings"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Settings
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >
                                You can customize this template as you want
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:08 AM
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span
                              className="
                              btn btn-light-primary
                              text-primary
                              btn-circle
                            "
                            >
                              <i
                                data-feather="users"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >
                                Just see the my admin!
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:02 AM
                              </span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link border-top text-center text-dark pt-3"
                          href="javascript:void(0);"
                        >
                          <strong>Check all notifications</strong>
                          <i
                            data-feather="chevron-right"
                            className="feather-sm"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    id="2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-feather="inbox"></i>
                    <div className="notify">
                      <span className="heartbit"></span>{" "}
                      <span className="point"></span>
                    </div>
                  </a>
                  <div
                    className="
                    dropdown-menu
                    mailbox
                    dropdown-menu-end dropdown-menu-animate-up
                  "
                    aria-labelledby="2"
                  >
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">
                            You have 4 new messages
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="message-center message-body position-relative"
                          style={{ height: " 230px" }}
                        >
                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="user-img position-relative d-inline-block">
                        
                              <span className="profile-status rounded-circle online"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >
                                Just see the my admin!
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:30 AM
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="user-img position-relative d-inline-block">
                          
                              <span className="profile-status rounded-circle busy"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Sonu Nigam
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >
                               
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:10 AM
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="user-img position-relative d-inline-block">
                      
                              <span className="profile-status rounded-circle away"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Arijit Sinh
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >
                                I am a singer!
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:08 AM
                              </span>
                            </div>
                          </a>

                          <a
                            href="javascript:void(0)"
                            className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                          >
                            <span className="user-img position-relative d-inline-block">
                       
                              <span className="profile-status rounded-circle offline"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >
                                Just see the my admin!
                              </span>
                              <span
                                className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >
                                9:02 AM
                              </span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link border-top text-center text-dark pt-3"
                          href="javascript:void(0);"
                        >
                          <b>See all e-Mails</b>
                          <i
                            data-feather="chevron-right"
                            className="feather-sm"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-feather="grid"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-animate-up">
                    <div className="mega-dropdown-menu row">
                      <div className="col-lg-3 col-xlg-2 mb-4">
                        <h4 className="mb-3">CAROUSEL</h4>

                        <div
                          id="carouselExampleControls"
                          className="carousel slide carousel-dark"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                           
                            </div>
                            <div className="carousel-item">
                         

                            </div>
                            <div className="carousel-item">
                        
                            </div>
                          </div>
                          <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <h4 className="mb-3">ACCORDION</h4>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                Accordion Item #1
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                Accordion Item #2
                              </button>
                            </h2>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                Accordion Item #3
                              </button>
                            </h2>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <h4 className="mb-3">CONTACT US</h4>
                        <form>
                          <div className="mb-3 form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputname1"
                              placeholder="Enter Name"
                            />
                            <label>Enter Name</label>
                          </div>
                          <div className="mb-3 form-floating">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email"
                            />
                            <label>Enter Email address</label>
                          </div>
                          <div className="mb-3 form-floating">
                            <textarea
                              className="form-control"
                              id="exampleTextarea"
                              rows="3"
                              placeholder="Message"
                            ></textarea>
                            <label>Enter Message</label>
                          </div>
                          <button
                            type="submit"
                            className="btn px-4 rounded-pill btn-info"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="col-lg-3 col-xlg-4 mb-4">
                        <h4 className="mb-3">List style</h4>
                        <ul className="list-style-none">
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              You can give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Another Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Forth link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Another fifth link
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="
                    nav-link
                    dropdown-toggle
                    text-muted
                    waves-effect waves-dark
                  "
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-us"></i>
                  </a>
                  <div
                    className="
                    dropdown-menu dropdown-menu-end dropdown-menu-animate-up
                  "
                  >
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-in"></i> India
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-fr"></i> French
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-cn"></i> China
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-de"></i> Dutch
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
              
                  </a>
                  <div
                    className="
                    dropdown-menu dropdown-menu-end
                    user-dd
                    animated
                    flipInY
                  "
                  >
                    <div
                      className="
                      d-flex
                      no-block
                      align-items-center
                      p-3
                      bg-primary
                      text-white
                      mb-2
                    "
                    >
                      <div className="">
                   
                      </div>
                      <div className="ms-2">
                        <h4 className="mb-0 text-white">Steave Jobs</h4>
                        <p className="mb-0">varun@gmail.com</p>
                      </div>
                    </div>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="user"
                        className="feather-sm text-info me-1 ms-1"
                      ></i>
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="credit-card"
                        className="feather-sm text-primary me-1 ms-1"
                      ></i>
                      My Balance
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="mail"
                        className="feather-sm text-success me-1 ms-1"
                      ></i>
                      Inbox
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="settings"
                        className="feather-sm text-warning me-1 ms-1"
                      ></i>
                      Account Setting
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="log-out"
                        className="feather-sm text-danger me-1 ms-1"
                      ></i>
                      Logout
                    </a>
                    <div className="dropdown-divider"></div>
                    <div className="pl-4 p-2">
                      <a
                        href="#"
                        className="btn d-block w-100 btn-primary rounded-pill"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <Nav />

        <div className="page-wrapper">
          <div className="container-fluid">
            <div className="row page-titles">
              <div className="col-md-5 col-12 align-self-center">
                <h3 className="text-themecolor mb-0">Dashboard 3</h3>
              </div>
              <div
                className="
                col-md-7 col-12
                align-self-center
                d-none d-md-flex
                justify-content-end
              "
              >
                <ol className="breadcrumb mb-0 p-0 bg-transparent">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard 3</li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card bg-info">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="me-3 align-self-center">
                   
                      </div>
                      <div className="align-self-center">
                        <h6 className="text-white mt-2 mb-0">Total Income</h6>
                        <h2 className="mt-0 text-white">953,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card bg-success">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="me-3 align-self-center">
                     
                      </div>
                      <div className="align-self-center">
                        <h6 className="text-white mt-2 mb-0">Total Expense</h6>
                        <h2 className="mt-0 text-white">236,000</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card bg-primary">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="me-3 align-self-center">
                     
                     
                      </div>
                      <div className="align-self-center">
                        <h6 className="text-white mt-2 mb-0">Total Assets</h6>
                        <h2 className="mt-0 text-white">987,563</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card bg-danger">
                  <div className="card-body">
                    <div className="d-flex no-block">
                      <div className="me-3 align-self-center">
                     
                      </div>
                      <div className="align-self-center">
                        <h6 className="text-white mt-2 mb-0">Total Staff</h6>
                        <h2 className="mt-0 text-white">987,563</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-md-flex">
                      <div>
                        <h3 className="card-title mb-1">
                          <span className="lstick d-inline-block align-middle"></span>
                          Sales Overview
                        </h3>
                      </div>
                      <div className="ms-auto">
                        <select className="form-select">
                          <option selected="">January 2021</option>
                          <option value="1">February 2021</option>
                          <option value="2">March 2021</option>
                          <option value="3">April 2021</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-info stats-bar">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="p-3 active">
                          <h6 className="text-white">Total Sales</h6>
                          <h3 className="text-white mb-0">$10,345</h3>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="p-3">
                          <h6 className="text-white">This Month</h6>
                          <h3 className="text-white mb-0">$7,589</h3>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="p-3">
                          <h6 className="text-white">This Week</h6>
                          <h3 className="text-white mb-0">$1,476</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body mt-4">
                    <div
                      id="Sales-Overview"
                      className="position-relative"
                      style={{ height: "340px" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="card w-100">
               
                  <div className="card-body">
                    <h3 className="font-weight-normal">
                      Business development of rules 2021
                    </h3>
                    <span className="badge bg-info rounded-pill">
                      Technology
                    </span>
                    <p className="mb-0 mt-3">
                      Titudin venenatis ipsum aciat. Vestibu ullamer quam.
                      nenatis ipsum ac feugiat. Ibulum ullamcorper.aciat.
                      Vestibu ullamer quam. nenatis
                    </p>
                    <div className="d-flex mt-2">
                      <button className="btn ps-0 btn-link">Read more</button>
                      <div className="ms-auto align-self-center">
                        <a href="javascript:void(0)" className="link me-2">
                          <i className="ri-heart-fill"></i>
                        </a>
                        <a href="javascript:void(0)" className="link me-2">
                          <i className="ri-share-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="lstick d-inline-block align-middle"></span>
                      Visit Separation
                    </h4>
                    <div
                      id="Visit-Separation"
                      style={{ height: "270px", width: "100%" }}
                      className="d-flex justify-content-center align-items-center"
                    ></div>
                    <table className="table v-middle fs-3 mb-0 mt-4">
                      <tr>
                        <td>Mobile</td>
                        <td className="text-end font-weight-medium">38.5%</td>
                      </tr>
                      <tr>
                        <td>Tablet</td>
                        <td className="text-end font-weight-medium">30.8%</td>
                      </tr>
                      <tr>
                        <td>Desktop</td>
                        <td className="text-end font-weight-medium">7.7%</td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td className="text-end font-weight-medium">23.1%</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="stats">
                        <h1 className="text-white">9062+</h1>
                        <h6 className="text-white">Subscribe</h6>
                        <button
                          className="
                          btn btn-rounded btn-outline btn-light
                          m-t-10
                          fs-3
                        "
                        >
                          Check list
                        </button>
                      </div>
                      <div className="stats-icon text-end ms-auto">
                        <i className="ri-mail-line display-5 op-3 text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="stats">
                        <h1 className="text-white">6509+</h1>
                        <h6 className="text-white">Facebook Likes</h6>
                        <button
                          className="
                          btn btn-rounded btn-outline btn-light
                          m-t-10
                          fs-3
                        "
                        >
                          Check list
                        </button>
                      </div>
                      <div className="stats-icon text-end ms-auto">
                        <i className="ri-facebook-fill display-5 op-3 text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-info text-white">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="stats">
                        <h1 className="text-white">3257+</h1>
                        <h6 className="text-white">Twitter Followers</h6>
                        <button
                          className="
                          btn btn-rounded btn-outline btn-light
                          m-t-10
                          fs-3
                        "
                        >
                          Check list
                        </button>
                      </div>
                      <div className="stats-icon text-end ms-auto">
                        <i className="ri-twitter-fill display-5 op-3 text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="d-md-flex">
                      <h4 className="card-title">
                        <span className="lstick d-inline-block align-middle"></span>
                        Website Visit
                      </h4>
                      <ul className="list-inline mb-0 ms-auto">
                        <li className="list-inline-item">
                          <h6 className="text-success">
                            <i
                              className="
                              ri-checkbox-blank-circle-fill
                              align-middle
                              fs-4
                              font-10
                              me-2
                            "
                            ></i>
                            Site A view
                          </h6>
                        </li>
                        <li className="list-inline-item">
                          <h6 className="text-info">
                            <i
                              className="
                              ri-checkbox-blank-circle-fill
                              align-middle
                              fs-4
                              font-10
                              me-2
                            "
                            ></i>
                            Site B view
                          </h6>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center mt-3">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className="
                          btn btn-sm btn-outline-secondary
                          shadow-sm
                          fs-2
                          me-0
                        "
                        >
                          PAGEVIEWS
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary shadow-sm fs-2"
                        >
                          REFERRALS
                        </button>
                      </div>
                    </div>
                    <div
                      id="Website-Visit"
                      className="position-relative mt-3"
                      style={{ height: "350px", width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <Tables />
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="lstick d-inline-block align-middle"></span>
                      Recent Comments
                    </h4>
                  </div>
                  <div
                    className="comment-widgets scrollable mb-2 common-widget"
                    style={{ height: "450px" }}
                  >
                    <div className="d-flex flex-row comment-row border-bottom p-3">
                      <div className="p-2">
                        <span className="">
                    
                        </span>
                      </div>
                      <div className="comment-text w-100 p-3">
                        <h5 className="font-weight-medium">James Anderson</h5>
                        <p className="mb-1 fs-3 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type etting industry
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span
                            className="
                            badge
                            bg-light-info
                            text-info
                            rounded-pill
                            font-weight-medium
                            fs-1
                            py-1
                          "
                          >
                            Pending
                          </span>
                          <span className="action-icons">
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-edit-box-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-check-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-heart-line fs-6"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto fw-normal fs-2">
                            April 14, 2021
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row border-bottom active p-3">
                      <div className="p-2">
                        <span>
                   
                        </span>
                      </div>
                      <div className="comment-text active w-100 p-3">
                        <h5 className="font-weight-medium">Michael Jorden</h5>
                        <p className="mb-1 fs-3 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span
                            className="
                            badge
                            bg-light-success
                            text-success
                            rounded-pill
                            font-weight-medium
                            fs-1
                            py-1
                          "
                          >
                            Approved
                          </span>
                          <span className="action-icons active">
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-edit-box-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-close-circle-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-heart-line fs-6 text-danger"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto fw-normal fs-2">
                            April 14, 2021
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row border-bottom p-3">
                      <div className="p-2">
                        <span>
                        
                        </span>
                      </div>
                      <div className="comment-text w-100 p-3">
                        <h5 className="font-weight-medium">
                          Johnathan Doeting
                        </h5>
                        <p className="mb-1 fs-3 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span
                            className="
                            badge
                            bg-light-danger
                            text-danger
                            rounded-pill
                            font-weight-medium
                            fs-1
                            py-1
                          "
                          >
                            Rejected
                          </span>
                          <span className="action-icons">
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-edit-box-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-check-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-heart-line fs-6"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto fw-normal fs-2">
                            April 14, 2021
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row p-3">
                      <div className="p-2">
                        <span>
                     
                        </span>
                      </div>
                      <div className="comment-text w-100 p-3">
                        <h5 className="font-weight-medium">James Anderson</h5>
                        <p className="mb-1 fs-3 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry.
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span
                            className="
                            badge
                            bg-light-info
                            text-info
                            rounded-pill
                            font-weight-medium
                            fs-1
                            py-1
                          "
                          >
                            Pending
                          </span>
                          <span className="action-icons">
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-edit-box-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-check-line fs-6"></i>
                            </a>
                            <a href="javascript:void(0)" className="ps-3">
                              <i className="ri-heart-line fs-6"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto fw-normal fs-2">
                            April 14, 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <span className="lstick d-inline-block align-middle"></span>
                      Recent Chats
                    </h4>
                    <div
                      className="chat-box scrollable"
                      style={{ height: "357px" }}
                    >
                      <ul className="chat-list m-0 p-0">
                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                         
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h5 className="text-muted fs-3 font-weight-medium">
                              James Anderson
                            </h5>
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-info
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              Lorem Ipsum is simply dummy text of the printing &
                              type setting industry.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:56 am
                          </div>
                        </li>
                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                        
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h5 className="text-muted fs-3 font-weight-medium">
                              Bianca Doe
                            </h5>
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-success
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              It’s Great opportunity to work.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:57 am
                          </div>
                        </li>

                        <li className="odd mt-4">
                          <div className="chat-content ps-3 d-inline-block text-end">
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              I would love to join the team.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:58 am
                          </div>
                        </li>

                        <li className="odd mt-4">
                          <div className="chat-content ps-3 d-inline-block text-end">
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              Whats budget of the new project.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:59 am
                          </div>
                        </li>

                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                        
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h5 className="text-muted fs-3 font-weight-medium">
                              Angelina Rhodes
                            </h5>
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-primary
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              Well we have good budget for the project
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            11:00 am
                          </div>
                        </li>

                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                       
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h5 className="text-muted fs-3 font-weight-medium">
                              James Anderson
                            </h5>
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-info
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              Lorem Ipsum is simply dummy text of the printing &
                              type setting industry.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:56 am
                          </div>
                        </li>

                        <li className="odd mt-4">
                          <div className="chat-content ps-3 d-inline-block text-end">
                            <div
                              className="
                              message
                              font-weight-medium
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              text-dark
                            "
                            >
                              Whats budget of the new project.
                            </div>
                          </div>
                          <div
                            className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                          >
                            10:59 am
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body border-top">
                    <div className="row">
                      <div className="col-8">
                        <textarea
                          placeholder="Type your message here"
                          className="form-control border-0"
                        ></textarea>
                      </div>
                      <div className="col-4 text-end">
                        <button
                          type="button"
                          className="btn btn-info btn-circle btn-lg"
                        >
                          <i data-feather="send"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer text-center">
            All Rights Reserved by Adminpro admin.
          </footer>
        </div>
      </div>

      <aside className="customizer">
        <a href="javascript:void(0)" className="service-panel-toggle">
          <i data-feather="settings" className="feather-sm fa fa-spin"></i>
        </a>
        <div className="customizer-body">
          <ul className="nav customizer-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <i className="ri-tools-fill fs-6"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                href="#chat"
                role="tab"
                aria-controls="chat"
                aria-selected="false"
              >
                <i className="ri-message-3-line fs-6"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <i className="ri-timer-line fs-6"></i>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Layout Settings
                </h5>
                <div className="form-check mt-3">
                  <input
                    type="checkbox"
                    name="theme-view"
                    className="form-check-input"
                    id="theme-view"
                  />
                  <label className="form-check-label" htmlFor="theme-view">
                    <span>Dark Theme</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="sidebartoggler form-check-input"
                    name="collapssidebar"
                    id="collapssidebar"
                  />
                  <label className="form-check-label" htmlFor="collapssidebar">
                    <span>Collapse Sidebar</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="sidebar-position"
                    className="form-check-input"
                    id="sidebar-position"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="sidebar-position"
                  >
                    <span>Fixed Sidebar</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="header-position"
                    className="form-check-input"
                    id="header-position"
                  />
                  <label className="form-check-label" htmlFor="header-position">
                    <span>Fixed Header</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="boxed-layout"
                    className="form-check-input"
                    id="boxed-layout"
                  />
                  <label className="form-check-label" htmlFor="boxed-layout">
                    <span>Boxed Layout</span>
                  </label>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Logo Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Navbar Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Sidebar Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      href="javascript:void(0)"
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="chat"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <ul className="mailbox list-style-none mt-3">
                <li>
                  <div className="message-center chat-scroll position-relative">
                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_1"
                      data-user-id="1"
                    >
                      <span className="user-img position-relative d-inline-block">
                       
                        <span className="profile-status rounded-circle online"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Pavan kumar</h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:30 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_2"
                      data-user-id="2"
                    >
                      <span className="user-img position-relative d-inline-block">
                   
                        <span className="profile-status rounded-circle busy"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Sonu Nigam</h5>
                        <span className="fs-2text-nowrap d-block text-muted text-truncate"></span>

                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:10 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_3"
                      data-user-id="3"
                    >
                      <span className="user-img position-relative d-inline-block">
                     
                        <span className="profile-status rounded-circle away"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Arijit Sinh</h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          I am a singer!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:08 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_4"
                      data-user-id="4"
                    >
                      <span className="user-img position-relative d-inline-block">
                 
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Nirav Joshi</h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_5"
                      data-user-id="5"
                    >
                      <span className="user-img position-relative d-inline-block">
                    
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Sunil Joshi</h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_6"
                      data-user-id="6"
                    >
                      <span className="user-img position-relative d-inline-block">
                       
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">
                          Akshay Kumar
                        </h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_7"
                      data-user-id="7"
                    >
                      <span className="user-img position-relative d-inline-block">
                     
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">Pavan kumar</h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      href="javascript:void(0)"
                      className="
                      message-item
                      d-flex
                      align-items-center
                      border-bottom
                      px-3
                      py-2
                    "
                      id="chat_user_8"
                      data-user-id="8"
                    >
                      <span className="user-img position-relative d-inline-block">
                      
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h5 className="message-title mb-0 mt-1">
                          Varun Dhavan
                        </h5>
                        <span
                          className="
                          fs-2
                          text-nowrap
                          d-block
                          text-muted text-truncate
                        "
                        >
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="tab-pane fade p-3"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h6 className="mt-3 mb-3">Activity Timeline</h6>
              <div className="steamline">
                <div className="sl-item">
                  <div className="sl-left bg-success">
                    <i
                      data-feather="user"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Meeting today <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-info">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Send documents to Clark
                    </div>
                    <div className="desc">Lorem Ipsum is simply</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                  
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Go to the Doctor{" "}
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
               
                  </div>
                  <div className="sl-right">
                    <div>
                      <a href="javascript:void(0)">Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-primary">
                    <i
                      data-feather="user"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Meeting today <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-info">
                    <i className="fas fa-image"></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Send documents to Clark
                    </div>
                    <div className="desc">Lorem Ipsum is simply</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
              
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Go to the Doctor{" "}
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                 
                  </div>
                  <div className="sl-right">
                    <div>
                      <a href="javascript:void(0)">Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="chat-windows"></div>
   
        </div>
    )
}
