import React from "react";


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    // handleOnChangeName = (event) => {
    //     this.setState({ name: event.target.value });
    // }

    // handleClickButton = () => {
    //     alert("success")
    // }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("check data", this.state)
    }

    render() {

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(e) => this.handleChangeLastName(e)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.handleClick(e)} />
                </form>
            </>
        )
    }
}

export default MyComponent;