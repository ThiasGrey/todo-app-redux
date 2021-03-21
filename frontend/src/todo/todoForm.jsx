import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHender = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 9'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa' 
                onChange={props.handleChange}
                value={props.description}
                onKeyUp={keyHender}
                />
            </Grid>
            <Grid cols='12 3 3'>
    
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='close' onClick={props.handleClear} />
            </Grid>
        </div>
    )
}