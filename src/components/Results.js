import { getResults } from '../apis/Vote.Service';
import { Card, Layout, Typography, Table, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import { CrownTwoTone, BarChartOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default function Results() {
  const [results, setResults] = useState([]);
  const [topCandidateId, setTopCandidateId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getResults();
      setResults(response);

      // Determine the candidate with the highest votes
      const topCandidate = response.reduce((max, candidate) => 
        candidate.total_vote > max.total_vote ? candidate : max, 
        response[0]
      );
      setTopCandidateId(topCandidate.candidate_id);
    };

    fetchResults();
  }, []);

  const columns = [
    {
      title: 'Candidate ID',
      dataIndex: 'candidate_id',
      key: 'candidate',
      render: (text) => <span style={{ color: '#555' }}>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span style={{ fontWeight: 'bold', color: '#4A90E2' }}>{text}</span>,
    },
    {
      title: 'Votes',
      dataIndex: 'total_vote',
      key: 'votes',
      render: (text) => (
        <span style={{ color: '#52c41a', fontSize: '16px' }}>
          <BarChartOutlined /> {text}
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
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        position: 'relative',
      }}
    >
      <Button
        type="primary"
        icon={<HomeOutlined />}
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1,
        }}
      >
        Go to Landing Page
      </Button>

      <Card
        title={
          <Space>
            <CrownTwoTone twoToneColor="#fadb14" />
            <Title level={3} style={{ margin: 0, color: '#333' }}>
              Election Results
            </Title>
          </Space>
        }
        style={{
          width: '80%',
          maxWidth: '800px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Table
          dataSource={results}
          columns={columns}
          pagination={false}
          bordered
          rowKey="candidate_id"
          rowClassName={(record) => 
            record.candidate_id === topCandidateId ? 'top-candidate-row' : ''
          }
          style={{
            marginTop: '20px',
            backgroundColor: '#ffffff',
          }}
        />
      </Card>
      <style jsx>{`
        .top-candidate-row {
          background-color: #e6f7ff !important;
          font-weight: bold;
        }
      `}</style>
    </Content>
  );
}
