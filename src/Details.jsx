import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Table, Button } from 'antd';
import { CaretLeftFilled } from '@ant-design/icons';


const Details = () => {

    const student_details={
        1:{"roll_no":1, "name":"Angelin","dob":"27-03-2005","blood_group":"A1-ve","dept":"BCA"},
        2:{"roll_no":2, "name":"Dharshana","dob":"11-03-2005","blood_group":"O+ve","dept":"B.Tech CS"},
        3:{"roll_no":3, "name":"Guru", "dob":"23-03-2005","blood_group":"B+ve","dept":"B.Sc Maths"},
        4:{"roll_no":4, "name":"Jeeviha","dob":"21-07-2005","blood_group":"B+ve","dept":"B.Sc CS"},
        5:{"roll_no":5, "name":"Nithya","dob":"27-07-2004","blood_group":"AB+ve","dept":"B.Tech AI"}
    }
    const {id}=useParams();
    const student_data=student_details[id]
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
    <div style={{margin:"30px"}}>
        <h3>Personal Details</h3>
        <Table columns={columns} dataSource={data} pagination={false} bordered title={()=>(<b>{student_data.name}</b>)}/><br/>
        <Button icon={<CaretLeftFilled/>} onClick={()=>navigate("/students")}>Back</Button>
    </div>
  )
}

export default Details