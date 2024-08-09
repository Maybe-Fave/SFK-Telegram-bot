
import r34API from "r34.api";

const nsfwTrapImg = async (ctx) => {
    try {
        let image = await r34API.rule34(["trap"]);
        return ctx.replyWithPhoto(image.replace(/"/gi, ""));
    } catch (err) {
    }
};

export default nsfwTrapImg;
