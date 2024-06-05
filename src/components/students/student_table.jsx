import React, { useState} from 'react'
import { useNavigate} from 'react-router-dom' 
import { Table, Button, Typography, Modal} from "antd";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import StudentDetails from './student_modal_form';
import { UserAddOutlined } from '@ant-design/icons';

const Main = () => {
    const navigate=useNavigate()
    const {Title}=Typography
    const [modalVisible, setModalVisible]=useState(false)
    const [currentStudent, setCurrentStudent]=useState(null)
    const [editMode, setEditMode]=useState(false)
    const [students, setStudents]=useState([
        {key:'1', roll_no:'1', name:'Angelin', dob:"27-03-2005",blood_group:"A1-ve",dept:"BCA"},
        {key:'2', roll_no:'2', name:'Dharshana', dob:"11-03-2005",blood_group:"O+ve",dept:"B.Tech CS"},
        {key:'3', roll_no:'3', name:'Guru', dob:"23-03-2005",blood_group:"B+ve",dept:"B.Sc Maths"},
        {key:'4', roll_no:'4', name:'Jeeviha', dob:"21-07-2005",blood_group:"B+ve",dept:"B.Sc CS"},
        {key:'5', roll_no:'5', name:'Nithya', dob:"27-07-2004",blood_group:"AB+ve",dept:"B.Tech AI"}
    ])
    const columns=[
        { 
            title:'Roll No', 
            dataIndex:'roll_no', 
            key:'roll_no',
            },
        { 
            title:'Name',
            dataIndex:'name', 
            key:'name', 
            render:(text,row)=><text onClick={()=>navigate(`/student/${row.roll_no}`,{state:{student:row}})} style={{cursor:"pointer" }}>{text}</text> //state is used to send data as an object
        },
        { 
            title:'Actions', 
            dataIndex:'action', 
            key:'action',
            render:(text,row)=><><Button icon={<EditFilled/>} onClick={()=>handle_edit(row)} style={{margin:"10px"}}>Edit</Button>
            <Button icon={<DeleteFilled/>} onClick={()=>handle_delete(row)}>Delete</Button></>
        }

    ]
    const handle_edit=(values)=>{
        setCurrentStudent(values)
        setModalVisible(true)
        setEditMode(true)
    }
    const handle_cancel=()=>{
        setModalVisible(false)
    }
    const modalFooter = (
        <div style={{textAlign:"center"}}>
            <Button onClick={handle_cancel}>Cancel</Button>
        </div>
    );
    const handle_save = (updatedValues) => {
        if(!currentStudent){
            const new_key=students.length+1;
            updatedValues.key=new_key.toString();
            setStudents([...students, updatedValues])
            setModalVisible(false);
        }
        
        else{
        const updatedStudent = students.map((student) => {
            if (student.key === currentStudent.key) {
                return { ...student, ...updatedValues };
            }
            return student;
        });
        setStudents(updatedStudent);
        setModalVisible(false);
        setEditMode(false)
    }
    };
    const handle_delete=(row)=>{
       const updatedStudents=students.filter(student=>student.key!==row.key)
       setStudents(updatedStudents)
    }
    const handle_add=()=>{
        setCurrentStudent(null)
        setModalVisible(true)
        setEditMode(false)
    }
    
  return (
    <div style={{margin:"10px", position:"relative" }}>
        <Title level={3} style={{margin:"5px", textAlign:"left"}}>Student Record</Title>
        <div style={{ marginTop: '30px', margin: 'auto'}}>
        <Button onClick={handle_add} icon={<UserAddOutlined/>} style={{margin:"5px", float:"right"}}>Add</Button>
        <Table size={'middle'} style={{borderStyle:"solid", borderWidth:"1px", borderColor:"#dcdcdc"}}columns={columns} dataSource={students} bordered pagination={false}/>
        </div>
        {modalVisible &&
        <Modal title={currentStudent?"Edit Student":"Add Student"} open={modalVisible} onCancel={handle_cancel} footer={modalFooter}>
            <StudentDetails values={currentStudent||{}} onSave={handle_save} editMode={editMode}/>  {/* onSave is a function passed as a prop */}
        </Modal>}

        
    </div>
  )
}

export default Main