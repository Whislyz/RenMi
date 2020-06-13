import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Svg from './Svg.jsx';
import ViewPhotosMini from './ViewPhotosMini.jsx';


const MainMian = styled.div`
background-color: #FFFFFF;
background-repeat: no-repeat;
background-position: center center;
position: absolute;
width: 100%;
height: 100%;
overflow:visible;
z-index: 100;
`;

const ExitButton = styled.div`
height: 24px;
width: 24px;
display: block;
fill: rgb(72, 72, 72);
position: absolute;
top: 8%;
left: 95%;
`;

const ViewPhotosPage = styled.div`
position: absolute;
top: 35%;
left: 80%;
color: #454242;
font-family: 'Roboto',sans-serif;
`;

const ViewPhotosDescription = styled.div`
position: absolute;
top: 39.5%;
left: 80%;
color: #6b6767;
font-family: 'Roboto',sans-serif;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 49%;
  left: 4.1%;
  border: solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 9px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const RightButton = styled.button`
  position: absolute;
  top: 49%;
  left: 71.5%;
  border: solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 9px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const ViewPhotosLarge = styled.img`
  width: 959.625px;
  height: 639.75px;
  position: absolute;
  top: 12%;
  left: 13%;
  border-radius: 2%;
  max-height: 75vh;
  object-fit: contain;
  cursor: pointer;
  /* border-radius: 16px; */
  max-width: 85%;
  margin: 0px auto;
`;

class ViewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attbId: this.props.attbId,
    };
    this.addAttb = this.addAttb.bind(this);
    this.minusAttb = this.minusAttb.bind(this);
  }

  minusAttb() {
    console.log(this.state.attbId);
    if (this.state.attbId <= 0) {
      this.setState({
        attbId: 17,
      });
    } else {
      this.setState({
        attbId: Number(Number(this.state.attbId) - Number(1)),
      });
    }
  }

  addAttb() {
    console.log(this.state.attbId);
    if (this.state.attbId === 17) {
      this.setState({
        attbId: 0,
      });
    } else {
      this.setState({
        attbId: Number(Number(this.state.attbId) + Number(1)),
      });
    }
  }

  render() {
    console.log(this.props.data,'bf');
    if(this.props.data && this.props.data) {
      console.log(this.props.data,'af');
      return (
        <MainMian>
          <ExitButton>
            <Svg handleViewButton={this.props.handleViewButton} />
          </ExitButton>

          <LeftButton onClick={this.minusAttb} />
          <RightButton onClick={this.addAttb} />

          <ViewPhotosLarge src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${this.state.attbId}.jpg`} />

          <ViewPhotosPage>
          {this.state.attbId}
          {' '}
          /
          {' '}
          {this.props.rows.length}
        </ViewPhotosPage>

        <ViewPhotosDescription>{this.props.rows[this.state.attbId].description}</ViewPhotosDescription>

          <ViewPhotosMini
            attbId={this.state.attbId}
            data={this.props.data}
            handleGetAtt={this.props.handleGetAtt}
            handleRerenderButton={this.props.handleRerenderButton}
          />

        </MainMian>
      );
    }

  }
}

export default ViewPhotos;
