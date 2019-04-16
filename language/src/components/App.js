import React from 'react';

class App extends React.Component {
  state = { language: 'English'};  

  onClickLanguage = language => {
    this.setState({ language: language })
  }


  render() {
    return (
      <div className="ui container">
        Select a language: 
          <i className="us flag" onClick={() => this.onClickLanguage('English')}></i>
          <i className="cn flag" onClick={() => this.onClickLanguage('Chinese')}></i>
    
          {this.state.language}

      </div>


    )
 }
}

export default App;