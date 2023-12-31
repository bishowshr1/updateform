import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option,
  Textarea,
  Radio
} from "@material-tailwind/react";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { addInfo } from "./InfoSlice";




const InfoForm = () => {

  const valSchema = Yup.object().shape({
    username: Yup.string().max(20).min(5).required(),
    email: Yup.string().email().required(),
    hobby: Yup.array().required(),
    country: Yup.string().required(),
    gender: Yup.string().required(),
    msg: Yup.string().required(),

    image: Yup.mixed().required('Required').test('FileType', 'invalid', (val) => val && ['image/png', 'image/jpg', 'image/png'].includes(val.type))


  });

  const dispatch = useDispatch();
  const nav = useNavigate();



  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      hobby: [],
      country: '',
      gender: '',
      msg: '',
      image: null,
      preview: '',
      id: nanoid()

    },
    onSubmit: (val) => {
      dispatch(addInfo(val));
      nav(-1);


    },
    validationSchema: valSchema
  });



  const checkData = [
    { label: 'Dance', name: 'dance', value: 'dance', color: 'blue', id: 'dance' },
    { label: 'Sing', name: 'sing', value: 'sing', color: 'red', id: 'sing' },
    { label: 'Coding', name: 'coding', value: 'coding', color: 'green', id: 'coding' },
    { label: 'Music', name: 'music', value: 'music', color: 'teal', id: 'music' },
    { label: 'hubby', name: 'hubby', value: 'hubby', color: 'teal', id: 'hubby' },
  ];


  const selectData = [
    { label: 'Nepal', value: 'nepal' },
    { label: 'India', value: 'india', },
    { label: 'China', value: 'china', },
    { label: 'USA', value: 'USA' },
  ];

  console.log(formik.errors.username);
  return (
    <div className="max-w-xl shadow-2xl px-12 py-9 mx-auto ">

      <Typography color="gray" className="my-3 mb-6 text-2xl">
        Enter your Info
      </Typography>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="mb-4 flex flex-col gap-3">


          <div>
            <Input
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              error={formik.errors.username && formik.touched.username ? true : false}
              size="lg" label="Name" type="text" />

            {formik.errors.username && formik.touched.username && <h1 className="text-red-600">{formik.errors.username}</h1>}
          </div>

          <div>
            <Input
              onChange={formik.handleChange}
              name="email"
              value={formik.values.email}
              size="lg" label="Email" type="email" />
            {formik.errors.email && formik.touched.email && <h1 className="text-red-600">{formik.errors.email}</h1>}
          </div>


          <div className="space-y-2">
            <h1>Select Your Gender</h1>
            <Radio onChange={formik.handleChange} id="male" name="gender" label="Male" value="male" />
            <Radio onChange={formik.handleChange} id="female" name="gender" label="Female" value="female" />
            {formik.errors.gender && formik.touched.gender && <h1 className="text-red-600">{formik.errors.gender}</h1>}
          </div>


          <div className="space-y-2">
            <h1>Select Your Hobbies</h1>
            {checkData.map((c, i) => {
              return <Checkbox
                onChange={formik.handleChange}
                value={c.value}
                key={i} color={c.color} label={c.label} name="hobby" id={c.id} />
            })}
            {formik.errors.hobby && formik.touched.hobby && <h1 className="text-red-600">{formik.errors.hobby}</h1>}

          </div>



          <div className="space-y-2">
            <h1>Select Your Country</h1>
            <Select label="Select Country" onChange={(e) => formik.setFieldValue('country', e)}>
              {selectData.map((c, i) => {
                return <Option

                  value={c.value} key={i}>{c.label}</Option>
              })}


            </Select>
            {formik.errors.country && formik.touched.country && <h1 className="text-red-600">{formik.errors.country}</h1>}

          </div>

          <div >
            <Textarea name="msg" onChange={formik.handleChange}
              value={formik.values.msg}
              label="Message" />
            {formik.errors.msg && formik.touched.msg && <h1 className="text-red-600">{formik.errors.msg}</h1>}
          </div>


          <div >

            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                // formik.setFieldValue('image', file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('preview', e.target.result);
                })


              }}
              size="lg"
              name="image"
              label="Select Image" type="file" />
          </div>
          <div>
            <input
              label="Select Image" type="file" />
          </div>

          {formik.values.preview && <img className="h-[200px]" src={formik.values.preview} alt="" />}

        </div>



        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </div>
  )
}
export default InfoForm