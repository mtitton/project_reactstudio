import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      fieldCopy: '',
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_fieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
  }
  
  onClick_state0_elButton = (ev) => {
    // Go to screen 'Tela pós login'
    this.props.appActions.goToScreen('telaposlogin', { transitionId: 'fadeIn' });
  
  }
  
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_state0_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state0_elFieldCopy = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    const style_state0_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div className="appBg" style={style_state0_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='state0_elField'>
            <input className="baseFont" style={style_state0_elField} type="email" placeholder={this.props.locStrings.start_field_925290} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
          
          <div className='state0_elFieldCopy'>
            <input className="baseFont" style={style_state0_elFieldCopy} type="password" placeholder={this.props.locStrings.start_field_627605} onChange={this.textInputChanged_fieldCopy} value={this.state.fieldCopy}  />
          </div>
          
          <div className='state0_elButton'>
            <Button className="actionFont" style={style_state0_elButton}  color="accent" onClick={this.onClick_state0_elButton} >
              {this.props.locStrings.start_button_938642}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
