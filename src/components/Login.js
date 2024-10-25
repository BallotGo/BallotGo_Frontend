import { Card, Form, Input, Button, message } from "antd";
import { login } from "../apis/User.Service";

export default function LoginReg({ onLogin }) {
  const onFinish = async (values) => {
    const credentials = {
      nic: values.nic,
      password: values.password,
    };

    try {
      const data = await login(credentials);

      // Show success message if login is successful
      if (data.token) {
        onLogin(data.token);
        message.success("Login successful!");
      }
    } catch (err) {
      // Show error message if login fails
      message.error(err.toString());
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
    <div className="login-form">
      <Card
        title="Login"
        style={{
          margin: "20px",
          width: "50%",
          borderRadius: "15px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Form {...formItemLayout} name="login" onFinish={onFinish}>
          <Form.Item
            name="nic"
            label="nic"
            rules={[
              {
                required: true,
                message: "Please input your National Identity Card Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
