import React from 'react';
import { Button, Layout, Typography, Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { requestOtpToVote } from '../apis/Vote.Service';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleVote = async () => {
    const response = await requestOtpToVote();
    if (response.send) {
      navigate('/dashboard/vote');
    }
  };

  const handleVerification = async () => {
    navigate('/dashboard/verify');
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header
        style={{
          backgroundColor: '#001529',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <Title level={2} style={{ color: '#ffffff', margin: 0 }}>
          BallotGo Dashboard
        </Title>
        <Button
          type='default'
          onClick={handleLogout}
          style={{ color: '#000000', borderColor: '#ffffff' }}
        >
          Logout
        </Button>
      </Header>

      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <Card
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Title level={3} style={{ marginBottom: '20px' }}>
            Welcome to Your Dashboard
          </Title>
          <Text
            type='secondary'
            style={{ marginBottom: '30px', display: 'block' }}
          >
            Participate in the election or verify your vote securely.
          </Text>

          <Space direction='vertical' size='large' style={{ width: '100%' }}>
            <Button
              type='primary'
              size='large'
              style={{ width: '100%' }}
              onClick={handleVote}
            >
              Vote
            </Button>
            <Button
              type='default'
              size='large'
              style={{ width: '100%' }}
              onClick={handleVerification}
            >
              Verify Vote
            </Button>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
}
