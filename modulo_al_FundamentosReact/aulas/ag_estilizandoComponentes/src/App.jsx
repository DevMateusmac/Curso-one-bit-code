import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import StatusText from "./components/StatusText"
import styles from "./App.module.css"

export default function App(){
  return (
    <>
      <div
        // style={{
        //   backgroundColor: "#2c2c2d",
        //   display: "grid",
        //   minHeight: "100vh",
        //   placeContent: "center",
        //   textAlign: "center"
        // }} 
        //a forma acima é a inline, a de baixo é usando o module.css
        className={styles.app}
      >
        <Title />
        <Subtitle />
        <StatusText />
      </div>
    </>
  )
}