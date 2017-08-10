import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: '',
            time: 0,
            newTime: ''

        };
    }

    changeDeadline()
    {
        //Never mutate or change state directly e.g. this.state.deadline = "December 25, 2017"
        this.setState({deadline: this.state.newDeadline});
    }

    changeTime()
    {
        //Never mutate or change state directly e.g. this.state.deadline = "December 25, 2017"
        this.setState({deadline: this.state.newDeadline});
    }
    render()
    {
        //Always return JSX
        return(
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <Clock deadline ={this.state.deadline} />
                </div>

                <Form inline>

                    <FormControl
                        className="Deadline-input"
                        placeholder="Please enter the date"
                        onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>




            </div>

            )

    }
}

export default  App;