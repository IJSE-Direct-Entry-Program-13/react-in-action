import styles from './App.module.css'
import MyNewComponent from "./my-new/MyNewComponent.tsx";

function App() {

  return (
    <>
        <h1 className={styles.h1}>React: Hello View Encapsulation</h1>
        <hr/>
        <MyNewComponent />
    </>
  )
}

export default App
