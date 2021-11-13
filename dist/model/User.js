import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        index: true
    },
    gender: {
        type: String,
        lowercase: true
    },
    yearOfAdmission: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'guest'
    },
    createAt: {
        type: Date, default: Date.now()
    }
});
const UserModel = mongoose.model('User', UserSchema);
UserSchema.statics.createUserByLocal = (userInput) => {
    const user = new UserModel({
        name: userInput.name,
        email: userInput.email,
        password: userInput.password
    });
    user.save();
};
UserSchema.statics.findById = (_id) => {
    const user = UserModel.findById(_id);
    return user;
};
UserSchema.statics.findByEmail = (email) => {
    const user = UserModel.findOne({ email });
    return user;
};
UserSchema.statics.findByEmail = (name) => {
    const user = UserModel.findOne({ name });
    return user;
};
export default UserModel;
//# sourceMappingURL=User.js.map