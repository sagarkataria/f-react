import { Component } from "react"
import User from "./User.js"
import UserClass from "./UserClass.js"


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
                <UserClass name={"Sagar Singh (Class)"} location={"Najibabad"} />
            </div>
        )
    }
}

export default About