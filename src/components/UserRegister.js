import { Card, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userRegisterForVoting } from '../apis/User.Service';

export default function UserRegister() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const registerData = {
      identity_card_number: values.identity_card_number,
      name: values.name,
      mobile_number: values.mobile_number,
      residence_id: values.residence_id,
      email: values.email,
      date_of_birth: values.date_of_birth
    };

    console.log(registerData);
    try {
      await userRegisterForVoting(registerData);
      navigate('/register/username-password');
    } catch (err) {
      console.log(err);
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
      className='document--upload-form'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card
        title='Upload Registration'
        style={{
          margin: '10px',
          width: '50%',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Form {...formItemLayout} name='upload_reg' onFinish={onSubmit}>
          <Form.Item
            name='identity_card_number'
            label='NIC'
            rules={[{ required: true, message: 'Please input your NIC!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='name'
            label='Full Name'
            rules={[
              { required: true, message: 'Please input your Full Name!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='mobile_number'
            label='MobileNo'
            rules={[
              { required: true, message: 'Please input your Mobile Number!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='residence_id'
            label='ResidentialID'
            rules={[
              { required: true, message: 'Please input your Residential ID!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='date_of_birth'
            label='Date of Birth'
            rules={[
              { required: true, message: 'Please input your Date of Birth!' },
            ]}
          >
            <Input />
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
