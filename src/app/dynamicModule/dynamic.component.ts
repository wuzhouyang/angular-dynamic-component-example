import {
    Compiler,
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    Injector,
    NgModule,
    ReflectiveInjector,
    ViewChild,
    ViewContainerRef
} from '@angular/core'
import { COMPILER_PROVIDERS } from '@angular/compiler'

import { coms } from './comMgr'

@Component({
    selector: 'dynamic-com',
    templateUrl: './dynamicModule.template.html',
    styleUrls: [
        './dynamicModule.scss'
    ]
})
export class DynamicComponent {
    @ViewChild('dmroom', { read: ViewContainerRef }) dmRoom: ViewContainerRef;

    private cp: Compiler

    constructor(
        private cfr: ComponentFactoryResolver,
        private ijt: Injector,
    ) {
        this.ijt = ReflectiveInjector.resolveAndCreate(COMPILER_PROVIDERS, ijt)
        this.cp = this.ijt.get(Compiler)
    }

    addComponent() {
        let com = this.cfr.resolveComponentFactory(coms['DY1Component'])
        this.dmRoom.createComponent(com)
    }

    createComponent() {
        this.dmRoom.createComponent(this.createModule())
    }

    createModule(): ComponentFactory<any> {
        @Component({
            template: '动态组件'
        })
        class DyCom { }

        @NgModule({
            declarations: [
                DyCom
            ]
        })
        class DyModule { }

        return this.cp.compileModuleAndAllComponentsSync(DyModule).componentFactories
            .find(comFac => {
                return comFac.componentType === DyCom
            })
    }
}


