
import r34API from "r34.api";

const nsfwTagsImg = async (ctx) => {
    let i=1;
    let tag=""
    while (1)
    {   let importTag= ctx.message.text.split(' ')[i]
        console.log(i)
        console.log(importTag)
        if (importTag==undefined) {
            if (i==1) {
                return ctx.reply("Введите тег");  
                break;  
            } else {
              // return 0;
                break;
            }
            
        }
        //const tag = []
        if(i>1)
        tag+=" "
        tag+=importTag
    i++;
    }
    try {
        let image = await r34API.rule34([tag]);
        image.replace(" ","")
        return ctx.replyWithPhoto(image.replace(/"/gi, ""));
    } catch (err) {
        console.error(err);
        return ctx.reply("Произошла ошибка при получении изображения."); // If couldn't find the image on all sites
    }
};

export default nsfwTagsImg;
