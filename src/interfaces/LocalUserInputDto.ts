export interface UserSignUpInputDto {
    name: string;
    email: string;
    password: string;
    gender: string;
    univercity: string;
    yearOfAdmission: string;
}

export interface UserSignInInputDto {
    email: string;
    password: string;
}