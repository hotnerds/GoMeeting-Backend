import { UserSignInInputDto, UserSignUpInputDto } from "./LocalUserInputDto";
export interface LocalAuthInterface {
    signUp: (userInput: UserSignUpInputDto) => Promise<string>;
    signIn: (userInput: UserSignInInputDto) => Promise<string>;
}


