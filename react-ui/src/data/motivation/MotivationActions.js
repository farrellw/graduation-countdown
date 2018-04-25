import MotivationActionTypes from './MotivationActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
	addPhrase(text, author, id){
		Dispatcher.dispatch({
			type: MotivationActionTypes.ADD_PHRASE,
			text,
			author,
			id
		})
	},
	deletePhrase(id){
		Dispatcher.dispatch({
			type: MotivationActionTypes.DELETE_PHRASE,
			id
		})
	}
};

export default Actions;
