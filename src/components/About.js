import User from "./User.js"
import UserClass from "./UserClass.js"
const About = () =>{
    return(
        <div className="about">
            <h1>About Us</h1>
            <User name={"Sagar Singh (function)"}/>
            <UserClass name={"Sagar Singh (Class)"} location={"Najibabad"}/>
        </div>
    )
}
export default About