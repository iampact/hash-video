import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	ProjectCmp
} from "../components/project-cmp";

const projectRoutes:Routes = [
	{
		path: "projects",
		component: ProjectCmp,
		pathMatch: "full"
	}
];

export const ProjectRouting = RouterModule.forRoot(projectRoutes);
