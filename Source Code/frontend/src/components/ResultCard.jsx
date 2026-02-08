import React from 'react';

import { Card, Alert } from 'react-bootstrap';



const ResultCard = ({ result }) => {

  if (!result) return null;



  const hasDisease = result.prediction === 1;

  const confidence = result.probability ? 

    (result.probability[1] * 100).toFixed(1) : 

    'N/A';



  return (

    <div className="mt-4">

      <Card className={`result-card ${hasDisease ? 'border-danger' : 'border-success'}`}>

        <Card.Body className="text-center">

          <h4 className={`mb-3 ${hasDisease ? 'text-danger' : 'text-success'}`}>

            {hasDisease ? '🔴 Liver Disease Detected' : '🟢 No Liver Disease Detected'}

          </h4>

          

          <p className="mb-2">

            {hasDisease 

              ? 'Your liver function values indicate possible abnormalities.' 

              : 'Your liver parameters appear normal.'}

          </p>

          

          <div className="confidence-badge">

            <span>Confidence Score: <strong>{confidence}%</strong></span>

          </div>

          

          <hr className="my-3" />

          

          <p className="mb-0 small text-muted">

            {hasDisease 

              ? 'Please consult a healthcare professional for further evaluation and diagnosis.' 

              : 'However, regular check-ups are recommended for maintaining good liver health.'}

          </p>

        </Card.Body>

      </Card>

    </div>

  );

};



export default ResultCard;