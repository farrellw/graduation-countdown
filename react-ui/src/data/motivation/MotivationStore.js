import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import MotivationActionTypes from './MotivationActionTypes';
import Dispatcher from '../Dispatcher';
import Counter from './Counter';
import Phrase from './Phrase';

class MotivationStore extends ReduceStore {
	constructor(){
		super(Dispatcher);
	}

	getInitialState(){
		return Immutable.OrderedMap();
	}

	reduce(state, action){
		switch(action.type) {
			case MotivationActionTypes.ADD_PHRASE:
				if(!action.text){
					return state;
				}
				const id = Counter.increment();
				return state.set(id, new Phrase({
					id,
					text: action.text,
					author: action.author || 'Anonymous',
				}));
			default:
				return state;
		}
	}
}

export default new MotivationStore();
