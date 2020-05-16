import React, { Component } from 'react'
import {Form, FormControl, Button } from 'react-bootstrap'
import '../css/App.css'
import AgeStats from './AgeStats'

class App extends Component {
    //super function is necessary for "this" keyword
    constructor(){
        super()

        this.state = {
            newDate: "",
            birthday: '1992-07-13',
            showStats: false
        }
    }

    changeBirthday(){
        this.setState({ birthday: this.state.newDate,
        showStats: true })        
        console.log(this.state)

    }
    //inline option is set true in form is being used so that all the components can render side to side
    // to show space between components used this syntax {' '}
    // bootstrap getting started, open in browser and copy cdn link
    // we will paste in public/index.html file right above the title tag
    //for our own styling we would create our own css file write next to app.js/component
    //for using css classes, why className is used instead of simple class, as Class is already a reserved keyword in react so to differentiate className is used
    render(){
        return (
            <div className="App">
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl type="date" onChange={event=> this.setState({ newDate: event.target.value })}></FormControl>
                    { ' ' }
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>
                    {
                        this.state.showStats ?
                        <div className="fade age-stats">
                            <AgeStats date={ this.state.birthday } />
                        </div>
                        : <div></div>
                    }
                </Form>
            </div>
        )
    }
}

export default App