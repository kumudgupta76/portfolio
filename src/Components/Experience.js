import React from "react";

function Experience() {
  let array = [
  {
    "name":"Arcesium",
    "link":"img/companies/arcesium.png",
    "position":"Software Engineer",
    "key":0
  },
  {
    "name":"Shiprocket",
    "link":"img/companies/shiprocket.png",
    "position":"Software Engineer",
    "key":1
  },
  {
    "name":"Hudle",
    "link":"img/companies/hudle.png",
    "position":"Software Engineer Intern",
    "key":2
  }
  ]
	return (
  <div className="row">
    {array.map((e, i) => 
            <div className="testi_item" style={{"background":"#dde0f5","borderRadius":"8px"}}>
                <div className="row">
                  <div className="col-lg-4">
                    <img src={e.link} alt={e.name} style={{"width":"150px"}}/>
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <div style={{"display":"flex", "justifyContent": "flex-end"}}>
                        <span>{e.name}</span>
                        <span>{e.position}</span>
                      </div>
                      <h4>{e.name}</h4>
                  <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              )}
  </div>
	)	
}

export default Experience;