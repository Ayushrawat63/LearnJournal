import Button from "./Button UI/Button";
import Content from "./ContentData/Content";

const WhatToLearn =()=>{
    return(<>
    <section id="what_learn">
       <div className="section3" >
        
        <h1 className="heading-section3">What will you learn ?</h1>
       {Content.Learn.map((elm,i)=>{
        return(
          <>
          <div className="small-container" key={i} style={(i==1)?{display:"flex",flexDirection:"row-reverse"}:{backgroundColor:"white"}}>
            <img src={elm.link} alt={`photo-${i}`}/>
             <div className="contaniner-content"  style={(i==1)?{marginLeft:"2%",paddingTop:"8%"}:{}}>
                <h1>{elm.title}</h1>
                <span>{elm.data}</span>
                <Button link="#" val={elm.btn}/>

             </div>
          </div>
          </>
        )
       })}
       <div className="growth">
          <h1 className="growth-title">4.8</h1>
          <div>
            <h1>Career Growth Rate</h1>
            <span>Our course offers practical skills and networking opportunities to boost your career in journalism.</span>
          </div>
       </div>
       </div>
    </section>
    </>)
};

export default WhatToLearn;