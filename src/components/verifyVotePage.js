import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Input, Button, message } from 'antd';
import { verifyVoteSubmitSuccess } from '../apis/Vote.Service';

const { Title, Text } = Typography;

export default function VerifyVotePage() {
  const navigate = useNavigate();
  const [enteredToken, setEnteredToken] = useState('');

  const handleVerify = async () => {
    // Add your verification logic here
    console.log(enteredToken);
    const response = await verifyVoteSubmitSuccess(enteredToken);
    console.log(response);
    if (response.message === 'Vote successfully stored') {
      message.success('Vote verified and stored successfully!');
    } else {
      message.error('Invalid verification code. Please try again.');
    }
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
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
          Verify Your Vote
        </Title>
        <Text
          type='secondary'
          style={{ marginBottom: '30px', display: 'block' }}
        >
          Enter the verification code sent to your email or when you voted.
        </Text>
        <Input.TextArea
          placeholder='Enter your verification code'
          value={enteredToken}
          onChange={(e) => setEnteredToken(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <Button type='primary' onClick={handleVerify} style={{ width: '100%' }}>
          Verify your vote
        </Button>
        <Button
          type='default'
          onClick={goToDashboard}
          style={{ width: '100%', marginTop: '10px' }}
        >
          Go To Dashboard
        </Button>
      </Card>
    </div>
  );
}
