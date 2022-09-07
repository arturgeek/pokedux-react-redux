import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta  from 'antd/lib/card/Meta';

const PokemonCard = ( {name} ) => {
    return <Card 
        title={name}
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" />}
        extra={ <StarOutlined /> }
    >
        <Meta description="fire, normal" />
    </Card>
}

export default PokemonCard;