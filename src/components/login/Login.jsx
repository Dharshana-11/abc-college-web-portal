import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import {Form, Input, Button, Image, Card} from 'antd'

const Login = () => {
const navigate=useNavigate();
const handle_login=(e)=>{
    navigate("/students")

}
  return (
    <div className='main'>
        <Form  name='login' onFinish={handle_login}>
        <Card style={{border:"none", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
            <Image src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" height={80} width={80}/><br/><br/>
            <Form.Item
                name="username"
                label={<span style={{ color: 'white' }}>Username</span>}
                colon={false}
                rules={[{required:true, message:"Please enter your username!" }]}>
            <Input/>
            </Form.Item>
            <Form.Item
                name="password"
                label={<span style={{ color: 'white' }}>Password</span>}
                colon={false}
                rules={[{required:true, message:"Please enter your password!"}]} >
            <Input.Password />
            </Form.Item>
            <Form.Item>
                <Link to="/forgot_password">Forgot password?</Link>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Login</Button>
            </Form.Item>
        </Card>
        </Form>
    </div>
  )
}

export default Login