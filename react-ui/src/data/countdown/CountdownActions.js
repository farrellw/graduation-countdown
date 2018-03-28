import CountdownActionTypes from './CountdownActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
	updateDate(date){
		Dispatcher.dispatch({
			type: CountdownActionTypes.UPDATE_DATE,
			date,
		})
	}
};