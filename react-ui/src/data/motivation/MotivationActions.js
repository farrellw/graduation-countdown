import MotivationActionTypes from './MotivationActionTypes';
import MotivationDispatcher from './MotivationDispatcher';

const Actions = {
	addPhrase(text){
		MotivationDispatcher.dispatch({
			type: MotivationActionTypes.ADD_PHRASE,
			text
		})
	}
};

export default Actions;
