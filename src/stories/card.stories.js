import Card from '../lib/components/Card';
import Button from '../lib/components/Button';
import Lookingglass from '../lib/components/Lookingglass';
import puppyjpg from './assets/img/puppies.jpg';

export const Basic = (args) => (
    <Card>
        <Card.Content>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt quos, asperiores placeat dolor
                laborum expedita corrupti voluptates distinctio hic quod excepturi aut corporis nulla, voluptas atque.
                Molestias, tempora voluptate!
            </Card.Body>
        </Card.Content>
    </Card>
);

export const AdditionalControls = (args) => (
    <Card>
        <Card.Content>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
                <Lookingglass marginBottom="2">
                    <div>
                        Any additional components can be added directly into the card content. For instance adding
                        buttons.
                    </div>
                </Lookingglass>
            </Card.Body>
            <Button color="success" block={true}>
                Click
            </Button>
        </Card.Content>
    </Card>
);

export const Img = (args) => (
    <Card style={{ width: '350px' }}>
        <Card.Img>
            <img src={puppyjpg} alt="puppy" />
        </Card.Img>
        <Card.Content>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia error debitis delectus. Illum
                fugit dolorum rem, labore laudantium non veniam natus ducimus magni in aliquid blanditiis consectetur
                vel ratione amet optio dicta? Enim voluptatum quisquam assumenda voluptatem odit quasi, ut aspernatur
                sapiente, consectetur laboriosam, eaque nisi ipsum fuga est?
            </Card.Body>
        </Card.Content>
    </Card>
);
