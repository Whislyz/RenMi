import React from 'react';
import styled from 'styled-components';
import MainGalleryBoxes from './MainGalleryBoxes.jsx';

const LargeParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 502px
  cursor: pointer;
`;

const LargeChild = styled.div`
  justify-self: center;
  width: 100%;
  height: 502px;
  border: 1px solid grey;
  overflow: hidden;
`;

const LargeBox = styled.img`
  width: 100%;
  height: 502px;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
  }
  transition: 0.5s;
`;

const Sharebtn = styled.button`
  position: absolute;
  top: 6.5%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  font-size: 14px;
  padding: 7px 16px;
  border: none;
  z-index: 10;
  cursor: pointer;
  border-radius: 6px;
`;

const Savebtn = styled.button`
  position: absolute;
  top: 6.5%;
  left: 95%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  font-size: 14px;
  padding: 7px 16px;
  border: none;
  z-index: 10;
  cursor: pointer;
  border-radius: 6px;
`;

const Viewbtn = styled.button`
  position: absolute;
  top: 52%;
  left: 93%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  display: inline-block;
  font-size: 15px;
  padding: 7px 16px;
  border: none;
  z-index: 10;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  border-color: transparent;
  color: #484848;
  letter-spacing: normal;
`;

export default function MainGallery(props) {
  return (
    <div>

      <Viewbtn onClick={props.handleViewButton}>View Photos</Viewbtn>

      <LargeParent onClick={props.handleViewButton}>
        <LargeChild onClick={props.handleGetAtt}>
          <LargeBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/0.jpg" id="0" />
        </LargeChild>
        <MainGalleryBoxes
          data={props.data}
          handleViewButton={props.handleViewButton}
          handleGetAtt={props.handleGetAtt}
        />
      </LargeParent>

    </div>

  );
}
