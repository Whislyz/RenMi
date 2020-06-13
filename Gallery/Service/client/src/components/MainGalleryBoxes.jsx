import React from 'react';
import styled from 'styled-components';

const SmallParent = styled.div`
  display: flex;
  flex-flow: column wrap;
  cursor: pointer;
  border: 1px solid grey;
  width: 100%;
  height: 502px;
`;

const SmallChild = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  overflow: hidden;
`;

const SmallBox = styled.img`
  width: 100%;
  height: 251px;
  border: 1px solid grey;
  object-fit: cover;
  &:hover {
    transform: scale(1.2);
  }
  transition: 0.5s;
`;

export default function MainGalleryBoxes(props) {
  return (
    <div onClick={props.handleGetAtt}>
      <SmallParent onClick={props.handleViewButton}>

        <SmallChild>
          <SmallBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/1.jpg" id="1" />
        </SmallChild>

        <SmallChild>
          <SmallBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/2.jpg" id="2" />
        </SmallChild>

        <SmallChild>
          <SmallBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/3.jpg" id="3" />
        </SmallChild>

        <SmallChild>
          <SmallBox src="https://6-pack.s3-us-west-1.amazonaws.com/00/4.jpg" id="4" />
        </SmallChild>


      </SmallParent>
    </div>
  );
}
