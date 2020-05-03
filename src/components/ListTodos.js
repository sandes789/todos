import React from 'react'
// import Json from './JsonTodos'

const Lists = ({ todoslist, deleteAction, editAction, inputAction }) => {
    
    const Listtodos = todoslist.length ? (
        todoslist.map((list, index) => {
            return (
                <div className='list-item' key={list.id}>
                    <p>{index + 1}. </p>
                    <input className={`input-outline ${list.editable ? 'active' : ''}`} type="text" value={list.title} onChange={(e) => { inputAction(e.target.value, list.id) }} />
                    <div className="action-button">
                        <button onClick={() => { editAction(list.editable, list.id) }} className='edit-btn'>Edit</button>
                        <button onClick={() => { deleteAction(list.id) }} className='delete-btn'>Delete</button>
                    </div>
                </div>
            )
        })
    ) : (
            <p className="red-txt">Add Some Todo's List</p>
        )
    return (
        <div className="list-todos">

            {Listtodos}
        </div>
    )
}

export default Lists