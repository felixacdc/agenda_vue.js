Vue.component('agenda', {
	template: '#agenda',
	data: function() {
		return {
			nuevaTarea: null,
			editandoTarea: null
		}
	},
	props: ['tareas'],
	methods: {
		agregarTarea: function() {
			this.tareas.unshift({
                titulo: this.nuevaTarea, completado: false
            });
            this.nuevaTarea = "";
		}
	}
});

new Vue({
	el: '#main',
	data: {
		tareas: [
			{"titulo": "Salir a correr", "completado": false},
		    {"titulo": "Ir al gimnasio", "completado": true},
		    {"titulo": "Limpiar el coche", "completado": false},
		    {"titulo": "Hacer la compra", "completado": false},
		    {"titulo": "Aprender VueJs", "completado": false},
		    {"titulo": "Hacer la tarea de ingles", "completado": false},
		]
	},
});