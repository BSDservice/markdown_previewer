import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coy} from 'react-syntax-highlighter/dist/esm/styles/prism'
import TopWinMenu from './topWinMenu'

export default function Previewer(props){
    return (
      <div>
        <TopWinMenu name="Previewer" />
        <ReactMarkdown children={props.data} remarkPlugins={[remarkGfm]}
        components={{
            code({node, inline, className, children, ...props}) {
              const match = /lang-(\w+)/.exec(children || '')
              console.log(props.lang)
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$|lang-(\w+)/, '')}
                  style={coy}
                  language={match[1]||props.lang}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
            img({node, inline, className, children, ...props}) {
                return (
                  <img className={className} {...props} style={{width:'100%'}}/>
                )
              }
          }} />
          </div>
    );
}