import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainGallery from './MainGallery.jsx';
import ViewPhotos from './ViewPhotos.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rows: [],
      viewButton: false,
      attbId: 0,
      // LargeBox: false,
      // SmallBox1: false,
      // SmallBox2: false,
      // SmallBox3: false
      // SmallBox4: false
    };
    this.handleViewButton = this.handleViewButton.bind(this);
    this.handleGetAtt = this.handleGetAtt.bind(this);
    this.handleRerenderButton = this.handleRerenderButton.bind(this);
    this.getImage = this.getImage.bind(this);
  }



  getImage() {
    axios.get('/carousel')
      .then(({ data }) => {
        console.log(data,'getre')
        this.setState({
          data: data,
          rows: data.rows,
        });
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

  handleViewButton() { // working
    this.setState({
      viewButton: !this.state.viewButton,
    });
  }


  handleRerenderButton() { // working
    console.log('you click me');
    this.setState({
      viewButton: true,
    });
  }

  handleGetAtt(e) {
    console.log(e.target.id, 'e.target');
    this.setState({
      attbId: e.target.id,
    });
  }
  componentDidMount() {
    this.getImage();
  }
  render() {
    console.log(this.state.attbId, 'this.state.attbID');
    console.log(this.state.rows,'rows')
    console.log(this.state.data,'data')
    return (
      <div>
        <div>
          {this.state.viewButton === false
            ? (
              <MainGallery
                handleViewButton={this.handleViewButton}
                data={this.state.data}
                handleGetAtt={this.handleGetAtt}
              />
            )
            : (
              <ViewPhotos
                handleViewButton={this.handleViewButton}
                data={this.state.data}
                rows={this.state.rows}
                attbId={this.state.attbId}
                handleGetAtt={this.handleGetAtt}
                handleRerenderButton={this.handleRerenderButton}
              />
            )}
        </div>
      </div>
    );
  }
}

export default App;
