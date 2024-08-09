// import token
import dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });

// import libs
import { Bot } from "grammy";
import { limit } from "@grammyjs/ratelimiter";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import fs from "node:fs/promises";

// import libs, not currently used
import { run } from "@grammyjs/runner";
import { Telegraf } from "telegraf";
import { Keyboard } from "telegram-keyboard";
import axios from "axios";
import { message } from "telegraf/filters";

// import dick game and locale for them
import { resize_dick, is_resize_time, auto_register, top } from "./actions.js";
export const locale = JSON.parse(await fs.readFile("./src/locales/ru.json")); // you can change to your language

// using token
const bot = new Bot(process.env.TELEGTAM_TOKEN);

// throttler
const throttler = apiThrottler();
bot.api.config.use(throttler);

// import nsfw files
import nsfwHentaiImg from "./commands/nswf/hentai-img.js";
import nsfwYuriImg from "./commands/nswf/yuri-img.js";
import nsfwTrapImg from "./commands/nswf/trap-img.js";
import nsfwYaoiImg from "./commands/nswf/yaoi-img.js";
import nsfwBDSMImg from "./commands/nswf/bdsm-img.js";
import nsfwRandomImg from "./commands/nswf/random-img.js";
import help from "./commands/other/help.js";
import nsfwTagsImg from "./commands/nswf/tag-img.js";
import nsfwRTagsImg from "./commands/nswf/tag2-img.js";
import nsfwhelp from "./commands/other/nsfw-help.js";
import nsfwTagsYImg from "./commands/nswf/tag-yandere.js"
import nsfwTagsGImg from "./commands/nswf/general-tag.js"

// create commands for nsfw
bot.command("trap", nsfwTrapImg);
bot.command("yaoi", nsfwYaoiImg);
bot.command("hentai", nsfwHentaiImg);
bot.command("yuri", nsfwYuriImg);
bot.command("bdsm", nsfwBDSMImg);
bot.command("random", nsfwRandomImg);
bot.command("start", help);
bot.command("r34tag", nsfwTagsImg); //r34tag
bot.command("Rtag", nsfwRTagsImg); //Rtag
bot.command("Ytag", nsfwTagsYImg); //Ytag
bot.command("tag", nsfwTagsGImg); //random picture from any of available method

// create commands for bot help
bot.command("help", help);
bot.command("nsfw_help", nsfwhelp);

// import and create pornhub
import sendRandomVideoToTelegram from "./commands/nswf/RandomVideo.js";
bot.command('ph_vid', sendRandomVideoToTelegram);

// create commands for dick game and run bot
bot.use(limit());
bot.on("message::bot_command", auto_register);
bot.command("dick", is_resize_time);
bot.command("dick", resize_dick);
bot.command("top", top);
bot.command("ping", (ctx) => {
  ctx.reply(`PONG`);
});

bot.start() // launcher for bot