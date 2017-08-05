import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	TodoCmp
} from "../components/todo-cmp";

const todoRoutes:Routes = [
	{
		path: "todo",
		component: TodoCmp,
		pathMatch: "full"
	}
]

export const TodoRouting = RouterModule.forRoot(todoRoutes);
