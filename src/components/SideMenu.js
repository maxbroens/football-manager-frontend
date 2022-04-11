import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#4b135a'
    }
})

export default function SideMenu() {

    const classes = useStyles();

    return (
        <div className="sideMenu">
            
        </div>
    )
}
