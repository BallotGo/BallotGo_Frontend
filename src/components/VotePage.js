import React, { useState } from 'react';
import {
  Button,
  Input,
  Typography,
  Card,
  Space,
  message,
  Radio,
  List,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  verifyOtpAndGetCandidates,
  sendVerifiedVote,
} from '../apis/Vote.Service';
import { blindTheVote } from '../utils/BlindVote';

const { Title, Text } = Typography;

export default function Vote() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [blindVote, setBlindVote] = useState(null);
  const [isBlindedVoteVerify, setIsBlindedVoteVerify] = useState(false);
  const [haveVoteVerifyCode, setHaveVoteVerifyCode] = useState(false);
  const [voteVerifyCode, setVoteVerifyCode] = useState('');

  const handleOtpChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 6) {
      setOtp(input); // Limit OTP to 6 digits
    }
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      verifyOtpAndGetCandidates(otp).then((response) => {
        if (response) {
          const candidateList = response;
          setCandidates(candidateList);
          setOtpVerified(true);
          message.success('OTP verified successfully!');
        } else {
          message.error('Invalid OTP. Please try again.');
        }
      });
    } else {
      message.error('Please enter a valid 6-digit OTP.');
    }
  };

  const handleVote = async () => {
    if (selectedCandidate) {
      try {
        message.success(`You have voted for ${selectedCandidate.name}`);
        const blindVote = await blindTheVote(selectedCandidate.candidate_id);
        setBlindVote(blindVote);
        setIsBlindedVoteVerify(blindVote.isValid);
      } catch (err) {
        message.error('Error in voting. Please try again.');
      }
    } else {
      message.warning('Please select a candidate to vote.');
    }
  };

  const submitVerifiedVote = async () => {
    try {
      const response = await sendVerifiedVote(
        blindVote.signature,
        selectedCandidate.candidate_id
      );
      if (response) {
        setHaveVoteVerifyCode(true);
        setVoteVerifyCode(response.voteVerifyToken);
        
        message.success('Vote submitted successfully!');
      } else {
        message.error('Error in submitting vote. Please try again.');
      }
    } catch (err) {
      message.error('Error in submitting vote. Please try again.');
    }
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  }


  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '20px',
      }}
    >
      {!isBlindedVoteVerify ? (
        !otpVerified ? (
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
              Enter OTP
            </Title>
            <Text
              type='secondary'
              style={{ marginBottom: '30px', display: 'block' }}
            >
              A 6-digit OTP has been sent to your registered mobile number.
            </Text>

            <Space direction='vertical' size='large' style={{ width: '100%' }}>
              <Input
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
                placeholder='Enter OTP'
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  padding: '10px',
                }}
              />

              <Button
                type='primary'
                onClick={handleSubmit}
                style={{ width: '100%' }}
              >
                Submit
              </Button>
            </Space>
          </Card>
        ) : (
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
              Cast Your Vote
            </Title>
            <Text
              type='secondary'
              style={{ marginBottom: '30px', display: 'block' }}
            >
              Select a candidate to cast your vote.
            </Text>

            <Radio.Group
              onChange={(e) => setSelectedCandidate(e.target.value)}
              value={selectedCandidate}
              style={{ width: '100%' }}
            >
              <List
                dataSource={candidates}
                renderItem={(candidate) => (
                  <List.Item
                    style={{
                      padding: '15px',
                      backgroundColor: '#fafafa',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Radio value={candidate} style={{ width: '100%' }}>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>
                        {candidate.name}
                      </div>
                    </Radio>
                  </List.Item>
                )}
              />
            </Radio.Group>

            <Button
              type='primary'
              onClick={handleVote}
              style={{ width: '100%' }}
            >
              Submit Vote
            </Button>
          </Card>
        )
      ) : !haveVoteVerifyCode ? (
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
            Vote Confirmation
          </Title>
          <Text
            type='secondary'
            style={{ marginBottom: '30px', display: 'block' }}
          >
            Your vote has been successfully signed and verified by the voting
            authority, ensuring it remains unchanged. You can now proceed to
            submit your vote.
          </Text>

          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={submitVerifiedVote}
          >
            Submit Vote
          </Button>
        </Card>
      ) : (
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
            Vote Verification Code
          </Title>
          <Text
            type='secondary'
            style={{ marginBottom: '30px', display: 'block' }}
          >
            Copy the verification code below and keep it safe. You can use this
            code to verify your vote later.
          </Text>

          <Input.TextArea
            value={voteVerifyCode}
            readOnly
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '16px',
            }}
          />

          <Button
            type='primary'
            onClick={() => navigator.clipboard.writeText(voteVerifyCode)}
            style={{ width: '100%' }}
          >
            Copy Code
          </Button>
          <Button
            type='default'
            onClick={goToDashboard}
            style={{ width: '100%', marginTop: '10px' }}
          >
            Go To Dashboard
          </Button>
        </Card>
      )}
    </div>
  );
}
