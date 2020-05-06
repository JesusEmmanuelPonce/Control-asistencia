import React from 'react';
import './formAssistance.css';
import { Form, Input, Button, Tooltip } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

  const tailLayout = {
    wrapperCol: { offset: 2}
  };

const FormAssistance = () => {
    
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return(
       <div className="container-form-pb">
            <Form
                className="form-pb"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

                <Tooltip title="Escriba su ID para asistencia">
                    <Button type="default" shape="circle" className="btn-pb" size="middle" icon={<QuestionOutlined />} />
                </Tooltip>

                <Form.Item
                    name="id"
                    rules={[{ required: true, message: 'Introduzca su ID' }]}
                >
                    <Input
                        className="form-item-pb"
                        placeholder="ID"
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="default" className="btn-success-pb" htmlType="submit">
                        Registrar
                    </Button>
                </Form.Item>
            </Form>
       </div>
    )
}

export default FormAssistance;