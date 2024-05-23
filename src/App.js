import styles from './App.module.scss'
import PostBlock from './components/PostBlock/PostBlock'
import AsideBlock from './components/AsideBlock/AsideBlock'
import { ReactComponent as LogoIcon } from './assets/icons/Logo.svg'
import { ReactComponent as MenuIcon } from './assets/icons/menu.svg'

function App() {
  return (
    <>
      <header className={styles.header}>
        <LogoIcon />
        <nav>
          <img
            src={
              'https://s3-alpha-sig.figma.com/img/519a/12f1/f6a8467e76136a1a0b1a2bb7e021ed6a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nI7sl825aCYraLOIXludcSA0cQsbc78jYQedC~jcfubuqtfrk8QgsO0ruiS7nK1hqA15PDRf3BS5KLhT-VFB8gkgCj-HbMt8GcoK6QT4i1fQOC8s7L72KG8qmTwgkh0ueFiAPDIyAVdNML0Im-fdKntyrEQ8XZL~S3ObkDW6JlvPKqOMA2JUDZS67-lF8mga1iWBnW2AN11ebTLXfzuHNyK8pwL1QqApS1nVhG6saB6YAKCwmMYax-NOs~OSs7B7-~3KMnup9f--M4mCVgHEIn2iVzgRlVrYYnJ6jcjEzQL78qAaURDPyg319bOEJB6nsh8NgfudGFueroKIIPW31Q__'
            }
            alt={'user_avatar'}
          />
          <MenuIcon />
        </nav>
      </header>
      <div className={styles.post}>
        <main>
          <PostBlock />
          <AsideBlock />
        </main>
      </div>
    </>
  )
}

export default App
