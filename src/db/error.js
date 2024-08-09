export class DatabaseError extends Error {
  constructor(message) {
    super(message);
  }
}

export class UserDoesNotExistError extends DatabaseError {
  constructor(id) {
    super(`User ${id} does not exist`);
    this.id = id;
  }
}

export class UserAlreadyExistsError extends DatabaseError {
  constructor(id) {
    super(`User ${id} already exists`);
    this.id = id;
  }
}

export class ChatDoesNotExistError extends DatabaseError {
  constructor(id) {
    super(`Chat ${id} does not exist`);
    this.id = id;
  }
}
