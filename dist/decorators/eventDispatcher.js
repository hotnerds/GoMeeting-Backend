import { EventDispatcher as EventDispatcherClass } from "event-dispatch";
import { Container } from 'typedi';
export function EventDispatcher() {
    return (object, propertyName, index) => {
        const eventDispatcher = new EventDispatcherClass();
        Container.registerHandler({ object, propertyName, index, value: () => eventDispatcher });
    };
}
export { EventDispatcher as EventDispatcherInterface } from 'event-dispatch';
//# sourceMappingURL=eventDispatcher.js.map