import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  // two ways to get data out of context obj
    // 1. use contextType in conjunction with this.context
    // 2. use Consumer component from context obj

  
  /*static contextType = LanguageContext;

  onSelectLanguage = () => {
    return this.context === 'English'? 'Submit' : '提交'

  }*/

  onSelectLanguage = language => {
    return language === 'English'? 'Submit' : '提交'

  }
  render () {
    return (
      <button className="ui primary button">
        {/*this.onSelectLanguage()*/}
        <LanguageContext.Consumer>
          {value => this.onSelectLanguage(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  
};

export default Button;