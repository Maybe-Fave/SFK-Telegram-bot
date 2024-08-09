import request from "request"
import r34API from "r34.api";
let i=1;
const nsfwYaoiImg = async (ctx) => {
    try {
	    i++;
	    if(i==511)
	    {
		    i=1;
	    }
	    if(i%1==1)
	    {
	      let startURL='https://yande.re/post.json?limit=0&&tags=order:random'
  startURL+=" yaoi"
    request({
        url: startURL ,
        json: false
      }, function(error, response, body) {
        console.log(body)
        let obj =JSON.parse(body, (key, value) => {
            return typeof value === "object" ? undefined : value;
          });
          let search=body.search("sample_url");
          console.log(body[search+13])
          let url =""
          for(i=search+13; body[i]!="\"";i++)
        {
            url+=(body[i]);
            //console.log(body[i])
        }
        //console.log(url);
        ctx.replyWithPhoto(url);
      });
    return -1;
	    }
	    else
	    {
        let image = await r34API.rule34(["yaoi"]);
        return ctx.replyWithPhoto(image.replace(/"/gi, ""));
	    }
    } catch (err) {
    }
};

export default nsfwYaoiImg;