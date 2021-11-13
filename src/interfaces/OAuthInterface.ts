import {OAuthUserInputDto} from './OAuthUserInputDto';

export interface OAuthInterface {
    signIn: (userInput: OAuthUserInputDto) => Promise<string>;
}

