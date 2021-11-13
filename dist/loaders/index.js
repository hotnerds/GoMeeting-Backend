import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';
import dependencyInjector from './dependencyInjector.js';
export default async ({ expressApp }) => {
    try {
        mongooseLoader();
        dependencyInjector();
        await expressLoader({ app: expressApp });
    }
    catch (e) {
        console.log(e);
    }
};
//# sourceMappingURL=index.js.map