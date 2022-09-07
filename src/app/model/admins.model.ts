export class Admins {
  public ID: number;
  public Username: string;
  public Email: string;
  public Password: string;

  constructor(ID: number, Username: string, Email: string, Password: string) {
    this.ID = ID;
    this.Username = Username;
    this.Email = Email;
    this.Password = Password;

  }
}
