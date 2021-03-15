import React from 'react'

export default props => (
    <div role='form' className='todoForm'>
        <div className="col-xs-12 col-sm-9 col-md-10" >
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'/>
        </div>
        <button className='btn btn-primary'>
            <i className='fa fa-plus'></i>
        </button>
    </div>
)