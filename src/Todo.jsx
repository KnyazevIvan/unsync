import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from "./navbar";


function Todo() {
    const [todo,Settodo] = useState([{name: 'Пострать',check:false, id:0,style:{textDecoration:'none'}}])
    const [dod,getDod] = useState('')
    const [count,setCount] = useState(0)


   
    useEffect(()=> {

        const raw = localStorage.getItem('todo')
        if (!null)
        {
        Settodo(JSON.parse(raw))
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('todo',JSON.stringify(todo))
    },[todo]
)

   
    console.log(todo)

    let addTodo = event => {
        if (event.key === 'Enter')
        {

            Settodo([
                ...todo,
                {
                    name: dod,
                    check: false,
                    id: Date.now(),
                    style:{textDecoration:'none'}
                }]
            )
           
            getDod('')
        }

    }

    let changeBox = (id,check)=> {
        let newArr = [...todo];
        let  newnewArr =  newArr.map(el=> {
                if (el.id===id) {
                    if (check){
                        return {...el,check:false,style: {textDecoration:'none'} }
                    }
                    else {  return {...el,check:true,style: {textDecoration:'line-through'} }
                    }
                }
                return el;
            }
        )
        console.log(id)
        Settodo(newnewArr)
    }

    let deletaray = (id)=> {

        let newArr = todo.filter(el=> el.id!=id)
        Settodo(newArr)
    }

    let newarray = todo.map(el =>
        <div className='todo'>

            <label >

                <input  className='Hui' type="checkbox" onChange={()=>{changeBox(el.id,el.check)}} checked={el.check} />


                <span style={el.style} > {el.name}  </span>  <a  onClick={()=> {deletaray(el.id)}} className="waves-effect waves-light btn">Удалить</a> </label>


        </div>
    )


    return (
        <div>
            <div className="App">

                <div className='H2'>
                    <h2>Дела на сегодня </h2>
                </div>
                <div className='Container'>
                    <input onKeyPress={addTodo}  value={dod}  onChange={e => getDod(e.target.value)} type='text' />
                    {newarray}



                </div>
            </div>
        </div>
    );
}

export default Todo;
