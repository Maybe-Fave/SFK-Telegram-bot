import { locale } from "../index.js";
import { get_top } from "../db.js";
import Mustache from "mustache";

const top_length = 10;

export default function (ctx) {
  let top = get_top(ctx.chat.id).slice(0, top_length);
  let response = "";

  let top_heading = Mustache.render(locale.top, {
    length: top_length,
  });

  response += top_heading;
  response += "\n\n";

  for (let [index, user] of top.entries()) {
    response += `${index + 1}|*${user.name}* — *${user.size}* ${
      locale.cm
    }\n`;
  }
  
  ctx.reply(response, { parse_mode: "markdown" });
}
