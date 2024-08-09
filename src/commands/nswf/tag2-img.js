
import Booru from 'booru';

const nsfwRTagsImg = async (ctx) => {
    const sites = ['hypnohub.net', 'danbooru.donmai.us', 'konachan.com', 'gelbooru.com', 'api.rule34.xxx', 'tbib.org', 'xbooru.com', 'rule34.paheal.net', 'derpibooru.org', 'e621.net', 'realbooru.com', 'e926.net', ];
    // list of all available sites

    const tags = ctx.message.text.split(' ').slice(1); // getting tags from message

    // If there are no tags, use an empty array
    if (tags.length === 0) {
        tags.push(' '); // Replace the empty string with the default tag if needed
    }

    for (const site of sites) {
        try {
            const options = { limit: 10000, random: true };
            const posts = await Booru.search(site, tags, options);

            if (posts.length > 0) {
                const imageUrl = posts[0].fileUrl;
                return ctx.replyWithPhoto(imageUrl);
            }
        } catch (err) {
            console.error(`Ошибка при запросе к ${site}:`, err); // If you can't connect to sites
        }
    }
    return ctx.reply("Не удалось найти изображение."); // If couldn't find the image on all sites
};

export default nsfwRTagsImg;