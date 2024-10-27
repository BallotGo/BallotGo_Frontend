import React from 'react';
import { Button, Layout, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleUniversalVerifiability = () => {
    navigate('/universal-verifiability');
  }

  const handleResults = () => {
    navigate('/results');
  }

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header style={{ backgroundColor: '#001529', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#ffffff', margin: '10px' }}>
          Welcome to BallotGo
        </Title>
      </Header>

      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
          backgroundColor: '#f0f2f5',
        }}
      >
        <Title level={3} style={{ color: '#595959', marginBottom: '20px' }}>
          Secure, Transparent, and Easy Voting
        </Title>
        <Text
          style={{
            color: '#8c8c8c',
            textAlign: 'center',
            maxWidth: '500px',
            marginBottom: '30px',
          }}
        >
          Participate in elections from anywhere with confidence. Your vote is
          safe, and your experience is smooth.
        </Text>

        <Space size='large'>
          <Button type='primary' size='large' style={{ width: '150px' }} onClick={handleLogin}>
            Login
          </Button>
          <Button type='default' size='large' style={{ width: '150px' }} onClick={handleRegister}>
            Register
          </Button>
          <Button type='default' size='large' style={{ width: '200px' }} onClick={handleUniversalVerifiability}>
            Universal Verifiability
          </Button>
          <Button type='primary' size='large' style={{ width: '150px' }} onClick={handleResults}>
            Results
          </Button>
        </Space>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#001529',
          color: '#111111',
        }}
      >
        <Text>© 2024 BallotGo. All Rights Reserved.</Text>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
