import React from 'react';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import "./card.css"


export default function MainCard() {
  return (
    <div className='main-card'>
      <Grid.Container>
        <Grid sm={1} md={10}>
          <Card height={400}>
            <Card.Header>
              <Text>Card Title</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Share
                </Button>
                <Button size="sm" color="success">
                  Learn more
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}