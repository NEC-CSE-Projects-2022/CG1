import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const LiverHealthInfo = () => {
  return (
    <Card className="mt-4">
      <Card.Header as="h5" className="bg-primary text-white">
        Understanding Your Liver Health
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Your liver health is crucial for overall well-being. Here are some key points to remember:
        </Card.Text>
        
        <ListGroup variant="flush" className="mb-3">
          <ListGroup.Item>
            <strong>Liver Function Tests (LFTs)</strong> help assess how well your liver is working.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Bilirubin</strong> is a waste product processed by your liver. High levels may indicate liver problems.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Liver Enzymes (SGOT, SGPT, ALP)</strong> help break down proteins and other substances in your body.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Proteins (ALB, TP, A/G Ratio)</strong> are important indicators of your liver's synthetic function.
          </ListGroup.Item>
        </ListGroup>

        <Card.Text className="mt-3">
          <small className="text-muted">
            Note: This information is for educational purposes only. Always consult with a healthcare professional for medical advice.
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LiverHealthInfo;