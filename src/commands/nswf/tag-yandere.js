import request from "request"

const attempts=150

const nsfwTagsYImg= async (ctx) =>{
      try{          let startURL='https://yande.re/post.json?limit=1&&tags=order:random'
		  let i=1;
    
    while (1)
    {   let importTag= ctx.message.text.split(' ')[i]
        console.log(i)
        console.log(importTag)
        if (importTag==undefined) {
            if (i==1) {
                return ctx.reply("Введите тег");  
                break;  
            } else {
              //  return ctx.reply("іДі нахуй");
                break;
            }
            
        }
        //const tag = []
        startURL+=" "+importTag
    i++;
    }
    console.log(startURL);
	  let k=1;
    while(k<attempts)  
      {  
    request({
              url: startURL ,
              json: false
              }, function(error, response, body) {
              console.log(body)
              let obj =JSON.parse(body, (key, value) => {
             // return typeof value === "object" ? undefined : value;
                                    });
                                    if (body[2]==undefined)
                                      return 0//ctx.reply("Не найдено");
              let search=body.search("sample_url");
              console.log(body[search+13])
              let url =""
              for(i=search+13; body[i]!="\"";i++)
                                                    {
                url+=(body[i]);
                                                    }
               ctx.replyWithPhoto(url);
              // ctx.reply(url);
                k=attempts+2;
                                                  });
                                                  await new Promise(r => setTimeout(r, 250));
                                                  k++
                                                }
            if(k==attempts)
            {
            ctx.reply("Не найдено")  
            return 0;
            }
                                                }
catch(err)
{}
};
export default nsfwTagsYImg
