import styles from './styles.module.scss'
const RecentPost = ({ img, postName, date }) => {
  return (
    <div className={styles.post}>
      {img && <img src={img} alt={'post_image'} />}
      <div>
        <p>{postName}</p>
        <span>{date}</span>
      </div>
    </div>
  )
}
export default RecentPost
