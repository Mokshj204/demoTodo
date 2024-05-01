import { useState } from 'react'
import About from './About'
import { DeleteTodo, DeleteTodosById, getAllTodo, postTodo, UpdateTodosById, UpdateTodo } from '../actions/conBack'

const Home = () => {

    const [data,setData]=useState({
        title:' ',  
        description:' ',
        id:' '
    })

    const [alltodos,setAllTodos] = useState([])
    const {title,description,id}=data 

    const handleChange= name =>event => {
        setData ({...data,[name]:event.target.value})
    }

    const onSubmit = (todo) => {
      postTodo(todo).then(timepass => {
        console.log(timepass)
        onFetch();
      })
    }

    const onFetch = () => {
      getAllTodo().then(timepass => {
        setAllTodos(timepass.response)
      })
    }

    const onDelete = (id) => {
      DeleteTodo(id).then(timepass => {
        console.log();

        onFetch();
      })
    }

    const onUpdateSingleTodoForForm = (title,description,id) => {
      setData({...data,title:title,description:description,id:id})
      
  
    }

    const onUpdate = (todo) => {
      UpdateTodo(todo).then(timepass => {
        console.log(timepass)
        onFetch();
      })
    }


    return(
        <div>
         {/* {id}
            {title}
            {description}*/}
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input  value={title} type="text" className="form-control"  onChange={(handleChange('title'))}   />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <input type="text" className="form-control"  value={description} onChange={(handleChange('description'))}/>
              </div>
          <div className="form-group form-check">
        </div>
</form>
<button className="btn btn-primary" onClick={() => onSubmit({title,description})}>Submit</button>  
<button className="btn btn-primary" onClick={() => onFetch()}>Fetch</button> 
<button className="btn btn-primary" onClick={() => onUpdate({title,description,id})}>Update</button> 

<div className='d-flex flex-wrap col-8'>
  {alltodos.map((t,i)=>(
  <div key={i}>
    <div className='col-10'>
      <span>
        {t.title}
      </span>
      <span>
        {t.description}
      </span>
    </div>

    <div className='col-4'>
      <button onClick={()=> onDelete((t._id))}>Delete Todo</button>

      <button onClick={()=> onUpdateSingleTodoForForm(t.title,t.description,t._id)}>Update Todo</button>

    </div>
  </div>

))}</div>
        </div>
    )

    
  }



export default Home