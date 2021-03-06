import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UserComponent} from "./user/all/user.component";
import {UserSearchComponent} from "./user/search/user-search.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {PictureAllComponent} from "./picture/all/picture-all.component";
import {PictureComponent} from "./picture/current/picture.component";

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'users', component: UserComponent },
    { path: 'search', component: UserSearchComponent },
    { path: 'pictures/all', component: PictureAllComponent },
    { path: 'pictures/:id', component: PictureComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }