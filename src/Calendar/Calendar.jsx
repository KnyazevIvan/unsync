import React, { useState, useEffect } from 'react'
import spring from '../Весна.jpg'
import s from './Calendar.module.css'

function Calendar() {


  const [block, setBlock] = useState([

    { styles: { color: 'silver' }, styless: { boxShadow: '0 0 1px', order: 0 }, styles: { backgroundColor: '#f5f5f5' }, num: 24, id: 0, toggle: false, text: [{ name: 1, id: 0 }, { name: 2, id: 1 }, { name: 3, id: 2 }] },
    { style: { color: 'silver' }, styless: { boxShadow: '0 0 1px black', order: 1 }, styles: { backgroundColor: '#f5f5f5' }, num: 25, id: 1, toggle: false, text: [{ name: 1, id: 0 }] },
    { style: { color: 'silver' }, styless: { boxShadow: '0 0 1px', order: 2 }, styles: { backgroundColor: '#f5f5f5' }, num: 26, id: 2, toggle: false, text: [] },
    { style: { color: 'silver' }, styless: { boxShadow: '0 0 1px', order: 3 }, styles: { backgroundColor: '#f5f5f5' }, num: 27, id: 3, toggle: false, text: []  },
    { style: { color: 'silver' }, styless: { boxShadow: '0 0 1px', order: 4 }, num: 28, id: 4, text: []  },
    { style: { color: 'silver' }, styless: { boxShadow: '0 0 1px', order: 5 }, styles: { backgroundColor: '#f5f5f5' }, num: 29, id: 5, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 6 }, styles: { backgroundColor: '#f5f5f5' }, num: 1, id: 6, toggle: false, text: [] },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 7 }, styles: { backgroundColor: '#f5f5f5' }, num: 2, id: 7, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 8 }, styles: { backgroundColor: '#f5f5f5' }, num: 3, id: 8, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 9 }, styles: { backgroundColor: '#f5f5f5' }, num: 4, id: 9, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 10 }, styles: { backgroundColor: '#f5f5f5' }, num: 5, id: 10, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 11 }, styles: { backgroundColor: '#f5f5f5' }, num: 6, id: 11, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 12 }, styles: { backgroundColor: '#f5f5f5' }, num: 7, id: 12, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 13 }, styles: { backgroundColor: '#f5f5f5' }, num: 8, id: 13, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 14 }, styles: { backgroundColor: '#f5f5f5' }, num: 9, id: 14, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 15 }, styles: { backgroundColor: '#f5f5f5' }, num: 10, id: 15, toggle: false, text: [{ name: 'Посрал', id: 0 }, { name: 'Поспал', id: 1 }] },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 16 }, styles: { backgroundColor: '#f5f5f5' }, num: 11, id: 16, toggle: false, text: [{ name: 1, id: 0 }, { name: 'Телек посмотрел', id: 1 }] },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 17 }, styles: { backgroundColor: '#f5f5f5' }, num: 12, id: 17, toggle: false, text: [{ name: 'в магазин сходил', id: 0 }, { name: 'Хуйней страдал', id: 1 }] },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 18 }, styles: { backgroundColor: '#f5f5f5' }, num: 13, id: 18, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 19 }, styles: { backgroundColor: '#f5f5f5' }, num: 14, id: 19, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 20 }, styles: { backgroundColor: '#f5f5f5' }, num: 15, id: 20, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 21 }, styles: { backgroundColor: '#f5f5f5' }, num: 16, id: 21, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 22 }, styles: { backgroundColor: '#f5f5f5' }, num: 17, id: 22, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 23 }, styles: { backgroundColor: '#f5f5f5' }, num: 18, id: 23, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 24 }, styles: { backgroundColor: '#f5f5f5' }, num: 19, id: 24, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 25 }, styles: { backgroundColor: '#f5f5f5' }, num: 20, id: 25, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 26 }, styles: { backgroundColor: '#f5f5f5' }, num: 21, id: 26, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 27 }, styles: { backgroundColor: '#f5f5f5' }, num: 22, id: 27, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 28 }, styles: { backgroundColor: '#f5f5f5' }, num: 23, id: 28, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 29 }, styles: { backgroundColor: '#f5f5f5' }, num: 24, id: 29, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 30 }, styles: { backgroundColor: '#f5f5f5' }, num: 25, id: 30, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 31 }, styles: { backgroundColor: '#f5f5f5' }, num: 26, id: 31, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 32 }, styles: { backgroundColor: '#f5f5f5' }, num: 27, id: 32, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 33 }, styles: { backgroundColor: '#f5f5f5' }, num: 28, id: 33, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 34 }, styles: { backgroundColor: '#f5f5f5' }, num: 29, id: 34, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 35 }, styles: { backgroundColor: '#f5f5f5' }, num: 30, id: 35, toggle: false, text: []  },
    { style: { color: '#26a69a' }, styless: { boxShadow: '0 0 1px', order: 36 }, styles: { backgroundColor: '#f5f5f5' }, num: 31, id: 36, toggle: false, text: []  }])

    const [choosen, setChoosen] = useState(0)
    const [order, getOrder] = useState(0)
    const [btntoggle, setBtntoggle] = useState(false)
    const [inputtext,setInputtext] = useState('')


    
  const getHours = () => {
    const currentHours = new Date().getDay();
    return currentHours;
  }






 
useEffect(()=> {
  
    let raw = localStorage.getItem('block')
    setBlock(JSON.parse(raw))
    // choose(0)


   
      
  },[])


  useEffect(()=> {
    localStorage.setItem('block',JSON.stringify(block))

  },[block])
  
  let choose = (id) => {
    let newA = block.map(el => {
      if (el.id == id) {

        setChoosen(id)

        if (el.toggle) {

          return { ...el, styless: { boxShadow: '0 0 8px', zIndex: '3', order: el.id }, toggle: false }
        }
        if (!el.toggle) {
          return { ...el, styless: { boxShadow: '0 0 8px', zIndex: '3', order: el.id }, toggle: true }
        }
      }
      else return { ...el, styless: { boxShadow: '0 0 1px', zIndex: '0', order: el.id }, toggle: false }
    })
    setBlock(newA)
    getOrder(id)

  }




  let led = (id) => {
    let newArr = block.map(el => {
    

      if (el.id == id) {
        return { ...el, styles: { backgroundColor: '#e2e2e2' } }
      }
      if (id!=13& el.id==new Date().getDate()+5) {
        return { ...el, styles: { backgroundColor: '#e8fde7' }}
      }

      if (id < 7 & el.id < 7) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      if ((id < 14 & el.id < 14) & (id >= 7 & el.id >= 7)) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      if ((id < 21 & el.id < 21) & (id >= 14 & el.id >= 14)) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      if ((id < 28 & el.id < 28) & (id >= 21 & el.id >= 21)) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      if ((id < 35 & el.id < 35) & (id >= 28 & el.id >= 28)) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      if ((id < 37 & el.id < 37) & (id >= 35 & el.id >= 35)) {
        return { ...el, styles: { backgroundColor: '#ebebeb' } }
      }
      

      return { ...el, styles: { backgroundColor: '#f5f5f5' } }
    })
    setBlock(newArr)
  }

  let clearled = (id) => {
 

    let newArr = block.map(el => {
 

      if (el.id==new Date().getDate()+5) {
        
          return { ...el, styles: { backgroundColor: '#e8fde7' }}
        
      }

      if (el.id >= 0) {
        return { ...el, styles: { backgroundColor: '#f5f5f5' } }


      }
      return el
    })
    setBlock(newArr)
    
  }


  let deletaray = (id,id1) => {

    let newArr = block.map(el => {
      console.log(id,id1)
      if (el.id == id) {
        let newel = el.text.filter(el => el.choosen != id1)
        console.log(newel)
        return { ...el, text: newel }

      }
      return el
    })
    setBlock(newArr)
  }



  let addPost = (choosen) => {


    let newArr = block.map(el => {
      setBtntoggle(false)
   
      if (el.id == choosen) {
     
        let newel = [...el.text, { name: inputtext, choosen: Date.now() }]
        console.log(newel)
        return { ...el, text: newel }

      }
      return el
    })

    setBlock(newArr)

  }

  let blockArray = block.map(el =>

    <div style={el.styless} >
      <div onMouseLeave={() => { clearled(el.id) }} onMouseEnter={() => { led(el.id) }} onClick={() => choose(el.id)} style={el.styles} className={s.block}> <span style={el.style}>{el.num}</span>
        {el.text != '' ? <div>   <div className={s.indecate2}> <span> {el.text.length} </span> </div> </div> : null}
      </div>


    </div>


  )




  return (
    <div className={s.wrapper}>
      <img className={s.img} src={spring} alt="" />
      <div className={s.floatbutton}>
        <a onClick={() => setBtntoggle(!btntoggle)} className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

      </div>
      {btntoggle ? <div className={s.inputBar}>
     <div className={s.pidor}>  {choosen<7? <div>{choosen+24} марта </div>:<div>{choosen-5} марта </div>}   
          <input onChange={event => setInputtext(event.target.value)} placeholder='Введите событие' type="text" /> 
          <div className={s.addbutton}> <a onClick={()=> addPost(choosen)} className="waves-effect waves-light btn" >Добавить</a>  </div>
          <div className={s.closebutton}> <a onClick={()=> setBtntoggle(false)} className="waves-effect waves-light btn" >Отмена</a>  </div>
          </div></div> : null}

      <div className={s.main}>
        <div className={s.block1}> <span> Понедельник </span></div>
        <div className={s.block1}>Вторник</div>
        <div className={s.block1}>Среда</div>
        <div className={s.block1}>Четверг</div>
        <div className={s.block1}>Пятница</div>
        <div className={s.block1}>Суббота</div>
        <div className={s.block1}>Восскресенье</div>
        {blockArray}
        {order <= 6 & block[order].toggle & block[order].text !=  [] ? <div style={{ order: 6 }} className={s.hiddenbar}> <div className={s.hiddenbar1} >   {block[order].text.map(el => <div className={s.hiddenbar2}> <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order,el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
        {order <= 13 & order > 5 & block[order].toggle & block[order].text != []? <div style={{ order: 13 }} className={s.hiddenbar}> <div className={s.hiddenbar1} > {block[order].text.map(el => <div className={s.hiddenbar2}>   <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order, el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
        {order <= 20 & order > 13 & block[order].toggle & block[order].text != []? <div style={{ order: 20 }} className={s.hiddenbar}><div className={s.hiddenbar1} > {block[order].text.map(el => <div className={s.hiddenbar2}>  <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order, el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
        {order <= 27 & order > 20 & block[order].toggle & block[order].text != [] ? <div style={{ order: 27 }} className={s.hiddenbar}><div className={s.hiddenbar1} > {block[order].text.map(el => <div className={s.hiddenbar2}>   <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order, el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
        {order <= 34 & order > 27 & block[order].toggle & block[order].text != [] ? <div style={{ order: 34 }} className={s.hiddenbar}><div className={s.hiddenbar1} > {block[order].text.map(el => <div className={s.hiddenbar2}>   <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order,el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
        {order > 34 & block[order].toggle & block[order].text != [] ? <div style={{ order: 41 }} className={s.hiddenbar}> <div className={s.hiddenbar1} > {block[order].text.map(el => <div className={s.hiddenbar2}>   <span onClick={() => addPost(order)}> {el.name} </span> <i class="material-icons" onClick={() => { deletaray(order, el.choosen) }} >delete</i>  </div>)}  </div> </div> : null}
       
      </div>
    </div>
  )

}

export default Calendar
