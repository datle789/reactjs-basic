import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'leanh',
        major: 'IT'
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.name });
    }


    render() {

        return (
            <>
                <div className="first">
                    <input type="text" value={this.state.name} onChange={(e) => this.handleChangeName(e)}></input>
                    hello everyone, my name {this.state.name}

                </div>

                <div className="second">
                    Majority : {this.state.major}
                </div>

            </>
        )
    }
}

export default MyComponent;