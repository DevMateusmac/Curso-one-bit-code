import Profile from "./components/Profile"
import avatarImg from "./assets/avatar.jpg"

export default function App(){
  return (
    <div className="app">
      <Profile 
        avatar={avatarImg}
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc"
        email="john.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}

