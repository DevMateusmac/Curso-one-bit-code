/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import style from "./style.module.css"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"

export default function Profile(props){
  return (
    <div className={style.container}>
      <img className={style.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow</button>
      </Title> 
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection >
        <div className={style.links}> 
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
        </div>
      </ProfileSection>
    </div>
  )
}



