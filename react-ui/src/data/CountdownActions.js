import CountdownActionTypes from './CountdownActionTypes';
import CountdownDispatcher from './CountdownDispatcher';

const Actions = {
	addPhrase(text){
		CountdownDispatcher.dispatch({
			type: CountdownActionTypes.ADD_PHRASE,
			text
		})
	}
};

export default Actions;