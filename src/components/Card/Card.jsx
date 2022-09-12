import styles from './Card.module.css'
import { Tag } from 'antd'

const Card = ({ title, message, isPosted }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title}
        <Tag
          color={isPosted ? 'success' : 'default'}
        >
          {isPosted ? 'Posted' : 'Draft'}
        </Tag>
      </div>
      <div className={styles.message}>
        {message}
      </div>
    </div>
  )
}

export default Card