import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
			{amount: 20, date: new Date(2019,5,10)},
			{amount: 10, date: new Date(2019,5,12)},
			{amount: 5, date: new Date(2019,5,15)},
			{amount: 20, date: new Date(2019,5,16)},
			{amount: 2, date: new Date(2019,5,16)}
		]
	}
});
