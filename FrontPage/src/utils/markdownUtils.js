import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import mdEmoji from 'markdown-it-emoji'
import mdHighlightjs from 'markdown-it-highlightjs'


const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
})
md.use(mdContainer).use(mdEmoji).use(mdHighlightjs)

export { md }
