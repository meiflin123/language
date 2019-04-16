import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // two ways to get data out of context obj
    // 1. use contextType in conjunction with this.context
    // 2. use Consumer component from context obj

  /*static contextType = LanguageContext;

  onSelectLanguage = () => {
    return this.context === 'English'? 'Name' : '中文'
  }*/

  onSelectLanguage = language => {
    return language === 'English'? 'Name' : '中文'
  }

  render() {
    return (
      <div className="ui form">
        <div className="ui field">
          <label>
         {/* {this.onSelectLanguage()}*/}
            <LanguageContext.Consumer>
              {value => this.onSelectLanguage(value)}
            </LanguageContext.Consumer>
          </label>
          <input />
        </div>
      </div>
    )
 }
};

export default Field;