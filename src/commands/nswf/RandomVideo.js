
import axios from 'axios';
import cheerio from 'cheerio';

const base_url = 'https://pornhub.com';

// RANDOM VIDEO
async function get(url, no_cache = false) {
    const headers = {
        'User-Agent': 'A Telegram bot inspired in cybits/cybot',
    };
    if (no_cache) {
        headers['Cache-Control'] = 'private,max-age=0';
    }
    const response = await axios.get(base_url + url, { headers });
    return response;
}

async function getRandomTitle() {
    const r = await get('/random');
    const $ = cheerio.load(r.data);
    const last_url = r.request.res.responseUrl;
    const title = $('title').text().split(' - Pornhub.com')[0];
    return { title, last_url };
}

const sendRandomVideoToTelegram = async (ctx) => {
    try {
        const { title, last_url } = await getRandomTitle();
        const message = `Good morning! ;) \n\n${last_url}`;

        // SEND TO TELEGRAM
        await ctx.reply(message);
    } catch (err) {
        console.error('Error sending message:', err);
    }
};

export default sendRandomVideoToTelegram;