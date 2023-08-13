import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'

class App extends Component {
  state = {inputText: '', wordList: []}

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAdd = () => {
    const {wordList, inputText} = this.state
    const newWord = {
      id: v4(),
      word: inputText,
    }
    this.setState({wordList: [...wordList, newWord], inputText: ''})
  }

  render() {
    const {inputText, wordList} = this.state
    return (
      <div className="bg-container">
        <div className="cards-container">
          <div className="counting-container">
            <div className="heading-container">
              <h1>Count the characters like a boss... </h1>
            </div>
            {wordList.length > 0 ? (
              <ul>
                {wordList.map(eachItem => (
                  <li key={eachItem.id} className="list-items">
                    <p>
                      {eachItem.word}:{eachItem.word.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </div>
          <div className="input-container">
            <h2 className="heading2">Character Counter</h2>

            <div className="input-and-button-container">
              <form>
                <input
                  type="text"
                  placeholder="Enter the characters here"
                  className="input"
                  onChange={this.onChangeText}
                  value={inputText}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickAdd}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
