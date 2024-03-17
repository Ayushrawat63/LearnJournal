import Content from "./ContentData/Content";
const Footer=()=>{
    return(
        <>
          
    <footer id="footer">
      <div className="footer-left">
        <div className="footer-heading">
        <h1>Learn</h1>
        <span>Learn form the Best</span>
        </div>
        
        
        <div className="footer-links">
          {
            Content.Link.map((elem,i)=>{
              return(
                <>
                <div className="link-card" key={i}>
                <img src={elem} alt="" />
                </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="footer-right">
        <div className="support">
          <h6>Need assistance?</h6>
          <h5>Our team is here to support you 24/7</h5>
        </div>
        <div className="contact">
          <span>(+123)000 111 222 333</span>
          <span>newsLearn@gmail.com</span>
        </div>
      </div>
    </footer>
        </>
    )
};

export default Footer;