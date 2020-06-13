
import React from 'react';
import styled from 'styled-components';

const ImageUl = styled.ul`
  position: absolute;
  top: 19%;
  left: 75%;
`;
const ImageBox = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  padding:3px;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

export default function ViewPhotosmini(props) {
  if (props.attbId <= 1) {
    return (
      <ImageUl>
        <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(18 - 2)}.jpg`} />
        <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(18 - 1)}.jpg`} />
        <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId)}.jpg`} />
        <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(1)}.jpg`} />
        <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(2)}.jpg`} />
      </ImageUl>
    );
  }
  return (
    <ImageUl>
      <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) - Number(2)}.jpg`} />
      <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) - Number(1)}.jpg`} />
      <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId)}.jpg`} />
      <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(1)}.jpg`} />
      <ImageBox src={`https://6-pack.s3-us-west-1.amazonaws.com/00/${Number(props.attbId) + Number(2)}.jpg`} />
    </ImageUl>

  );
}
