import Card from '../lib/components/Card';
import Button from '../lib/components/Button';
import CSS from '../lib/components/CSS';
import puppyjpg from './assets/img/puppies.jpg';

export const Basic = (args) => (
    <Card>
        <Card.Content>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt quos,
                asperiores placeat dolor laborum expedita corrupti voluptates distinctio hic quod
                excepturi aut corporis nulla, voluptas atque. Molestias, tempora voluptate!
            </Card.Body>
        </Card.Content>
    </Card>
);

export const AdditionalComponent = (args) => (
    <Card>
        <Card.Content>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
                <CSS marginBottom="3">
                    <div>
                        Any additional components can be added directly into the card content. For
                        instance adding buttons.
                    </div>
                </CSS>
            </Card.Body>
            <Button color="success" block={true}>
                Click
            </Button>
        </Card.Content>
    </Card>
);

export const Img = (args) => (
    <>
        <Card style={{ width: '250px' }}>
            <Card.Img src={puppyjpg} alt="puppy" />
            <Card.Content>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia error
                    debitis delectus. Illum fugit dolorum rem, labore laudantium non veniam natus
                    ducimus magni in aliquid blanditiis
                </Card.Body>
            </Card.Content>
        </Card>
        <CSS marginTop="3">
            <h6>Adjust Image Height (Object Fit)</h6>
        </CSS>
        <Card style={{ width: '250px' }}>
            <Card.Img src={puppyjpg} alt="puppy" style={{ height: '125px' }} />
            <Card.Content>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia error
                    debitis delectus. Illum fugit dolorum rem, labore laudantium non veniam natus
                    ducimus magni in aliquid blanditiis
                </Card.Body>
            </Card.Content>
        </Card>
    </>
);
