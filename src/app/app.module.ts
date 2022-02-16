import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// 路由模块
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloParentComponent,HelloChildComponent} from './hello-parent/hello-parent.component';
import { InstructComponent } from './instruct/instruct.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { custmInstruction} from './customInstruction.component';
import { FormComponent } from './form/form.component';
import { LifeCycleComponent,LifecycleChildComponent } from './life-cycle/life-cycle.component';
import { PipeComponent } from './pipe/pipe.component'
import { UserListService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientComponent } from './http-client/http-client.component'
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloEveryoneComponent } from './hello-everyone/hello-everyone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterParamsComponent } from './router-params/router-params.component';
import { RouterFunctionComponent } from './router-function/router-function.component';
// 路由配置
// const appRoutes: Routes = [
//     { path: 'hello', component: HelloWorldComponent,
//       children: [ { path: 'helloeveryone', component: HelloEveryoneComponent },
//                   { path: 'routerparams/:id', component: RouterParamsComponent } ]
//     },

//     // { path: 'helloeveryone', component: HelloEveryoneComponent },
//     // { path: 'routerparams/:id', component: RouterParamsComponent }, 路由参数
//     { path: 'hello2', redirectTo: '/hello', pathMatch: 'full' },//重定向
//     { path: '**', component: PageNotFoundComponent } //通配符
// ];
@NgModule({
  // 声明
  declarations: [
    AppComponent,
    HelloParentComponent,
    HelloChildComponent,
    InstructComponent,
    DataBindComponent,
    custmInstruction,
    FormComponent,
    LifeCycleComponent,
    LifecycleChildComponent,
    PipeComponent,
    UserListComponent,
    HttpClientComponent,
    HelloWorldComponent,
    HelloEveryoneComponent,
    PageNotFoundComponent,
    RouterParamsComponent,
    RouterFunctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)//路由
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
