import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

  static contextType = LanguageContext;

  onSelectLanguage = () => {
    return this.context === 'English'? 'Name' : '中文'
  }

  render() {
    return (
      <div className="ui form">
        <div className="ui field">
          <label>{this.onSelectLanguage()}</label>
          <input />
        </div>
      </div>
    )
 }
};

export default Field;