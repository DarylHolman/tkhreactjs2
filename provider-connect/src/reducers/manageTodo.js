export default function manageTasks(state= {
	tasks: [],
}, action){
	switch (action.type) {
		case "ADD_TASK":
			return Object.assign({}, state, {
				tasks: state.tasks.concat(action.task)
			});
		default:
			return state
	}

}