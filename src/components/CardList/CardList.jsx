import { useState } from 'react'
import styles from './CardList.module.css'
import Card from '../Card/Card.jsx'
import { Button, Modal, Form, Input, Checkbox } from 'antd'
import AddNewPostModal from '../PostModal/AddNewPostModal.jsx'

const DUMMY_POST_DATA = [
  {
    id: 1,
    title: 'First Post',
    message: 'Lorem ipsum',
    isPosted: true,
  },
  {
    id: 2,
    title: 'Second Post',
    message: 'SCD - Lorem ipsum',
    isPosted: false,
  },
  {
    id: 3,
    title: 'Third Post',
    message: 'TRD - Lorem ipsum',
    isPosted: false,
  },
]

const CardList = () => {
  // Initialize posts data using DUMMY_POST_DATA from above
  const [posts, setPosts] = useState(DUMMY_POST_DATA)
  // Initialize state for each modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  // Initialize form
  const [form] = Form.useForm()

  const handleCreateNewPost = (value) => {
    // Add value from the form to create new post
    const newPost = {
      // Give random id using Math random
      id: Math.random(),
      title: value.title,
      message: value.message,
      // This `!!` operator is to force the value to become boolean, e.g.
      // value = undefined -> !!value = false,
      // value2 = 'abc' -> !!value2 = true
      isPosted: !!value.isPosted,
    }
    // Add the new post to the end of posts arrays
    setPosts([...posts, newPost])
    // Reset the form field, so it won't retain previous values
    form.resetFields()
    // Close the modal
    setIsAddModalOpen(false)
  }

  return (
    <div className={styles.cardList}>
      <Button
        onClick={() => setIsAddModalOpen(true)}
        type='primary'
        className={styles.btnNewPost}
      >
        Create New Post
      </Button>
      {posts.map(post => {
        // Destructuring `post` data, so we don't need to call it by post.id, post.message, etc.
        const { id, message, isPosted, title } = post

        return (
          <div
            // Don't forget to add `key` props so React won't yell at you
            key={id}
            className={styles.cardWrapper}
          >
            <Card
              message={message}
              isPosted={isPosted}
              title={title}
            />
            {isPosted && (
              <div className={styles.btnContainer}>
                <Button>Edit</Button>
                <Button type='primary' danger>Delete</Button>
              </div>
            )}
          </div>
        )
      })}
      <AddNewPostModal
        form={form}
        onCancel={() => setIsAddModalOpen(false)}
        open={isAddModalOpen}
        onSubmit={handleCreateNewPost}
      />
    </div>
  )
}

export default CardList