import React from 'react';
import Editor from './editor';
import Previewer from './previewer';
import {Grid, Paper} from '@material-ui/core';
import AppNav from './AppNav'

var initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

\`\`\`
lang-py
# and this is multiline code with highlighting syntax of Python

@decorator
def foo(*args, **kargs):
    print('Hello, World')

\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

const FULL_SCREEN = 'FULL SCREEN';
const HIDE = 'HIDE';
const DEFAULT = 'DEFAULT';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      source: initialText,
      lang: 'javascript',
      editor: DEFAULT,
      viewer: DEFAULT
    }
    this.handleEditorTextChange = this.handleEditorTextChange.bind(this)
    this.langChange = this.langChange.bind(this)
    this.changeVisibility = this.changeVisibility.bind(this)
  }

  handleEditorTextChange(e){
    this.setState((state) => (
      {
        source: e.target.value,
        lang: state.lang
      }
    ))
  }

  langChange(e){
    this.setState((state) => (
      {
        source: state.source,
        lang: e.target.value
    }
    ))
  }

  changeVisibility(status){
    let window = this.changeVisibility.window;
    this.setState((state) => Object.assign(state, {[window]: FULL_SCREEN}))
  }

  render (){
    return (
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spaicing={0}
          style={{ minHeight: '100vh'}}
        >
          <Grid item md={6} sm={12} style={{width:'100%'}}>
            <AppNav handleChange={this.langChange} lang={this.state.lang} changeVisibility={this.changeVisibility}/>
          </Grid>

          {(this.state.editor)? <Grid item md={6} sm={12} style={{width:'100%'}}>
            <Editor id="editor" onChange={this.handleEditorTextChange} text={this.state.source} />            
          </Grid> : null}
          
          {(this.state.viewer)? <Grid item md={6} sm={12}>
            <Paper style={{padding:'2.5%'}} elevation={7}>
              <Previewer id="preview" data={this.state.source} lang={this.state.lang}/>
            </Paper>
          </Grid> : null}
          
        </Grid>
    );
  }
}
export {DEFAULT, FULL_SCREEN, HIDE};
export default App;
