import React from 'react'

export default function Tables() {
    return (
        
              <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-md-flex">
                    <div>
                      <h4 className="card-title">
                        <span className="lstick d-inline-block align-middle"></span
                        >Projects of the Month
                      </h4>
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
                  <div className="table-responsive mt-3">
                    <table className="table v-middle no-wrap mb-0">
                      <thead>
                        <tr>
                          <th className="border-0" colspan="2">Assigned</th>
                          <th className="border-0">Name</th>
                          <th className="border-0">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{width: "50px"}}>
                            <span
                              >
                                </span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Sunil Joshi</h6>
                            <small className="text-muted">Web Designer</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr className="active">
                          <td>
                            <span
                              ></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Andrew</h6>
                            <small className="text-muted">Project Manager</small>
                          </td>
                          <td>Real Homes</td>
                          <td>
                            <span className="badge bg-info rounded-pill"
                              >Medium</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              >
                                </span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">
                              Bhavesh patel
                            </h6>
                            <small className="text-muted">Developer</small>
                          </td>
                          <td>MedicalPro Theme</td>
                          <td>
                            <span className="badge bg-primary rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              ></span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Nirav Joshi</h6>
                            <small className="text-muted">Frontend Eng</small>
                          </td>
                          <td>Elite Admin</td>
                          <td>
                            <span className="badge bg-danger rounded-pill"
                              >Low</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              >
                                </span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Micheal Doe</h6>
                            <small className="text-muted">Content Writer</small>
                          </td>
                          <td>Helping Hands</td>
                          <td>
                            <span className="badge bg-success rounded-pill"
                              >High</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span
                              >
                                </span>
                          </td>
                          <td>
                            <h6 className="mb-0 font-weight-medium">Johnathan</h6>
                            <small className="text-muted">Graphic</small>
                          </td>
                          <td>Digital Agency</td>
                          <td>
                            <span className="badge bg-info rounded-pill">High</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
     
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h4 className="card-title">
                      <span className="lstick d-inline-block align-middle"></span
                      >Activity
                    </h4>
                    <div className="dropdown ms-auto">
                      <a
                        href="#"
                        className="icon-options-vertical link"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="activity-box table-responsive">
                  <div className="card-body pt-0">
                   
                    <div className="activity-item mb-4 d-flex">
                      <div className="me-3">
                  
                  
                      </div>
                      <div className="mt-2">
                        <h5 className="mb-0 font-weight-medium">
                          Mark Freeman
                          <span className="text-muted fs-3 ms-2"
                            >| &nbsp; 6:30 PM</span
                          >
                        </h5>
                        <h6 className="text-muted">uploaded this file</h6>
                        <div className="row">
                          <div className="col-4">
                      
                      
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <div>
                              <h5 className="mb-0 font-weight-medium">
                                Homepage.zip
                              </h5>
                              <h6>54 MB</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="activity-item mb-4 d-flex">
                      <div className="me-3">
                    
                    
                      </div>
                      <div className="mt-2">
                        <h5 className="mb-1 font-weight-medium">
                          Emma Smith
                          <span className="text-muted fs-3 ms-2"
                            >| &nbsp; 6:30 PM</span
                          >
                        </h5>
                        <h6 className="text-muted">
                          joined projectname, and invited
                          <a href="javascript:void(0)"
                            >@maxcage, @maxcage, @maxcage,<br />
                            @maxcage, @maxcage,+3</a
                          >
                        </h6>
                        <span className="image-list mt-2">
                          <a
                            href="javascript:void(0)"
                            className="align-middle position-relative"
                          >
                         
                         
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="align-middle position-relative"
                          >
                       
                       
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="align-middle position-relative"
                          >
                            <span
                              className="
                                round
                                rounded-circle
                                text-white
                                d-inline-block
                                text-center
                                bg-warning
                              "
                              style={{height: "40px",width: "40px"}}
                              >C</span
                            >
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="align-middle position-relative"
                          >
                            <span
                              className="
                                round
                                rounded-circle
                                text-white
                                d-inline-block
                                text-center
                                bg-danger
                              "
                              style={{height: "40px", width: "40px"}}
                              >S</span
                            >
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="align-middle position-relative"
                            >+3</a
                          >
                        </span>
                      </div>
                    </div>
                   
                    <div className="activity-item mb-4 d-flex">
                      <div className="me-3">
                      
                      
                      </div>
                      <div className="mt-2">
                        <h5 className="mb-0 font-weight-medium">
                          David R. Jones
                          <span className="text-muted fs-3 ms-2"
                            >| &nbsp; 6:30 PM</span
                          >
                        </h5>
                        <h6 className="text-muted">uploaded this file</h6>
                        <span>
                          <a href="javascript:void(0)" className="me-2"
                            >
                              </a>
                          <a href="javascript:void(0)" className="me-2"
                            ></a>
                        </span>
                      </div>
                    </div>
                  
                    <div className="activity-item d-flex mb-2">
                      <div className="me-3">
                     
                      </div>
                      <div className="mt-2">
                        <h5 className="mb-1 font-weight-medium">
                          David R. Jones
                          <span className="text-muted fs-3 ms-2"
                            >| &nbsp; 6:30 PM</span
                          >
                        </h5>
                        <h6 className="text-muted">
                          Commented on<a href="javascript:void(0)"
                            >Test Project</a
                          >
                        </h6>
                        <p className="mb-0">
                          It has survived not only five centuries, but also the
                          leap into
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        
    )
}
