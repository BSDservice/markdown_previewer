/* import MinimizeTwoToneIcon from '@material-ui/icons/Minimize';
import MaximizeTwoToneIcon from '@material-ui/icons/Maximize';
import CloseTwoToneIcon from '@material-ui/icons/Close'; */
import {/* IconButton, Tooltip, */ Typography} from '@material-ui/core'

let style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        borderBottom:'solid gray 1px',
        marginBottom: '0.5rem'
    },
}

export default function TopWindowMenu(props){ 

    return (<div style={style.container}>
        <Typography variant="h6" component="h6">{props.name}</Typography>
        {/* <span>
            <Tooltip title="Minimize" aria-label="Minimize">
                <IconButton color="secondary" aria-label="Minimize">
                    <MinimizeTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Maximize" aria-label="Maximize">
                <IconButton color="secondary" aria-label="Maximize">
                    <MaximizeTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Close" aria-label="Close">
                <IconButton color="secondary" aria-label="Close">
                    <CloseTwoToneIcon/>
                </IconButton>
            </Tooltip>      
        </span> */}
        </div>)
}