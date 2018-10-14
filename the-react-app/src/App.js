import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //1 = character creation, 2 = home, 3 = power creation
      TabIndex: 2,
    };
    this.setTabIndex = this.setTabIndex.bind(this);
  }
  setTabIndex(tabIndex){
    this.setState({TabIndex: tabIndex});
  }
  render() {
    return (
      <div className="container App">
        <div className="row">
            <Tabs tabIndex={this.state.TabIndex} setTabIndex={this.setTabIndex} />
        </div>
        <div className="row">
            <Content tabIndex={this.state.TabIndex}  />
        </div>
      </div>
    );
  }
}

const Tabs = (props) => {

  return(
    <div className="col">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Elementals</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem index={1} callback={props.setTabIndex} label="Character Creation" 
              tabIndex={props.tabIndex} />
            <NavItem index={2} callback={props.setTabIndex} label="Home" 
              tabIndex={props.tabIndex} />
            <NavItem index={3} callback={props.setTabIndex} label="Power Creation" 
              tabIndex={props.tabIndex} />
          </ul>
        </div>
      </nav>
    </div>
  );
}
const NavItem = (props) => {
  let liClass = "nav-item " + (props.tabIndex === props.index ? "active" : "");
  return(
    <li className={liClass} onClick={x=>{props.callback(props.index)}}>
      <span className="nav-link">{props.label}</span>
    </li>
  );
}
NavItem.propTypess = {
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
}
const Content = (props) => {
  let innerContent = null;
  switch(props.tabIndex){
    case 1:
      innerContent = <p>one</p>;
      break;
    case 2:
    default:
      innerContent = <p>two</p>;
      break;
    case 3:
      innerContent = <p>three</p>;
      break;
  }
  return(
    <div id="content" className="col">
      {innerContent}
    </div>
  );
}
Content.propTypess = {
  tabIndex: PropTypes.number.isRequired,
}
export default App;
