import React from 'react';
import Button from '../../lib/components/Button';
import Card from '../../lib/components/Card';

import puppyjpg from '../img/puppies.jpg';

function CardExamples() {
    console.log(puppyjpg);
    return (
        <div className="container">
            <h1>Cards</h1>
            <h4>Basic Card</h4>
            <p>
                A basic card is made up of a Content (which provides the cards
                padding) header and body.
            </p>
            <Card style={{ marginBottom: '10px' }}>
                <Card.Content>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo incidunt quos, asperiores placeat dolor laborum
                        expedita corrupti voluptates distinctio hic quod
                        excepturi aut corporis nulla, voluptas atque. Molestias,
                        tempora voluptate!
                    </Card.Body>
                </Card.Content>
            </Card>
            <h4>Additional Components</h4>

            <Card>
                <Card.Content>
                    <Card.Header>With Buttons</Card.Header>
                    <Card.Body>
                        <div>
                            Any additional components can be added directly into
                            the card content or body. For instance adding
                            buttons.
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <Button
                                color="success"
                                style={{ display: 'block', width: '100%' }}
                            >
                                I am in the Body
                            </Button>
                        </div>
                    </Card.Body>
                    <Button
                        color="success"
                        style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '10px',
                        }}
                    >
                        I am in the Content
                    </Button>
                </Card.Content>
            </Card>

            <h4>Images</h4>
            <p>
                Cards can also have an image. The image will have a default
                height that should be changed to suit your selected image. The
                image will be set using object-fit: content (this is not
                compatible with ie11, in which case dimension should be set
                directly)
            </p>

            <Card style={{ width: '350px' }}>
                <Card.Img style={{ height: '200px' }}>
                    <img src={puppyjpg} alt="puppy" />
                </Card.Img>
                <Card.Content>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Atque officia error debitis delectus. Illum fugit
                        dolorum rem, labore laudantium non veniam natus ducimus
                        magni in aliquid blanditiis consectetur vel ratione amet
                        optio dicta? Enim voluptatum quisquam assumenda
                        voluptatem odit quasi, ut aspernatur sapiente,
                        consectetur laboriosam, eaque nisi ipsum fuga est?
                    </Card.Body>
                </Card.Content>
            </Card>
        </div>
    );
}

export default CardExamples;
