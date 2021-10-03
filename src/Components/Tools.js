import React from "react";

function Tools() {
  let array = [
  {
    "name":"Java",
    "link":"img/tools/java.png",
    "key":0
  },
  {
    "name":"DataBase",
    "link":"img/tools/database.png",
    "key":1
  },
  {
    "name":"Git - Version Control",
    "link":"img/tools/git.png",
    "key":2
  },
  {
    "name":"Laravel",
    "link":"img/tools/laravel.png",
    "key":3
  },
  {
    "name":"React",
    "link":"img/tools/react.png",
    "key":4
  },
  {
    "name":"Redux",
    "link":"img/tools/redux.png",
    "key":5
  },
  {
    "name":"Redis",
    "link":"img/tools/redis.png",
    "key":5
  }
  ]
	return (
  <div className="row">
    {array.map((e, i) => 
            <div className="col-lg-4 col-md-4 col-sm-6" key={i} >
              <div className="single-brand-item d-table"  style={{"background":"#dde0f5","borderRadius":"8px"}}>
                <div className="d-table-cell text-center">
                  <img className="brand-image" src={e.link} alt={e.name} style={{"width":"50px"}}/>
                </div>
              </div>
            </div>
              )}
  </div>
	)	
}

export default Tools;