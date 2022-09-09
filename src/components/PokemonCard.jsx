import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta  from 'antd/lib/card/Meta';

const PokemonCard = ( {name, image, types} ) => {

    const typesString = types.map( (type) => { return type.type.name } ).join()

    return <Card 
        title={name}
        cover={<img src={image} alt="Charmander" />}
        extra={ <StarOutlined /> }
    >
        <Meta description={typesString} />
    </Card>
}

export default PokemonCard;