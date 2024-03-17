
import Button from "./Button UI/Button"

const Home =()=>{
    return(
        <>
        <section id="Home" className="margin">
      <div id="Nav">
        <div className="logo"></div>
         <div className="nav-list">
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us </a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
         </div>
        <div className="buy_btn">Buy</div>
      </div>
      <div id="Main_content">
        <div className="special_Heading">
          <span>Unlocking the Secrets of Journalism:</span>
          <h1>Our journalism course offers hands-on experience in news reporting and culinary journalism, empowering you to tell compelling stories.</h1>
          <div className="all-btn">
              <Button link="#" val="buy now"/>
              <Button link="Intro" val="Learn More"/>
          </div>
        </div>
        <div className="Image">
          <img src="/Image/Mike.png" alt="photo" />
        </div>
      </div>
    </section>
        </>
    )
}

export default Home