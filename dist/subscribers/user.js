var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { EventSubscriber, On } from "event-dispatch";
import events from './events';
import winston from 'winston';
import { Inject } from "typedi";
let UserSubscriber = class UserSubscriber {
    constructor(logger) {
        this.logger = logger;
    }
    async onUserSignIn({ email }) {
        return "";
    }
};
__decorate([
    On(events.user.signIn),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserSubscriber.prototype, "onUserSignIn", null);
UserSubscriber = __decorate([
    EventSubscriber(),
    __param(0, Inject('logger')),
    __metadata("design:paramtypes", [Object])
], UserSubscriber);
export default UserSubscriber;
//# sourceMappingURL=user.js.map