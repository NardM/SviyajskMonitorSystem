"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng2_signalr_1 = require("ng2-signalr");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const ConnectionService_1 = require("./ConnectionService");
const MainComponent_1 = require("./MainComponent");
const CreateTreeComponent_1 = require("./CreateTreeComponent");
const TreeTypeComponent_1 = require("./TreeTypeComponent");
const ElementsComponent_1 = require("./ElementsComponent");
const ImgComp_1 = require("./ImgComp");
function createConfig() {
    const c = new ng2_signalr_1.SignalRConfiguration();
    c.hubName = 'TreeElementHub';
    c.url = "/signalr";
    // c.qs = { user: 'donald' };
    // c.url = 'http://ng2-signalr-backend.azurewebsites.net/';
    c.logging = true;
    return c;
}
exports.createConfig = createConfig;
let TreesApp = class TreesApp {
};
TreesApp = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule, ng2_signalr_1.SignalRModule.forRoot(createConfig)],
        providers: [ConnectionService_1.ConnectionService],
        declarations: [MainComponent_1.MainComponent, CreateTreeComponent_1.CreateTreeComponent, TreeTypeComponent_1.TreeTypeComponent, ImgComp_1.ImagesComponent, ElementsComponent_1.ElementsComponent],
        bootstrap: [MainComponent_1.MainComponent]
    })
], TreesApp);
exports.TreesApp = TreesApp;
//# sourceMappingURL=TreeModule.js.map