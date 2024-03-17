
import "./Button.css"

const Button = ({val,link})=>{
    return(
        <>
         <button className="btn-class">
          <a href={link}>{val}</a>
         </button>
        </>
    )
};

export default Button;

