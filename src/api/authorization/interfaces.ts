export interface IAccessToken {
	expiresIn: string,
	token: string
}

export interface ITokens {
	accessToken: IAccessToken,
	refreshToken: string
}

export interface IUser {
	_id: string,
	email: string,
	firstName: string,
	lastName: string,
	nickName: string,
	password: string,
	mobile: number,
	birthday: Date,
	avatar: string,
	createAt: Date
}

export interface ISignInResponse {
  tokens: ITokens,
  user: IUser
}
