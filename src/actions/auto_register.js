import { register_user, UserAlreadyExistsError } from "../db.js";

export default async function (ctx, next) {
  let author = ctx.message.from;
  let id = author.id;

  try {
    let name = author.first_name;

    if (author.last_name) {
      name += ` ${author.last_name}`;
    }

    await register_user(id, ctx.chat.id, name);
  } catch (e) {
    if (!(e instanceof UserAlreadyExistsError)) {
      throw e;
    }
  }

  next();
}
