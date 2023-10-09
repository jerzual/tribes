export class UserModel {
  public userAgent?: string;
  public hostAdress?: string;
  public uuid: string;
  constructor(source?: Partial<UserModel>) {
    Object.assign(this, source);
  }
}
