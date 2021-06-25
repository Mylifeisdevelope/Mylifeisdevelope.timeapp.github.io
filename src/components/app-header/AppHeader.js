import Timer from "../timer/Timer";
import "./AppHeader.css"

const  AppHeader = ({entry,likes = 0,time}) => {
  return (
    <div className='app-header '> 
      <h2  >Arman Albertyan</h2>
      <Timer time={time} />
      <h1>{entry} of entry liked {likes}</h1>
    </div>
  );
}

export default AppHeader;
