import React from 'react';
import Editor from './editor';
import Previewer from './previewer';
import {Grid} from '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      source: 'empty',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      source: e.target.value
    })
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
          <Grid item xs={3}>
            <Editor id="editor" onChange={this.handleChange} style={{width:'100%', maxWwidth:'100%'}}/>
          </Grid>
          <Grid item xs={3}>
            <Previewer id="preview" data={this.state.source}/>
          </Grid>
        </Grid>
    );
  }
}

export default App;
