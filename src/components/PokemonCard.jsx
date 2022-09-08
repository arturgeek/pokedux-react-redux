import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta  from 'antd/lib/card/Meta';

const PokemonCard = ( {name, image, types} ) => {
    return <Card 
        title={name}
        cover={<img src={image} alt="Charmander" />}
        extra={ <StarOutlined /> }
    >
        <Meta description={types} />
    </Card>
}

export default PokemonCard;