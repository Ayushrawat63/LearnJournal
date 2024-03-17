
import Content from "./ContentData/Content";
const Introduction =()=>{
    return(
        <>
        <section id="Intro" className="margin">
      <div className="Intro_heading">
        <h1 className="topic">Introduction</h1>
        <h1 className="topic-content">Welcome to a transformative journey into the world of journalism! Led by esteemed retired journalist Mr. Arun, this two-week online course is your gateway to gaining invaluable practical insights, honed from decades of real-world experience in the field. Whether you are an aspiring journalist or seeking to enhance your skills, this course offers a unique opportunity to learn from a seasoned professional.</h1>
      </div>
      <div className="course-feature">
        {
          Content.Course.map((elm,i)=>{
             return(
              <>
              <div className="box" key={i}>
                <span>{elm.title}</span>
                <h1>{elm.data}</h1>
              </div>
              </>
             )
          })
        }
      </div>
    </section>
        </>
    )
};

export default Introduction;