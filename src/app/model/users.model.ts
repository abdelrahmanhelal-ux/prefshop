export class Users {
  public ID: number;
  public Firstname: string;
  public Lastname: string;
  public Usernames: string;
  public Email: string;
  public Password: string;
  public Repassword: string;

  constructor(ID: number, Firstname: string, Lastname: string, Usernames: string, Email: string,Password: string, Repassword: string) {
    this.ID = ID;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Usernames = Usernames;
    this.Email = Email;
    this.Password = Password;
    this.Repassword = Repassword;

  }

}
