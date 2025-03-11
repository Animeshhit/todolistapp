import { CheckIcon, Star } from "lucide-react";
import Styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks/UseRedux";
import { toggleStarred, toggleStatus } from "../../redux/slices/notesSlice";

interface PropsType {
  task: {
    id: string;
    task: string;
    status: "pending" | "completed";
    starred: boolean;
  };
}

const TaskContainer = Styled.div`
 display:flex;
 align-items:center;
 padding:1rem 0;
 border-top:2px solid rgba(0,0,0,0.1);
 justify-content:space-between;
 .task_info{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:1rem;
  .box{
    border:2.5px solid rgba(0,0,0,0.6);
    width:20px;
    height:20px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  }
  .checkIcon{
    border:none;
    background:${({ theme }) => theme.accent};
    color:white;
  }
 }
 button{
  border:none;
  outline:none;
  background:transparent;
  cursor:pointer;
 }
 span{
  cursor:pointer;
 }
`;

const Task = ({ task: props }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <TaskContainer>
      <div className="task_info">
        <div onClick={() => dispatch(toggleStatus(props.id))}>
          {props.status == "completed" ? (
            <div className="checkIcon box">
              <CheckIcon />
            </div>
          ) : (
            <div className="unCheckIcon box"></div>
          )}
        </div>
        <span
          onClick={() => {
            localStorage.setItem("current", props.id);
            window.dispatchEvent(new Event("local-storage-change"));
          }}
        >
          {props.task}
        </span>
      </div>
      <button type="button" onClick={() => dispatch(toggleStarred(props.id))}>
        {props.starred ? <Star fill="true" /> : <Star />}
      </button>
    </TaskContainer>
  );
};

export default Task;
