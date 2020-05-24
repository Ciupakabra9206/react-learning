import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumns = ({cards}, columnId) => cards.filter(card => card.listId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

export default connect(mapStateToProps)(Column);