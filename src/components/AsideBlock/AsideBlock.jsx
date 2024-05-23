import styles from './styles.module.scss'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import RecentPost from './RecentPost/RecentPost'

const AsideBlock = () => {
  return (
    <aside className={styles.aside_block}>
      <div className={styles.author_info}>
        <img
          src={
            'https://s3-alpha-sig.figma.com/img/16e0/fc78/3e7a90dcaa8467de4ee594040296c606?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l87nHBc2Yn9eV9LJC4CytRUhtjjuGG4XjsmvzWVFW9ZPWCAziTN2qxKzkUQ2kwvqkNNEpU-sIMatjrajqkzP-zksKX-cQb7aJhf4po184w2d7chrRfwNSQOqsnkCsHFql0GbY5jWJosGIu-LT-sl6ljjANpUVH-HrWIssAHBo4-MDaIyhrvG7k~nawNdDI9KPEeDKeKq9GKXQDLtpI6YjB8uH0Bgz8VNZ~GsgT4y5RQM7wIqpShmPPTG1ov~D1dxXg5OM14h9gucPTNzSbnC5cAVaQZoawg2Eq8b-BwmXurnmrUnFNPKppfRJw~l6JI1fBS7GCCwQOJqcziQThBIwg__'
          }
          alt={'author_image'}
        />
        <h3>Brooklyn Simmons</h3>
        <div className={styles.author_followers}>
          <HeartIcon /> <p>12 supporters</p>
        </div>
        <button>Join for more</button>
      </div>
      <div className={styles.recent_posts}>
        <h3>Recent posts</h3>
        <div className={styles.recent_posts_wrapper}>
          <RecentPost
            img={
              'https://s3-alpha-sig.figma.com/img/1234/5a3a/eb83f0ef0dcbe07af455a6aff76ce6d9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISUiTg6LkC4npzjklW649P~sHv64tadcoH02eTXxC-pp1b5f-1Ow3E7y29pBaO0UlIWMOBlTdbu-ivMZHgknMNjWEHgt7Y-fjhFv~taYV8AN1otHZ~fDNoIpjDW481Zq4dDtsq~7jYqk0MBxKLZBs-61NQnI0tDQRBY2gLe54Hwj-e1rQeb4WUcRvPf8s2a1dOFsoRwk-mYQCxOitLdjTa4lBr5Dv0l9qdIcUl4mM8dWDwu26BJgIgzLjhZNL80eJM4Q0lKef5Z2qtThc04jzfcmmfTFDg7ArlrokAQ7I7bEvh23jRcncurR72B5SOSkb0KnM0IKYSXiviZfQKCh7A__'
            }
            postName={'Climate change is hitting the heart of Cajun country — through its crawfish'}
            date={'08 Jan 2024'}
          />{' '}
          <RecentPost img={null} postName={'How global warming is disrupting life on Earth'} date={'08 Jan 2024'} />{' '}
          <RecentPost
            img={
              'https://s3-alpha-sig.figma.com/img/e228/c148/335e7ecdaf7f5182675d47c3f1c9a034?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZGR2udyLpGozC82Cxjqhjj3~NRl42PszvaCo1Xv0UDssmrFLujnSXJlkixYpB1mnwPYC3PduOIgq7LO3bg6EDUrAXvmZFUZUAPOER4Pp5zKRVLDHDx1JYF0B~DrsBxTylJzm2nJoV48Cc9TjD4T4zK6jU~1VPuszfZiHF~XDqed2eKxsdciWKAnaDIJxEYgDyV1zOcNfPprfF66vIi~kMD6tZW9Fc8rFgpPGIkC6bajaTgbMf07fChDs8zpEsMpAkr3En7cKPseO-HA3bBr~feqC2BQrfQvVpocoatcaExviHhqtllUYL4oTiYO6~Rl8tWKKRHnOnaHQz585uPEiog__'
            }
            postName={'The Impact of Music on Human Development and Well-Being'}
            date={'08 Jan 2024'}
          />{' '}
          <RecentPost img={null} postName={'How global warming is disrupting life on Earth'} date={'08 Jan 2024'} />
        </div>
      </div>
    </aside>
  )
}
export default AsideBlock
