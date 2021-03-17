import React from 'react';
import { Container } from 'reactstrap';
import us_flag from '../asset/us-flag.jpg';
import fr_flag from '../asset/fr-flag.jpg';
import './App.css';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({language});
  }

  render() {
    return (
      <div className="App">
        <Container>
          Select a language:
          <img src={us_flag} className="flag flag-us" alt="us flag" onClick={() => this.onLanguageChange('english')} />
          <img src={fr_flag} className="flag flag-fr" alt="fr flag" onClick={() => this.onLanguageChange('french')}/>
          <ColorContext.Provider value="success">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </Container>
      </div>
    );
  }
  
}

export default App;
