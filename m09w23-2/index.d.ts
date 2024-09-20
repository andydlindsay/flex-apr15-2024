export interface Pet {
  breed: string;
  name: string;
}

export interface User {
  id?: number;
  username: string;
  password: string;
  pet: Pet;
}
