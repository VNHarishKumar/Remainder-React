import './NavBar.scss';
import React,{useState} from 'react';



const NavBar = function()
{
    const [show,setShow]=useState(false);
    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [schedule,setSchedule]=useState('');
    const [startdate,setDate]=useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const schedule={startdate};
        const todoData = {id,title,description,schedule};
        // const schedule={startdate};
        // console.log(todoData);
        
        // post request

        fetch('http://localhost:9000/todos',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    //   props.onSubmit(todoData);


        setId('');
        setTitle('');
        setDescription('');
        setSchedule('');
        setDate('');
        window.location.reload();
    };

    return(
        <div className='mainbar'>
             <button className='btndiv' onClick={()=>setShow(!show)} > ADD</button>
        {
        show&&
         (
          <form className='formdiv' onSubmit={handleSubmit}  >
            <br></br>
             <lable>ID</lable><br></br><input type='text' value={id} onChange={(event) => setId(event.target.value)} required/><br></br>
             <label>Title </label><br></br><input type='text' value={title} onChange={(event) => setTitle(event.target.value)} required/> <br></br>
             <label>Description</label><br></br><input type='text' value={description} onChange={(event) => setDescription(event.target.value)} required/><br></br>
             <label>Time</label><br></br><input type='datetime-local' value={startdate} onChange={(event) => setDate(event.target.value)} required/><br></br><br></br>
             <button type='submit' className='subbtn'  >ADD TO LIST </button>
          </form>
          )
        }
       
    </div>

    );
};



export default NavBar;
