import React, { Component } from 'react';
import Logo from'./assets/Logo.png';
import imgtoShow0 from'./assets/1.png';
import imgtoShow1 from'./assets/2.png';
import imgtoShow2 from'./assets/3.png';
import imgtoShow3 from'./assets/4.png';
import './SidemenuSliders.css';

class SidemenuSliders extends Component {
  constructor(props){
    super(props);
    this.state = {
      visualizingPage: 1,
    }
    this.moverIzq = this.moverIzq.bind(this);
  }

  moverIzq(){
    this.setState({
      visualizingPage: this.state.visualizingPage + 1,
    });
  }

  render() {
    let style = {'transform': 'translateX(0%)'};
    
    return (
      <div className="PrettyLandingPage">
        <div className="anotherLayerOfBackground">
          <div className="Interface">
            <div className="Background">
              <div className="logoContainer">
                 <img className="logoPng" src={Logo} alt="Logo"/>
              </div>
              

              <div className="contentSlider" style={style}>
                <div className="content1">
                  <div className="imgContainer">
                     <img className="imgPng" src={imgtoShow1} alt="Img"/>
                  </div>
                  <div className="textContainer">
                    <span className="text">The most enjoyable restaurant of its kind.</span>
                  </div>
                </div>

                 <div className="content2">
                  <div className="imgContainer">
                     <img className="imgPng" src={imgtoShow2} alt="Img"/>
                  </div>
                  <div className="textContainer">
                    <span className="text">Eat fishfood like you never eaten before.</span>
                  </div>
                </div>

                 <div className="content3">
                  <div className="imgContainer">
                     <img className="imgPng" src={imgtoShow3} alt="Img"/>
                  </div>
                  <div className="textContainer">
                    <span className="text">Bring your childrens and friends!</span>
                  </div>
                </div>
              </div>


              <div className="Tracker">
                <div onClick={e => this.moverIzq()} className="Tracker-0 tracker-active"></div>
                <div onClick={e => this.moverIzq()} className="Tracker-0"></div>
                <div onClick={e => this.moverIzq()} className="Tracker-0"></div>
              </div>
              <div className="buttonContainer">
                <a className="button" onClick={this.moverIzq}>Make a reservation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidemenuSliders;
