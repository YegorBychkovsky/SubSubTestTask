import { ReactComponent as BackIcon } from '../../assets/icons/arrow_back.svg'
import { ReactComponent as BlockedIcon } from '../../assets/icons/blocked.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg'
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg'
import Comment from '../../components/Comment/Comment.jsx'
import styles from './styles.module.scss'
import React, { useRef, useState } from 'react'
const PostBlock = () => {
  const [answerFor, setAnswerFor] = useState(null)
  const inputRef = useRef(null)

  const [comments, setComments] = useState([
    {
      img:
        'https://s3-alpha-sig.figma.com/img/9e1a/3228/1a1ab26b9a979cda63bb09ba78170e17?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvFfysJa0Umi-~rmCEK4cLdRGWjNbYXPlxdbzgVoI4La1VtnHOAYyBBkMOQzmNYnaSFWisJMe6ADXzv3gXPVVKXTUtK52TmdXDS8qCaMwx21QnlG0kAuzrm0OzI6EP8j4QPTGEjjp7MiYpve0ONpjP5Cqq6C--1PHDfN55BCJtiNeoLtiaNpEJTHhwL9BK4oFwh2V-32HT4Rl9nyIN-4ltLFrnO4Wt4j0~MuB1T29oQj-bX7dt7BAWiWQfFOg5Kqleac0VtH~7iC5gKEvJc6PHXEA-AwZEzNrag-x76cMNHBmmBvHsKSU2HdcHyUvbLc18z~W5saqbwI~Ac2w3K9Ag__',
      userName: 'Emily Fray',
      comment: 'Really cool! ✌ I love it!🌏 ',
      likes: 12,
      age: '1d',
      answers: [],
    },
    {
      img:
        'https://s3-alpha-sig.figma.com/img/1e65/c536/2d41eae091463cddff6b48f87b997f97?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWQF3wuppsXTO0TCNtttlEBVHyCRbTd7tYwc7ubv4vbE50U576zBfbozmt36XqLdhcZZXuZ5AoMx90ckYQK~hrA~leK-V~-J~e1yDZDWDKmRZ4jpn471kwKDy7O8HM1jZNP2wuw66nSW6XEeApaRFlJALtNueyCrT8shquP34asVCFz1UIGpTkubBradOfnpUciNDgJF~Q0CMA0ETJMru2oNIqSb0u6L8CM3fBos4gunCwrr4iQ7fTkkfdMxSHEbxEErb8A5bpOgGeXpN2N5oMzptL22BoR6U8Las0IodW9JuL8jZtQTfCj7P0eO9vwPebJX8sGQJfygJmlxkW1Mtw__',
      userName: 'Esther Howard',
      comment:
        'I would also love to visit there! The best place for me. Will definitely go back there again with my family ☘💕',
      likes: '',
      age: '2d',
      answers: [],
    },
  ])
  const addComment = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      const newComment = {
        img:
          'https://s3-alpha-sig.figma.com/img/519a/12f1/f6a8467e76136a1a0b1a2bb7e021ed6a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nI7sl825aCYraLOIXludcSA0cQsbc78jYQedC~jcfubuqtfrk8QgsO0ruiS7nK1hqA15PDRf3BS5KLhT-VFB8gkgCj-HbMt8GcoK6QT4i1fQOC8s7L72KG8qmTwgkh0ueFiAPDIyAVdNML0Im-fdKntyrEQ8XZL~S3ObkDW6JlvPKqOMA2JUDZS67-lF8mga1iWBnW2AN11ebTLXfzuHNyK8pwL1QqApS1nVhG6saB6YAKCwmMYax-NOs~OSs7B7-~3KMnup9f--M4mCVgHEIn2iVzgRlVrYYnJ6jcjEzQL78qAaURDPyg319bOEJB6nsh8NgfudGFueroKIIPW31Q__',
        userName: 'M',
        comment: event.target.value,
        likes: '',
        age: 'now',
        answers: [],
      }

      if (!answerFor) setComments([...comments, newComment])
      if (answerFor) {
        setComments(
          comments.map((comment) => {
            if (comment.userName === answerFor) {
              return {
                ...comment,
                answers: [...comment.answers, newComment],
              }
            }
            return comment
          })
        )
      }

      event.target.value = ''
      setAnswerFor(null)
    }
  }

  const renderComments = (comments, isAnswer) => {
    return comments.map((comment, index) => (
      <div key={index} className={isAnswer ? styles.nested_comment : ''}>
        <Comment
          img={comment.img}
          userName={comment.userName}
          comment={comment.comment}
          likes={comment.likes}
          age={comment.age}
          answerFor={answerFor}
          setAnswerFor={setAnswerFor}
        />
        {comment.answers.length > 0 && renderComments(comment.answers, true)}
      </div>
    ))
  }

  const countTotalComments = (comments) => {
    let totalCount = 0

    const countComments = (comments) => {
      comments.forEach((comment) => {
        totalCount++
        if (comment.answers.length > 0) {
          countComments(comment.answers)
        }
      })
    }

    countComments(comments)

    return totalCount
  }

  return (
    <div className={styles.post_block}>
      <div className={styles.post_body}>
        <button>
          <BackIcon /> Back to posts
        </button>
        <div className={styles.only_members}>
          <BlockedIcon />
          Only members
        </div>
        <h1>Why travel should be considered an essential human activity</h1>
        <span className={styles.post_date}>12 Jan 2024</span>
        <p>
          I’ve been putting my passport to good use lately. I use it as a coaster and to level wobbly table legs. It
          makes an excellent cat toy. <br />
          <br />
          Welcome to the pandemic of disappointments. Canceled trips, or ones never planned lest they be canceled.
          Family reunions, study-abroad years, lazy beach vacations. Poof. Gone. Obliterated by a tiny virus, and
          the long list of countries where United States passports are not welcome.
          <br />
          <br />
          What if we can’t move, though? What if we’re unable to hunt or gather? What’s a traveler to do? There are many
          ways to answer that question. “Despair,” though, is not one of them.
        </p>
        <img
          src={
            'https://s3-alpha-sig.figma.com/img/25b6/f180/68194ff80ea0a44dd0c9a3400402d4ec?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g1DOb1~p0Xmye3h8Tl7jNRwlmMrKWTomaj5OXvda8pF8gYW1aocYJbukpnte0MJPbGCaDkPirD~e3X0q849JW9G0Vra-ZrlFX-gMeoiVmiUawCvo6LpyQTodOmexFzf33mjvyKEVldjOXoXjcN6-~wfvlDDjYOrFA74tYm8~ENAx~yXvBjUTg1LzvqD-FyCZO9bEhss~7HAycm5XAqqPV99hqD7PoDNmVav6yQGlS73aTSPWLH7Pd3g4HpffM2jDom09-shh~5QF1cMZH2Tvvt5pwIGB54JI7Hu2H597ezM1WxSfGLgCnAB3VlWlXRp5nH4giRHtIFmkThJS~ZTyGw__'
          }
          alt={'post_image'}
        />
        <p>
          I’ve been putting my passport to good use lately. I use it as a coaster and to level wobbly table legs. It
          makes an excellent cat toy. <br />
          <br />
          Welcome to the pandemic of disappointments. Canceled trips, or ones never planned lest they be canceled.
          Family reunions, study-abroad years, lazy beach vacations. Poof. Gone. Obliterated by a tiny virus, and
          the long list of countries where United States passports are not welcome.
          <br />
          <br />
          What if we can’t move, though? What if we’re unable to hunt or gather? What’s a traveler to do? There are many
          ways to answer that question. “Despair,” though, is not one of them.
        </p>
        <div className={styles.action_block}>
          <div>
            <button>
              <HeartIcon />
            </button>
            <span>12 </span>
          </div>
          <div>
            <button>
              <CommentIcon />
            </button>
            <span>{countTotalComments(comments)} </span>
          </div>
          <div>
            <button>
              <ShareIcon />
            </button>
          </div>
        </div>
        <div className={styles.post_comments}>{renderComments(comments)}</div>
        <div className={styles.user_comment}>
          <div className={styles.avatar_icon}>M</div>
          <input
            placeholder={answerFor ? `Answer for ${answerFor}...` : 'Comment here...'}
            ref={inputRef}
            onKeyDown={(e) => addComment(e)}
          />
        </div>
      </div>
      <aside>
        <div></div>
        <div></div>
      </aside>
    </div>
  )
}
export default PostBlock
