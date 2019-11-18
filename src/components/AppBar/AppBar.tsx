import React from 'react'
import { AppBar as MaterialAppBar, Toolbar, Typography } from '@material-ui/core'
import AppBarStyle from './AppBar.style'

const AppBar: React.FC = () => {
    const appBarStyle = AppBarStyle() 
    return (
        <MaterialAppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={appBarStyle.title}>
                    Todo App
                </Typography>
            </Toolbar>
        </MaterialAppBar>
    )
}

export { AppBar }