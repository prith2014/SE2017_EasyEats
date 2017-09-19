"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FoodService = (function () {
    function FoodService() {
        this.FoodMenu = {
            Hamburger: {
                price: 5.35
            },
            Drink: {
                price: 2.99
            },
            Fries: {
                price: 3.99
            },
            IceCream: {
                price: 4.99
            }
        };
    }
    return FoodService;
}());
FoodService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FoodService);
exports.FoodService = FoodService;
//# sourceMappingURL=Menu.server.js.map