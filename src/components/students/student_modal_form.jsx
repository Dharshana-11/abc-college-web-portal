import { Button, Form, Input } from 'antd'
import React, { useEffect } from 'react'

const StudentDetails = (props) => {
    const {values, onSave, editMode}=props
    const [form]=Form.useForm()
    useEffect(()=>
      {form.setFieldsValue(values)}, [values]);
    const on_finish=(values)=>{
      onSave(values)
      form.resetFields();
    }
  return (
    <div>
            <Form form={form} onFinish={on_finish} style={{textAlign:"center"}}>
            <Form.Item
                name="roll_no"
                label="Roll Number"
                colon={false}
                rules={[{required:true }]}>
            <Input disabled={editMode}/>
            </Form.Item>
            <Form.Item
                name="name"
                label="Name"
                colon={false}
                rules={[{required:true }]}>
            <Input/>
            </Form.Item>
            <Form.Item
                name="dob"
                label="DOB"
                colon={false}
                rules={[{required:true }]}>
            <Input/>
            </Form.Item>
            <Form.Item
                name="blood_group"
                label="Blood Group"
                colon={false}
                rules={[{required:true }]}>
            <Input/>
            </Form.Item>
            <Form.Item
                name="dept"
                label="Department"
                colon={false}
                rules={[{required:true }]}>
            <Input/>
            </Form.Item>
            <Button type="primary" htmlType='submit'>{editMode?'Save':'Add Student'}</Button>
            </Form>
    </div>
  )
}

export default StudentDetails
