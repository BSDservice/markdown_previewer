import React from 'react';
import Editor from './editor';
import Previewer from './previewer';
import {Grid, Paper} from '@material-ui/core';
import AppNav from './AppNav';
import { Player } from '@lottiefiles/react-lottie-player';

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


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      source: initialText,
      lang: 'javascript',
      editor: true,
      viewer: true
    }
    this.handleEditorTextChange = this.handleEditorTextChange.bind(this)
    this.langChange = this.langChange.bind(this)
    this.changeVisibility = this.changeVisibility.bind(this)
  }

  handleEditorTextChange(e){
    this.setState((state) => Object.assign(state, {source: e.target.value}))
  }

  langChange(e){
    this.setState((state) => Object.assign(state, {lang: e.target.value}))
  }

  changeVisibility(status){
    let window = this.changeVisibility.window;
    this.setState((state) => Object.assign(state, {[window]: !state[window]}))
  }

  width(window){
    let width = (this.state.editor && this.state.viewer)? ((window === "editor")?5:6):12
    return width
  }

  componentDidMount(){
    this.animation = <Player autoplay loop mode="normal" 
    src="https://assets3.lottiefiles.com/packages/lf20_hcae8wxn.json" style={{width: "30vh"}} />
  }

  render (){
    return (
      <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spaicing={10}
          style={{ minHeight: '100vh'}}
        >
          <Grid item xs={12}>
            <AppNav handleChange={this.langChange} lang={this.state.lang} changeVisibility={this.changeVisibility} editor={this.state.editor} viewer={this.state.viewer} />
          </Grid>

                   
          {(this.state.editor)? <Grid item md={this.width("editor")} xs={12} >
            <Editor id="editor" onChange={this.handleEditorTextChange} text={this.state.source} />            
          </Grid> : null}
          
          {(this.state.viewer)? <Grid item md={this.width("preview")} xs={12}>
            <Paper style={{padding:'2.5%'}} elevation={7}>
              <Previewer id="preview" data={this.state.source} lang={this.state.lang}/>
            </Paper>
          </Grid> : null}

          {(!this.state.viewer && !this.state.editor)? this.animation: null }
          
        </Grid>
    );
  }
}

export default App;
