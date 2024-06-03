import React from 'react'
import { useNavigate} from 'react-router-dom' 
import { Button} from "antd";
import { Table } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';

const Main = () => {
    const navigate=useNavigate()
    const columns=[
        { 
            title:'Roll No', 
            dataIndex:'roll_no', 
            key:'roll_no',
            },
        { 
            title:'Name', 
            dataIndex:'name', key:'name', 
            render:(text,row)=><text onClick={()=>navigate(`/student/${row.roll_no}`)} style={{cursor:"pointer" }}>{text}</text>
        }
    ]
    const data=[
        {key:'1', roll_no:'1', name:'Angelin'},
        {key:'2', roll_no:'2', name:'Dharshana'},
        {key:'3', roll_no:'3', name:'Guru'},
        {key:'4', roll_no:'4', name:'Jeeviha'},
        {key:'5', roll_no:'5', name:'Nithya'}
    ]
  return (
    <div style={{margin:"20px", }}>
        <h4>Student Record</h4>
        <div style={{ marginTop: '30px', maxWidth: '800px', margin: 'auto', overflowX: 'auto' }}>
        <Table columns={columns} dataSource={data} bordered pagination={false}/><br></br>
        </div>
        {/* <Button icon={<DoubleLeftOutlined />} onClick={()=>navigate("/")}>Back</Button> */}
    </div>
  )
}

export default Main