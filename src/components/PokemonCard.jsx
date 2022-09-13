import { Card } from 'antd';
import Meta  from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import StarButton from './StarButton';

const PokemonCard = ( {name, image, types, id, favorite, visible} ) => {

    const dispatch = useDispatch();
    const typesString = types.map( (type) => { return type.type.name } ).join() + "-" + visible.toString()

    const handleOnFavorite = () => {
        dispatch( setFavorite( {pokemonId: id} ));
    }

    return visible ? <Card 
        title={name}
        cover={<img src={image} alt="Charmander" />}
        extra={<StarButton isFavorite={favorite} onClick={ handleOnFavorite } />}
    >
        <Meta description={typesString} />
    </Card> : null
}

export default PokemonCard;