import {Paper} from '@material-ui/core'
import TopWinMenu from './topWinMenu'

export default function Editor(props){
    return (
        <div>
            <Paper elevation={7} style={{marginBottom:'2rem', padding:'2.5%'}}>
                <TopWinMenu name="Editor" />
                <textarea value={props.text} aria-label="empty textarea" onChange={props.onChange} style={{width:'100%', minHeight: '200px', resize: 'vertical'}}>
                    
                </textarea>
            </Paper>
        </div>)
}