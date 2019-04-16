import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
          
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value='red'>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>

      </div>


    )
 }
}

export default App;