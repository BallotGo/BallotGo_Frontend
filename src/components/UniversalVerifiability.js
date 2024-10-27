import { getUniversalVerifiability } from '../apis/Vote.Service';
import { Card, Layout, Typography, Table, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import {
  CrownTwoTone,
  BarChartOutlined,
  HomeOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default function UniversalVerifiability() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUniversalVerifiability();
      setResults(response);
      console.log(response);
    };

    fetchResults();
  }, []);

  const columns = [
    {
      title: 'Identity Card Number',
      dataIndex: 'identity_card_number',
      key: 'identity_card_number',
      render: (text) => <span style={{ color: '#555' }}>{text}</span>,
    },
    {
      title: 'Vote Status',
      dataIndex: 'vote_status',
      key: 'vote_status',
      render: (status) => (
        <span style={{ color: status ? '#52c41a' : '#555' }}>
          {status ? <CheckOutlined /> : 'Not Verified'}
        </span>
      ),
    },
  ];

  return (
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
          width: '80%',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Title level={3} style={{ color: '#4A90E2' }}>
          Universal Verifiability
        </Title>
        <Table
          dataSource={results}
          columns={columns}
          pagination={false}
          style={{ marginTop: '20px' }}
        />
        <Space style={{ marginTop: '20px' }}>
          <Button
            type='primary'
            icon={<CrownTwoTone />}
            onClick={() => navigate('/results')}
          >
            View Results
          </Button>
          <Button
            type='default'
            icon={<HomeOutlined />}
            onClick={() => navigate('/')}
          >
            Go to Landing Page
          </Button>
        </Space>
      </Card>
    </Content>
  );
}
