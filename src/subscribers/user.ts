import { EventSubscriber, On } from "event-dispatch";
import events from './events';
import winston from 'winston';
import { Inject } from "typedi";
import {UserRepository} from '../repositories/UserRepository.js'

@EventSubscriber()
export default class UserSubscriber {
    constructor(
        @Inject('logger') private logger: winston.Logger
    ) {}

    @On(events.user.signIn)
    public async onUserSignIn({email}: {email:string}): Promise<string> {
        return "";
    }
}