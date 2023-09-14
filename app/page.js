"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  
  const submitHandler =(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{task,desc}])
    settask("")
    setdesc("")
  }
  
  let renderTask = <h1>No Task To Complete</h1>

  const deleteTask =(i)=>{
    const copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }

  if(mainTask.length>0){
    renderTask = mainTask.map((t , i) =>{
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center m-4 mb-5 w-2/3'> 
          <h1 className='text-2xl justify-between font-semibold'>{t.task}</h1>
          <h3 className='text-xl font-semibold m-5'>{t.desc}</h3>
        </div>
        <button onClick = {
          ()=>{
            deleteTask(i)
          }
        }
        className="bg-rose-600 px-4 py-2 font-bold text-xl text-white rounded-md">Delete</button>
        </li>
        
      );   
    });

  }

  
  return (
    <>
    <h1 className='bg-black w-full text-white h-12 font-bold text-center text-2xl p-2'>My ToDo List</h1>
    <form className='flex' onSubmit={submitHandler}>

      <input placeholder='Enter Task Here' 
      className='border-zinc-800 m-3 border-2 text-center px-2 py-3 rounded-xl'
      value={task}
      onChange={(e)=>{
        settask(e.target.value)
      }}
      >
      </input>
      
      <input placeholder='Enter Description Here'
       className='border-zinc-800 m-3 border-2 text-center px-2 py-3 rounded-xl'
       value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }}>
      </input>
      
      <button className='bg-black text-white text-2xl font-bold m-5 p-3 rounded'>Add Task</button>
    </form>
    <hr/>

    <div className='bg-slate-200 p-8 border-1'>
      <ul>
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default page                   