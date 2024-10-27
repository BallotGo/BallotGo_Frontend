import { Card, Form, Input, Button, message } from 'antd';
import { verifyOTP } from '../apis/User.Service';
import { useNavigate } from 'react-router-dom';

export default function UsernamePasswordRegister() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const credentials = {
      otp: values.otp,
      identity_card_number: values.identity_card_number,
      password: values.password,
    };

    try {
      const data = await verifyOTP(credentials);
      console.log(data);
      navigate('/login');
    } catch (err) {
      message.error(err);
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <div
      className='login-form-container'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card
        title='Login'
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          margin: '20px',
          width: '50%',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='login' onFinish={onFinish}>
          <Form.Item
            name='otp'
            label='OTP'
            rules={[
              {
                required: true,
                message: 'Please input your National Identity Card Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='identity_card_number'
            label='NIC'
            rules={[
              {
                required: true,
                message: 'Please input your National Identity Card Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
