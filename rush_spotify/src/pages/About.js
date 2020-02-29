import React from "react";

class About extends React.PureComponent{
   constructor(props) {
       super(props);
       this.state = {
           counter: 0
       };
   }

    click(){
        console.log(this);
        this.setState({counter: this.state.counter + 1 })
    }

    render () {
        return <h2 onClick={this.click.bind(this)}>Click me {this.state.counter}</h2>;
    }
}


export default About;
