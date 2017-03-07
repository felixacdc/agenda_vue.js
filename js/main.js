Vue.component('agenda', {
	template: '#agenda',
	data: function() {
		return {
			nuevaTarea: null
		}
	},
	methods: {
		agregarTarea: function() {
			console.log(this.nuevaTarea);
		}
	}
});

new Vue({
	el: '#main'
});