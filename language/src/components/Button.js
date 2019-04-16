import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  
  static contextType = LanguageContext;

  onSelectLanguage = () => {
    return this.context === 'English'? 'Submit' : '提交'
  }
  render () {
    return (
      <button className="ui primary button">
       {this.onSelectLanguage()}
      </button>
  )
  }
  
};

export default Button;