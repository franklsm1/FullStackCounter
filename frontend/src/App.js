import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { count: 0, text: "Not Connected To Backend" };

    componentDidMount = async () => {
        const options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        let countResponse = await fetch('/count', options);
        console.log(countResponse)
        let count = await countResponse.json();

        this.setState({
            count: count.value,
            text: count.text
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {this.state.text}
                    </p>
                    <p>
                        Backend Value: {this.state.count}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
