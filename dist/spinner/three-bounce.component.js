var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
var ThreeBounceComponent = (function (_super) {
    __extends(ThreeBounceComponent, _super);
    function ThreeBounceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'three-bounce-spinner';
        _this.childClass = 'bounce';
        _this.numItems = 3;
        return _this;
    }
    return ThreeBounceComponent;
}(SpinnerComponent));
ThreeBounceComponent = __decorate([
    Component({
        selector: 'sk-three-bounce',
        styles: ["\n    .three-bounce-spinner {\n      margin: 25px auto;\n      width: 70px;\n    }\n    \n    .three-bounce-spinner > div {\n      display: inline-block;\n      width: 18px;\n      height: 18px;\n      \n      border-radius: 100%;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    }\n    \n    .three-bounce-spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s;\n    }\n    \n    .three-bounce-spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s;\n    }\n    \n    @-webkit-keyframes sk-bouncedelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1.0);\n      }\n    }\n    \n    @keyframes sk-bouncedelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n      }\n    }\n  "],
        template: SpinnerTemplate
    })
], ThreeBounceComponent);
export { ThreeBounceComponent };
//# sourceMappingURL=three-bounce.component.js.map