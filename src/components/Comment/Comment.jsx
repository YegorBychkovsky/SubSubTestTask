import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as ReplyIcon } from '../../assets/icons/reply.svg'
import styles from './comment.module.scss'
const Comment = ({ img, userName, comment, likes, age, answerFor, setAnswerFor }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_main}>
        <div>
          <img src={img} alt={'user_avatar'} />
        </div>
        <div>
          <span className={styles.user_info}>{userName} </span>
          <p>{comment}</p>
          <div className={styles.action_block}>
            <div>
              <button>
                <HeartIcon className={styles.heartIcon} />
              </button>
              <span> {likes}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  setAnswerFor(answerFor !== userName ? userName : null)
                }}
              >
                <ReplyIcon className={styles.replyIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comment_age}>
        <span>{age}</span>
      </div>
    </div>
  )
}
export default Comment
