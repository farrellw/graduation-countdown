import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import CountdownActionTypes from './CountdownActionTypes';
import CountdownDispatcher from './CountdownDispatcher';
import Counter from './Counter';
import Phrase from './Phrase';

class CountdownStore extends ReduceStore {
	constructor(){
		super(CountdownDispatcher);
	}

	getInitialState(){
		return Immutable.OrderedMap();
	}

	reduce(state, action){
		switch(action.type) {
			case CountdownActionTypes.ADD_PHRASE:
				if(!action.text){
					return state;
				}
				const id = Counter.increment();
				return state.set(id, new Phrase({
					id,
					text: action.text,
					complete: false
				}));
			default:
				return state;
		}
	}
}

export default new CountdownStore();