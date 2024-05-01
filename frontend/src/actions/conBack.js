//calling api POST 

export const postTodo = (todo) => {
    return fetch('http://localhost:4000/todo/create-todos',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(todo)
    }).then((response) =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}




export const getAllTodo = () => {
    return fetch('http://localhost:4000/todo/get-all-todos',{
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}



export const DeleteTodo = (id) => {
    return fetch(`http://localhost:4000/todo/delete-todos-by-id/${id}`,{
        method: 'DELETE',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}




export const UpdateTodo = (getid) => {
    let obj = {
        title: getid.title,
        description:getid.description,
    }
    return fetch(`http://localhost:4000/todo/updatetodosbyid/${getid.id}`,{
        method: 'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    body:JSON.stringify(obj)
    }).then((response) =>{
        return response.json()
    }).catch(error =>{
        console.log(error)
    })
}