import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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

  renderButton = color => {
    return (
      <button className= {`ui ${color} button`}>
        {/*this.onSelectLanguage()*/}
        <LanguageContext.Consumer>
          {value => this.onSelectLanguage(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  
  render () {
    return (
      <ColorContext.Consumer>
        { color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
  
};

export default Button;