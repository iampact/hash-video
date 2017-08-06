import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	FreeCmp
} from "../components/free-cmp";

const freeRoutes:Routes = [
	{
		path: "freelancers",
		component: FreeCmp,
		pathMatch: "full"
	}
]

export const FreeRouting = RouterModule.forRoot(freeRoutes);
