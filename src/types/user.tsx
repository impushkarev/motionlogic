interface IUser {
  id: number,
  name: string,
  userName?: string
}

export type TUser = IUser | null