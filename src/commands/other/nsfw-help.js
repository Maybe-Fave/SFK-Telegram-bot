
const helpText = `
Добро пожаловать.
Здесь указаны все команды бота HUETA
Первая часть бота ето "пиписька-бот", вот его команды:
1. /dick
2. /top
Вторая часть бота ето "NSFW", вот его команды:
1. /hentai
Если вы хотите по тегу:
/tag [tag] 
или /Rtag [tag]
или /Ytag [tag]
или /r34tag [tag]
2. /trap
3. /yaoi
4. /yuri
5. /bdsm
6. /random
Третья часть бота ето "PH", вот его команда:
1. /ph_vid
`;

const escapeMarkdownV2 = (text) => {
    return text
        .replace(/([._*[\]()~`>#+\-=|{}!])/g, '\\$1')
        .replace(/(?:\r\n|\r|\n)/g, '\n');
};

// // Command handler for /nsfw_help
const nsfwhelp = async (ctx) => {
    const escapedText = escapeMarkdownV2(helpText);
    await ctx.reply(escapedText, { parse_mode: 'MarkdownV2' });  // Sending a message
};

export default nsfwhelp;
