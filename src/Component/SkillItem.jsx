
export const SkillItem = ({ image , title }) => {
  return (
    <div className="item">
        <img src={ image } alt="skill" />
        <h5>{ title }</h5>
    </div>
    
    
  )
}



