
import r34API from "r34.api";

const nsfwRandomImg = async (ctx) => {
    try {
        let image = await r34API.rule34([""]);
        return ctx.replyWithPhoto(image.replace(/"/gi, ""));
    } catch (err) {
    }
};

export default nsfwRandomImg;