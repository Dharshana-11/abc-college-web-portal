import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Typography } from 'antd';
import { CaretLeftFilled } from '@ant-design/icons';


const Details = () => {
    const {state}=useLocation();
    const {Title}=Typography;
    const student_data=state.student
    const navigate=useNavigate();
    const columns=[
        {
            title:'Attributes',
            dataIndex: 'attribute',
            key:'attribute'
        },
        {
            title:'Values',
            dataIndex:'value',
            key:'value'
        }
    ]
    const data=[
        {key:'roll_no', attribute:'Roll Number', value:student_data.roll_no},
        {key:'name', attribute:'Name', value:student_data.name},
        {key:'dob', attribute:'DOB', value:student_data.dob},
        {key:'blood_group', attribute:'Blood Group', value:student_data.blood_group},
        {key:'dept', attribute:'Department', value:student_data.dept},

    ]
  return (
    <div >
        <Title level={3} style={{textAlign:"left", margin:"10px"}}>Personal Details</Title>
        <Table columns={columns} dataSource={data} pagination={false} bordered title={()=>(<b>{student_data.name}</b>)}/><br/>
        <Button icon={<CaretLeftFilled/>} onClick={()=>navigate("/students")}>Back</Button>
    </div>
  )
}

export default Details