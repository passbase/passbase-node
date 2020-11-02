export class IdentityOwner {
  email: string;
  firstName: string;
  lastName: string;

  constructor(obj: any) {
    this.email = obj.email;
    this.firstName = obj.first_name;
    this.lastName = obj.last_name;
  }
}
