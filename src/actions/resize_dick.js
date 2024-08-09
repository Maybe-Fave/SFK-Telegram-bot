import Mustache from "mustache";
import { locale } from "../index.js";

import { resize_dick, get_user, get_position } from "../db.js";

const max = 10;
const min = -5;

const grow_factor = 0.85;

function get_random_int_inclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function get_random_dick_resize() {
    let result;

    if (grow_factor >= Math.random()) {
        result = get_random_int_inclusive(1, max)
    } else {
        result = get_random_int_inclusive(-1, min);
    }

    return result;
}

export default async function (ctx) {
    let id = ctx.message.from.id;

    let resize = get_random_dick_resize();
    await resize_dick(id, ctx.chat.id, resize);

    let user = get_user(id, ctx.chat.id);
    let current_position = get_position(id, ctx.chat.id);

    if (resize > 0) {
        ctx.reply(
            Mustache.render(locale.dick_grew_up, {
                name: user.name,
                id: id,
                value: resize,
                new_value: user.size,
                current_position: current_position,
            }),
            { parse_mode: "markdown" }
        );
    } else if (resize < 0) {
        ctx.reply(
            Mustache.render(locale.dick_shruck, {
                name: user.name,
                id: id,
                value: -resize,
                new_value: user.size,
                current_position: current_position,
            }),
            { parse_mode: "markdown" }
        );
    } else {
        throw new Error("Size must not equal 0");
    }
}
