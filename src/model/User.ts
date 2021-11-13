import mongoose, { Schema, SchemaTypes} from 'mongoose';
import {UserSignInInputDto, UserSignUpInputDto } from '../interfaces/LocalUserInputDto.js';
import {UserModelInterface} from '../interfaces/UserModelInterface.js';


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

    univercity: {
        type: String,
        required: true
    },
    
    yearOfAdmission: {
        type: String,
        required: true  
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'guest'
    },
    createAt: {
        type: Date, default: Date.now()
    }
    
});

const UserModel = mongoose.model<mongoose.Document & UserModelInterface>('User', UserSchema);

UserSchema.statics.createUserByLocal = (userInput: UserSignUpInputDto)  => {
    const user = new UserModel({
        name: userInput.name,
        email: userInput.email,
        password: userInput.password
    });

    user.save();
}

UserSchema.statics.findById = (_id: mongoose.Types.ObjectId) => {
    const user = UserModel.findById(_id);
    return user;
}

UserSchema.statics.findByEmail = (email: string) => {
    const user = UserModel.findOne({email});

    return user;
}

UserSchema.statics.findByEmail = (name: string) => {
    const user = UserModel.findOne({name});
    return user;
}

export default UserModel;
