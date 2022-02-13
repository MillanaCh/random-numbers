import './App.css';
import React from 'react'
class App extends React.Component {
  constructor() {
    super()
    this.state = ({
      minValue: 0,
      maxValue: 0,
      randomNum: 0
    })
  }
  handlerMin(e) {
    let min = isNaN(e.target.value) ? 0 : e.target.value
    this.setState({ minValue: min})
  }
  handlerMax(e) {
    let max = isNaN(e.target.value) ? 0 : e.target.value
    this.setState({ maxValue: max})
  }
  handlerSubmit(e) {
    e.preventDefault();
    let newRandomNum = Math.floor(Math.random() * (parseInt(this.state.maxValue) - parseInt(this.state.minValue) + 1) + parseInt(this.state.minValue))
    this.setState({ randomNum: newRandomNum })
  }
  handleClean() {
    this.setState = ({
      minValue: 0,
      maxValue: 0,
      randomNum: 0
    })
  }
  render() {
    return (
      <>
        <div className='container'>
          <h2>Random Number :<span>{this.state.randomNum}</span></h2>
          <form onSubmit={(e) => this.handlerSubmit(e)}>
            <fieldset>
              <div>Lower Limit<input type='number' min="1" placeholder="min value" value={this.state.minValue} onChange={(e) => this.handlerMin(e)} /></div>
              <div>Upper Limit<input type='number' min="1" value={this.state.maxValue} onChange={(e) => this.handlerMax(e)} /></div>
              <div>
                <button className='btn generate' type='submit'>Generate</button>
                <button className='btn clean' type='button' onClick={() => this.handleClean()}>Clean</button>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    )
  }
}
export default App

