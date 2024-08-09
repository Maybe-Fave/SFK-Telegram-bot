const helpText = `
Добро пожаловать.
Здесь указаны все команды бота HUETA
Первая часть бота ето "пиписька-бот", вот его команды:
1. /dick
2. /top
`;


const escapeMarkdownV2 = (text) => {
    return text
        .replace(/([._*[\]()~`>#+\-=|{}!])/g, '\\$1')
        .replace(/(?:\r\n|\r|\n)/g, '\n');
};

// Command handler for /help
const help = async (ctx) => {
    const escapedText = escapeMarkdownV2(helpText);
    return await ctx.reply(escapedText, { parse_mode: 'MarkdownV2' });  // Sending a message
};

export default help;