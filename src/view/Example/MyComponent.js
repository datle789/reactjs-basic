import React from "react";


class MyComponent extends React.Component {

    state = {
        name: "leanh",
        major: "IT"
    }

    handleOnChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleClickButton = () => {
        alert("success")
    }


    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    hello everyone, my name {this.state.name}

                </div>

                <div className="second">
                    Majority : {this.state.major}
                </div>


                <div className="Third">
                    <button onClick={() => this.handleClickButton()}>click</button>
                </div>
            </>
        )
    }
}

export default MyComponent;