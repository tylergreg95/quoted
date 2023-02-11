import { Link } from "react-router-dom";

const Welcome = () => {
    return ( 
        <div className="welcome">      
            <h1>Welcome to Quoted</h1>
            <Link className="enter-button" to="/quote">Get Inspired</Link>
        </div>
     );
}
 
export default Welcome;