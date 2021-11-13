export interface OAuthUserInputDto {
    accessToken: string;
    refreshToken: string;
    profile: {
        displayName: string,
        email: string
    };
};
