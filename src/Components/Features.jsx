import Content from "./ContentData/Content";

const Features=()=>{
    return(<>
      <section id="Feature" className="margin"> 
     <h1 className="Feature-heading"> Course Feature</h1>
      <div className="feature-data">
        {
          Content.Features.map((elm,i)=>{
            return(
              <>
              <div className="card" key={i}>
                <img src={elm.img} alt={`feature-${i}`} />
                <span>{elm.title}</span>
              </div>
              </>
            )
          })
        }
      </div>
    </section>
    </>)
};

export default  Features;