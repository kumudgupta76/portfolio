import React from "react";

function Footer() {
	return (
  <footer className="footer_area">
    <div className="container">
      <div className="row justify-content-center">
      	<div className="col-lg-4 col-sm-12">
      		<div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="kumudgupta76"><a className="LI-simple-link" href='https://in.linkedin.com/in/kumudgupta76?trk=profile-badge'></a></div>
      	</div>
        <div className="col-lg-8 col-sm-12"  style={{"background":"#dde0f5","borderRadius":"8px"}}>
          <div className="footer_top flex-column">
            <div className="footer_logo">
              {/*<a href="#">
                <img src="img/logo.png" alt=""/>
              </a>*/}
              
              <h4>Follow Me</h4>
            </div>
            <div className="footer_social">
              <a target="_blank" href="https://github.com/kumudgupta76" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
              <a target="_blank" href="https://twitter.com/kumudgupta76" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
              <a target="_blank" href="https://www.facebook.com/kumudgupta76" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
              <a target="_blank" href="https://linkedin.com/in/kumudgupta76/" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="mailto:kumudgupta76@gmail.com"><i className="fa fa-envelope"></i></a>
            </div>
            <div className="row footer_bottom justify-content-center">
        <p className="col-lg-8 col-sm-12 footer-text">
          {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</p>
      </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
	)	
}

export default Footer;