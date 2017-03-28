import { NgModule } from '@angular/core'

import { DynamicComponent } from './dynamic.component'
import { DynamicModuleRoutingModule } from './dynamicModule-routing.module'

import { importComs } from './comMgr'

@NgModule({
    declarations:[
        DynamicComponent,
        ...importComs
    ],
    entryComponents:[
        ...importComs
    ],
    imports:[
        DynamicModuleRoutingModule
    ]
})
export class DynamicModule{}