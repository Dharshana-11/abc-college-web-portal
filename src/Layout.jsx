import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Image, Typography } from 'antd';
import logo from "./logo.png"
import { SettingFilled, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const PageLayout = ({ children }) => {
    const navigate = useNavigate();
    const handleMenu = ({key}) => {
        navigate(key);
    }
    const{Header, Sider, Content, Footer}=Layout;
    const[menuVisible, setMenuVisible]=useState(false);
    const handleSettings=()=>{
        setMenuVisible(!menuVisible)
    }
    const handleSettingsMenu=({key})=>{
        navigate(key);
        setMenuVisible(false);
    }
    const {Title, Paragraph}=Typography
    return (
        <div className="entire">
            <Layout>
            <Header className="header">
                <Image src={logo} width={70} height={70} style={{borderRadius:"70%"}}/>
                <Title level={2} className="title">ABC College <div class="motto">Empowering Minds, Enriching Futures</div></Title>
                <SettingFilled onClick={handleSettings} style={{ fontSize: '24px', cursor: 'pointer' }}></SettingFilled>
                {menuVisible && 
                <Menu onClick={handleSettingsMenu} class="settings_menu">
                    <Menu.Item key="/profile"  icon={<UserOutlined />}>Profile</Menu.Item>
                    <Menu.Item key="/" icon={<LogoutOutlined/>}>Log Out</Menu.Item>
                </Menu>}
            </Header>
            <Layout>
            <Sider width={200}className="menu_class" style={{backgroundColor: "white"}}>
                <Menu mode="inline" onClick={handleMenu} style={{ height: '100%', borderRight: 0, borderColor: "lightblue", fontSize:"17px", cursor:"pointer" }}>
                <Menu.Item key="/students" className="menu_item">Student Record</Menu.Item>
                <Menu.Item key="/departments" className="menu_item">Departments</Menu.Item>
                <Menu.Item key="/course" className="menu_item">Course</Menu.Item>
                <Menu.Item key="/examinations" className="menu_item">Examinations</Menu.Item>
                <Menu.Item key="/attendance" className="menu_item">Attendance</Menu.Item>
                <Menu.Item key="/settings" className="menu_item">Student Resources</Menu.Item>
                <Menu.Item key="/fees_management" className="menu_item">Fees Management</Menu.Item>
                <Menu.Item key="/calendar" className="menu_item">Calendar</Menu.Item>
                <Menu.Item key="/news" className="menu_item">News</Menu.Item>
                <Menu.Item key="/events" className="menu_item">Events</Menu.Item>
                <Menu.Item key="/help" className="menu_item">Help</Menu.Item>
                </Menu>
            </Sider>
            <Content className="content">
                {children}
            </Content>
            </Layout>
            <Footer className="footer">
                <Paragraph>©ABC College</Paragraph>
                <Paragraph>Contact us: +91 9087658486 || <a href="mailto:abc_college@gmail.com"> abc_college@gmail.com</a>
                </Paragraph>
            </Footer>
            </Layout>
        </div>
    );
}

export default PageLayout;