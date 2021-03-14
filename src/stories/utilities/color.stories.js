import Lookingglass from '../../lib/components/Lookingglass';

export default {
    component: Lookingglass,
    title: 'Utilities/Color',
};

export const Color = (args) => (
    <Lookingglass {...args}>
        <div className="p--3">The quick brown fox jumps over the lazy dog</div>
    </Lookingglass>
);

Color.args = {
    backgroundColor: 'primary',
    color: 'white',
};

// each of the theme colors
export const ThemeColors = (args) => (
    <>
    <Lookingglass div padding="3" margin="1" backgroundColor="primary">
        Primary
        </Lookingglass>
    <Lookingglass div padding="3" margin="1" backgroundColor="secondary" >
        Secondary
        </Lookingglass>
    <Lookingglass div padding="3" margin="1" backgroundColor="success" >Success</Lookingglass>
    <Lookingglass div padding="3" margin="1" backgroundColor="errror" >Error</Lookingglass>
    <Lookingglass div padding="3" margin="1" backgroundColor="warning" >Warning</Lookingglass>
    <Lookingglass div padding="3" margin="1" backgroundColor="info" >Info</Lookingglass>
    </>
)

// Additional Colors
export const AdditionalColors = (args) => (
    <>
        <Lookingglass div padding="3" margin="1" backgroundColor="white" >White</Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="black" >Black</Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="dark" >Dark</Lookingglass>
        <Lookingglass div padding="3" margin="1" backgroundColor="light" >Light</Lookingglass>
    </>
)

// Tints and Shades
export const TintsAndShades = (args) => (
    <>
        <Lookingglass div padding="3" backgroundColor="primary-l4" >Primary-l4</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l3" >Primary-l3</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l2" >Primary-l2</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-l1" >Primary-l1</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary" >Primary</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d1" >Primary-d1</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d2" >Primary-d2</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d3" >Primary-d3</Lookingglass>
        <Lookingglass div padding="3" backgroundColor="primary-d4" >Primary-d4</Lookingglass>
    </>

)