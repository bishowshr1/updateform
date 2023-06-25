// import { useFormik } from 'formik'
// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteInfo } from '../components/InfoSlice';

const HomePage = () => {
  const dispatch = useDispatch()

  // const [data, setData] = useState([]);
  // const oldData = [22, 55, 77];


  // const formik = useFormik({
  //   initialValues: {
  //     todo: '',

  //   },
  //   onSubmit: (val, { resetForm }) => {
  //     setData([...data, val.todo]);
  //     resetForm();
  //   }

  // });
  const { infos } = useSelector((store) => store.infos);
  const nav = useNavigate();

  console.log(infos)



  return (


    <div>
      <h1 className='text-2xl'> sample todo App</h1>
      <form>
        <div className='p-5'>
          <label htmlFor="">Add Todo Activities</label>
          <br />
          <input
            name='todo'
            type='text'
            className='border border-black outline-none px-2 py-1'>

          </input>
          <div>
            <button className='box-border border-solid'>delete</button>
          </div>

        </div>
      </form>


      <div className="grid grid-cols-4 gap-5 p-4">

        {infos?.map((info, i) => {
          return <div key={info.id} className="shadow-lg">
            <img src={info.preview} alt="" />
            <div>
              <h1>{info.username}</h1>
              <p>{info.email}</p>
              <p>Gender: {info.gender}</p>
              <p>Country: {info.country}</p>
              <p>{info.msg.substring(0, 50)}</p>
              <div className="flex justify-end px-2 py-1">
                <button onClick={() => nav(`/update/${info.id}`)} ><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                <button onClick={() => {
                  dispatch(deleteInfo(i))
                }}><i className="fa-solid fa-trash px-6"></i></button>
              </div>

            </div>
          </div>
        })}
      </div>
    </div>

  )
}

export default HomePage
