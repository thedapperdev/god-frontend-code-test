import React from 'react';
import H1 from '../H1';

export interface Props {
  id?: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

const Car: React.FC<Props> = (props: Props) => {
  const altText = `${props.modelName} ${props.modelType} ${props.bodyType}`;

  return (
    <>
      <h3>{props.bodyType}</h3>
      <H1>{props.modelName}</H1>
      <h2>{props.modelType}</h2>
      <img src={props.imageUrl} alt={altText} />
    </>
  )
};

export default Car;
