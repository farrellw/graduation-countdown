import Immutable from 'immutable';

const Phrase = Immutable.Record({
	id: '',
	text: '',
	author: '',
	databaseId: '',
});

export default Phrase;