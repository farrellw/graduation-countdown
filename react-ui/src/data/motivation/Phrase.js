import Immutable from 'immutable';

const Phrase = Immutable.Record({
	id: '',
	complete: false,
	text: ''
});

export default Phrase;