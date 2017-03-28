import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes:Routes=[
	{
		path:'dynamicModule',
		loadChildren:'./dynamicModule/dynamicModule.module#DynamicModule'
	}
]
@NgModule({
	imports:[
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]
})
export class AppRoutingModule{}