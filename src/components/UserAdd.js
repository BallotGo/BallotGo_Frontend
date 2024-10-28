import { Card, Button, Form, Input, Select, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { uploaddoc } from "../apis/Document.Service";

const { Option } = Select;

export default function UploadReg() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
    <div className="document--upload-form">
      <Card
        title="Upload Registration"
        style={{
          margin: "10px",
          // width: '50%',
          borderRadius: "15px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Form {...formItemLayout} name="upload_reg" onFinish={onFinish}>
          <Form.Item
            name="FullName"
            label="FullName"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="NIC"
            label="NIC"
            rules={[{ required: true, message: "Please input your NIC!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Age"
            label="Age"
            rules={[{ required: true, message: "Please input your Age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="ResidentialID"
            label="ResidentialID"
            rules={[
              { required: true, message: "Please input your Residential ID!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="MobileNo"
            label="MobileNo"
            rules={[
              { required: true, message: "Please input your Mobile Number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>

          {/* Live Image Upload */}
          <Form.Item label="Upload Live Image">
            <Form.Item
              name="liveImage"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                accept=".pdf"
                action="/upload/live-image"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload Live Image
                </p>
                <p className="ant-upload-hint">Only PDF files allowed.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          {/* NIC Upload
          <Form.Item label="Upload NIC Image">
            <Form.Item
              name="nicImage"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                accept=".pdf"
                action="/upload/nic-image"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to upload NIC image
                </p>
                <p className="ant-upload-hint">Only PDF files allowed.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}

          {/* Utility Bill Upload
          <Form.Item label="Upload Water/Electricity Bill">
            <Form.Item
              name="utilityBill"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                accept=".pdf"
                action="/upload/utility-bill"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to upload Water/Electricity bill
                </p>
                <p className="ant-upload-hint">Only PDF files allowed.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}

          {/* Residence Proof Upload
          <Form.Item label="Upload Residence Proof">
            <Form.Item
              name="residenceProof"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="files"
                accept=".pdf"
                action="/upload/residence-proof"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to upload Residence Proof
                </p>
                <p className="ant-upload-hint">Only PDF files allowed.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}