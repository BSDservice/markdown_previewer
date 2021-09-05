import {TextareaAutosize} from '@material-ui/core';

export default function Editor(props){
    return <TextareaAutosize aria-label="empty textarea" placeholder="Empty" onChange={props.onChange}/>
}