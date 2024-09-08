import { Component } from "react"
import User from "./User.js"
import UserClass from "./UserClass.js"
import UserContext from "../utils/UserContext.js";


class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        console.log('parent render')
        return (
            <div className="about">
                <h1>About Us</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Sagar Singh (Class)"} location={"Najibabad"} />
            </div>
        )
    }
}

export default About