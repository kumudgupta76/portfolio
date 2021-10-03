import './App.css';

function App() {
  return (
    <div classNameName="App">
    <div className="jumbotron text-center" id="myPage" style={{"margin-bottom":0}}>
        <h1>Hi,I am Kumud Gupta</h1>
        <h3>Software Development Inten at Hudle</h3> 
    </div>

    <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a className="nav-link text-info text-center border border-info" href="#myPage">Home</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#about">About me</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#skills">Skills</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info " href="#projects">Projects</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#training">Training</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#certi">Certification And Achivements</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#edu">Education</a></li>&nbsp;
                <li><a className="nav-link text-info text-center border border-info" href="#contact">Contact me</a></li>&nbsp;
            </ul>
        </div>  
    </nav>
    {/*<div className="container">
        <br/>
        <br/>
        <div className="container" id="about">
            <div className="jumbotron">
                <h3 className="text-center">About Me</h3>
                <div className="container"><br/><br/></div>
                <div className="row">
                    <div className="col-md-3">
                        <img src="images/me.jpeg" alt="" style="width:200px;border-radius: 50%;"/>
                    </div>
                    <div className="col-md-6">

                        <h4>Kumud Gupta</h4>
                        <p>Summary</p>
                        <p><b>Oracle Certified Associate</b> and hands on the different concept of programming and algorithms with coding Experience in various online platforms like hackerrank, codechef, hackerearth etc. A versatile and analytic individual with a practical hands-on approach, aimed at achieving results to benefit the company in terms of high revenues and increased customer base. </p>
                        <a href="https://github.com/kumudgupta76" target="_blank" className="fa fa-github"></a>
                        <a href="https://linkedin.com/in/kumudgupta76/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://www.facebook.com/kumudgupta76" target="_blank" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/kumudgupta76" target="_blank" className="fa fa-twitter"></a>

                    </div>
                    <div className="col-md-3">
                        <br/>
                        <img src="images/logo.png" alt="" style="width:200px;"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" id="projects">
            <div className="jumbotron">
                <h3 className="text-center">Experience</h3>
                <div className="container"><br/><br/></div>
                <ul className="list-group">
                    <div className="d-flex justify-content-between align-items-center">
                        <span></span>
                        <span className="badge badge-success" style="font-size: large;">July 2019 - Present</span>
                    </div>
                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                        <span className="text-white" >Software Development Intern</span>
                        <span className="badge badge-light" style="font-size: medium;">at Hudle</span>
                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-primary">Hudle Backend</li>
                    <li className="list-group-item">
                        Create Several features in existing system using <b>Laravel</b>
                        <ul>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;"><b>REST API(s)</b> for enquiry module</p>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Generate EXCEL Feedback sheet of booking for review </p>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;"><b>Facility Linking : </b>This service allows Hudle to monitor and block the slots in dependent facilites if part of other dependent facility is booked and blocked</p>
                                <ul>
                                    <li>
                                        <p style="font-size: medium; margin-bottom: 0rem;">Created Algorithm for facility Linking </p>
                                    </li>
                                    <li>
                                        <p style="font-size: medium; margin-bottom: 0rem;">Change existing API(s) according to algorithm</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Other Several <b>Admin Panel</b> features like - Change Partner Password, Send user Invoice , Add Refund when while booking canceled </p>
                            </li>
                        </ul>

                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-primary">Hudle WebApp</li>
                    <li className="list-group-item">
                        Worked on API Integration with (<b>SSR</b> server side rendering using Next.js)
                        <ul>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Consume REST APIs for Venues, Events, Payments, My Booking modules </p>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Add Social Login (FaceBook and Google) for authentication </p>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Payment Module with <b>JusPay SDK </b></p>
                            </li>
                        </ul>

                    </li>
                    <li className="list-group-item list-group-item-action list-group-item-primary">Hudle Partner WebApp</li>
                    <li className="list-group-item">
                        Create Several features in existing system using <b>Laravel</b>
                        <ul>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Consume REST APIs for Venues module </p>
                            </li>
                            <li>
                                <p style="font-size: medium; margin-bottom: 0rem;">Worked on <b>PWA</b> for partner webapp</p>
                            </li>
                        </ul>

                    </li>




                </ul>
            </div>
        </div>

        <div className="container" id="skills">
            <div className="jumbotron">
                <h3 className="text-center">Skills</h3>
                <div className="container"><br/><br/></div>
                <div className="list-group">
                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                        <span className="text-white" >Technical Skills</span>
                    </li>
                    <li className="list-group-item ">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col ">Java 8</div>
                            <div className="col ">React.js</div>
                            <div className="col ">Redux</div>
                            <div className="col ">SQL</div>
                            <div className="col ">Node.js</div>
                            <div className="col ">PHP (Laravel)</div>
                        </div>
                    </li>

                </div>
                <div className="container"><br/><br/></div>
                <div className="list-group">
                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                        <span className="text-white" >Professional Skills</span>
                    </li>
                    <li className="list-group-item ">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-3 col-sm-12">Conflict Resolutions</div>
                            <div className="col-md-3 col-sm-12">Self Motivation</div>
                            <div className="col-md-3 col-sm-12 ">Decision Making</div>
                            <div className="col-md-3 col-sm-12 ">Time Management</div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
        <div className="container" id="projects">
            <div className="jumbotron">
                <h3 className="text-center">Projects</h3>
                <div className="container"><br/><br/></div>
                <ul className="list-group">
                    <div className="d-flex justify-content-between align-items-center">
                        <span></span>
                        <span className="badge badge-success" style="font-size: large;">June - July 2018</span>
                    </div>
                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                        <span className="text-white" ><b>ReviewIt</b></span>
                        <span className="badge badge-light" style="font-size: medium;">A Web Application</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>ReviewIt is all about rating and reviewing the products which are not available online. So ReviewIt generates QR codes for these products. It also helps customers to get all the details of the product on just a scan and even to the shopkeeper to gain the trust of the customer.</p>             
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>Technology that we used are:</p></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p>BackEnd: Node.js, Koa.js</p>
                            <p>Database: MySQL, Redis</p></li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>FrontEnd: jQuery , JavaScript</p>
                                <p>UI/UX: BootStrap4 , CSS</p></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <p>Role - Project Team Member</p>Responsibility - Responsibile for Database and FrontEnd<p></p></li>
                                </ul>
                                <div className="container"><br/><br/></div>
                                <ul className="list-group">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span></span>
                                        <span className="badge badge-success" style="font-size: large;">June - July 2019</span>
                                    </div>
                                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                        <span className="text-white" ><b>FavClick</b></span>
                                        <span className="badge badge-light" style="font-size: medium;">A Chrome Extension</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <p>FavClick is a Recommendation and Personalization Tool which is used to improve user's browsing experience by providing the links of the pages that user would like to visit. So Favclick gives the link of different pages in a bar at the bottom of the screen and also analysis the overall browsing which helps customers to get all the details and category of the data that he was looking.</p></li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <p>Technology that we used are:</p></li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <p>BackEnd: Node.js</p>
                                                <p>FrontEnd: HTML , JavaScript</p>
                                                <p>UI/UX: BootStrap4 , CSS</p></li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <p>Role - Project Team Member</p>Responsibility - Responsibile for BackEnd and file handling<p></p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="container" id="training">
                                            <div className="jumbotron">
                                                <h3 className="text-center">Training</h3>
                                                <div className="container"><br/><br/></div>
                                                <ul className="list-group">
                                                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                        <span className="text-white" >Summer Training</span>
                                                        <span className="badge badge-light" style="font-size: medium;">June - July 2018</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <p><b>Web Development</b></p><p>- at GLA University , Mathura</p>

                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <p>Successfully finished training in 2-month course,
                                                        Work on live Project with team and Gained extensive developing skills .</p>
                                                    </li>
                                                </ul>
                                            </div>  
                                        </div> 


                                            <div className="container" id="certi">
                                                <div className="jumbotron">
                                                    <h3 className="text-center">Certification And Achivements </h3>
                                                    <div className="container"><br/><br/></div>
                                                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                        <span className="text-white" >Certification</span>
                                                    </li>
                                                    <div className="list-group">
                                                        <a href="./images/mg7.jpg" target="_blank" className="list-group-item list-group-item-action list-group-item-primary">Oracle Certified Associate Java SE 8 Programmer , 1Z0-808</a>
                                                        <a href="./images/mg8.jpg" target="_blank" className="list-group-item list-group-item-action list-group-item-secondary">Oracle Database SQL Certified Associate , 1Z0-071</a>
                                                        <a href="./images/mg1.png" target="_blank" className="list-group-item list-group-item-action list-group-item-primary">Introduction to Amazon Elastic Compute Cloud (EC2)</a>
                                                        <a href="./images/snack.jpg" target="_blank" className="list-group-item list-group-item-action list-group-item-secondary">SnackDown - 2019</a>
                                                        <a href="./images/mg6.jpg" className="list-group-item list-group-item-action list-group-item-primary " target="_blank">Rank 3 in SQL</a>
                                                        <a href="./images/mg2.jpg" className="list-group-item list-group-item-action list-group-item-secondary" target="_blank">Java Tutorial Course from SOLOLEARN</a>
                                                        <a href="./images/mg1.jpg" className="list-group-item list-group-item-action list-group-item-primary" target="_blank">Silver Medal in HourRank at hackerrank</a>
                                                    </div>
                                                    <div className="container"><br/><br/></div>
                                                    <div className="container"><br/><br/></div>
                                                    <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                        <span className="text-white " >Achivements</span>
                                                    </li>
                                                    <div className="container bg-light"><br/><br/>
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="list-group" id="list-tab" role="tablist">
                                                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">1Z0-808</a>
                                                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">1Z0-071</a>
                                                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">ReviewIt</a>

                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="tab-content" id="nav-tabContent">
                                                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                                                        <b>Oracle Certified Associate JAVA SE 8 Progammer,1Z0-808</b><br/><br/>
                                                                        <img src="images/moca808.jpg"  width="25%" ></img>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                                                        <b>Oracle Database SQL Certified Associate,1Z0-071</b><br/><br/>
                                                                        <img src="images/moca071.jpg" width="25%"></img>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                                                        <b>Web Based Project in Node.js ,Redis ,MySQL ,jQuery and Bootstrap</b><br/><br/>
                                                                        <p>link to website - <a href="http://reviewit.projectorclub.in" target="_blank">ReviewIt</a></p>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container"><br/><br/></div>
                                                    </div>
                                                </div>  
                                            </div> 


                                            <div className="container" id="edu">
                                                <div className="jumbotron">
                                                    <h3 className="text-center">My Education</h3>
                                                    <div className="container"><br/><br/></div>
                                                    <ul className="list-group">
                                                        <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                            <span className="text-white" >Graduate</span>
                                                            <span className="badge badge-light">2016 - 2020</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <p>B.Tech - GLA University , Mathura</p>
                                                            <p>CGPA of Current semester - <b>8.25</b></p>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                            <span className="text-white" >Intermediate</span>
                                                            <span className="badge badge-light">2014 - 2016</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <p>Shriji Baba Saraswati Vidya Mandir , Mathura</p>
                                                            <p>Percentage - <b>85.6 %</b></p>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between bg-primary align-items-center">
                                                            <span className="text-white" >High School</span>
                                                            <span className="badge badge-light">2012 - 2014</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <p>Shriji Baba Saraswati Vidya Mandir , Mathura</p>
                                                            <p>Percentage - <b>87.4 %</b></p>
                                                        </li>
                                                    </ul>
                                                </div>  
                                            </div> 
  
                                            <div className="container " id="contact">
                                                <div className="jumbotron">
                                                    <h3 className="text-center">Contact Me</h3>
                                                    <div className="container"><br/><br/></div>
                                                    <div className="row">
                                                        <div className="col-md-4 text-center">
                                                            <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="kumudgupta76"><a className="LI-simple-link" href='https://in.linkedin.com/in/kumudgupta76?trk=profile-badge'>Kumud Gupta</a></div>
                                                        </div>
                                                        <div className="col-md-8 bg-info">
                                                            <p className="text-white" style="margin-bottom: 0rem;"><span className="fa fa-map-marker"></span>&nbsp; Location : Chuathaee Mohalla ,Lohvan Mathura U.P.</p>
                                                            <p className="text-white" style="margin-bottom: 0rem;"><span className="fa fa-phone"></span>&nbsp; &nbsp;Phone: +91 9536248419</p>
                                                            <p className="text-white" style="margin-bottom: 0rem;"><span className="fa fa-envelope"></span>&nbsp; &nbsp; &nbsp;Email: kumudgupta76@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </div>  

                                            </div>
                                        </div>*/}
    <footer className="text-center bg-dark">

        <p className="text-white">All rights reserved © 2020. </p>
        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
            <span className="fa fa-chevron-up"></span>
        </a>
    </footer> 


                     
    </div>
    );
}

export default App;
