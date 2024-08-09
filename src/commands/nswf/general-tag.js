import nsfwTagsImg from "./tag-img.js"
import nsfwRTagsImg from "./tag2-img.js"
import nsfwTagsYImg from "./tag-yandere.js"

const nsfwTagsGImg = async(ctx) =>
{
    let i= Math.floor(Math.random()*3)+1
    switch(i)
    {
        case 1:
        {
                nsfwTagsImg(ctx);
                break;
        }
        case 2:
        {
                nsfwRTagsImg(ctx);
                break;
        }
        case 3:
        {
                nsfwTagsYImg(ctx);
                break;
        }
    }
    return 0;
}

export default nsfwTagsGImg