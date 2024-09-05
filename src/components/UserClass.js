import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dumy",
                location: "Default", 
            },
        };

    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/sagarkataria');

        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        });
    }
    render() {

        const { name, location } = this.state.userInfo

        const { count } = this.state;
        return (
            <div>
                <h2>Name : {name}</h2>
                <h3>Location :  {location}</h3>
                <h4>Contact: bila</h4>
            </div>
        )
    }
}

export default UserClass;