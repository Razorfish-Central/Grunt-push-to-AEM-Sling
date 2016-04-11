var App = App || {};
App.Global = (function(){
	var getDate = function(){
		var d = new Date();
		console.log(d.getMonth() + '/' + d.getDate());
	};
	
	return{
		getDate : getDate
	}
})();