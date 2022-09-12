import { Button, Checkbox, Form, Input, Modal } from 'antd'

const AddNewPostModal = ({ onCancel, form, open, onSubmit }) => {

  return (
    <Modal
      open={open}
      title='Create A New Post'
      onCancel={() => onCancel}
      footer={[
        // Use custom footer
        // The form value must be the same as Form name below (🤡) which is `postName`
        <Button form='postForm' type='primary' key='submit' htmlType='submit'>
          Submit
        </Button>,
      ]}
    >
      <Form
        // The form value from above (🤡) must be the same as this name which is `postName`
        name='postForm'
        form={form}
        onFinish={onSubmit}
        onFinishFailed={() => console.log('error')}
        layout='vertical'
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Please input your post title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Message'
          name='message'
          rules={[
            { required: true, message: 'Please input your post message!' },
            { max: 250, message: 'Your post message cannot exceed 250 characters' },
          ]}
        >
          <Input.TextArea
            autoSize
            showCount
            maxLength={250}
          />
        </Form.Item>

        <Form.Item
          name='isPosted'
          valuePropName='checked'
        >
          <Checkbox
            defaultChecked={true}
          >
            Post Now?
          </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddNewPostModal