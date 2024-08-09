import request from "request"
import r34API from "r34.api";
let i=0
const nsfwHentaiImg = async (ctx) => {
    try {
	    i++;
	    if(i==512)
	    {
		    i=2;
	    }
	if(i%2==0)
	    {
        let image = await r34API.rule34(["1girl"]);
        return ctx.replyWithPhoto(image.replace(/"/gi, ""));
	    }
	else
	{
		  let startURL='https://yande.re/post.json?limit=1&&tags=order:random'
		  startURL+=" uncensored"
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
	                                                                                                                                                                       
	                                                                                                                                                                              
	                                                                                                                                                                                  return 0;
	}		
   
    } 
		catch (err) {
    }
};

export default nsfwHentaiImg;
