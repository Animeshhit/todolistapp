import { Bell, Calendar, ChevronDown, Repeat } from "lucide-react";
import Styled from "styled-components";
import Task from "./Task";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/UseRedux";
import { addNote } from "../../redux/slices/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const HomeWrapper = Styled.div`
 width:100%;
 margin-top:2rem;
`;

const FilterHeader = Styled.div`
 display:flex;
 align-items:center;
 gap:0.2rem;
 margin:0.5rem 0;
`;

const CreateTodoContainer = Styled.div`
  width:100%;
  background: linear-gradient(0deg, rgba(53, 121, 55, 0.1) 0%, rgba(208, 255, 210, 0.1) 100%);
  textarea{
    width:100%;
    background:transparent;
    border:none;
    outline:none;
    padding:1.2rem 1.5rem;
    height:130px;
    resize:none;
    font-size:1rem;
  }
  .create_todo_options{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0.8rem 1rem;
    div{
      display:flex;
      align-items:center;
      gap:1rem;
    }
    button{
      padding:0.5rem 0.8rem;
      border-radius:8px;
      border:none;
      outline:none;
      cursor:pointer;
      background:rgba(53, 121, 55, 0.1);
      color:${({ theme }) => theme.accent};
    }
  }
`;

const TasksContainer = Styled.div`
  margin:2rem 0;
`;

function Home() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
  const [task, setTask] = useState<string>("");

  const handleNewTask = () => {
    if (!task || !(task.length > 0)) return;
    const newTask = {
      id: nanoid(),
      task,
      status: "pending" as "pending" | "completed",
      starred: false,
    };
    dispatch(addNote(newTask));
    setTask("");
  };

  return (
    <HomeWrapper>
      <FilterHeader>
        <span>To Do</span>
        <ChevronDown />
      </FilterHeader>
      <CreateTodoContainer>
        <textarea
          placeholder="Add A Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
        <div className="create_todo_options">
          <div>
            <Bell />
            <Repeat />
            <Calendar />
          </div>
          <button type="button" onClick={handleNewTask}>
            ADD TASK
          </button>
        </div>
      </CreateTodoContainer>
      <TasksContainer>
        {notes &&
          notes.map((note) => {
            return <Task task={note} />;
          })}
      </TasksContainer>
    </HomeWrapper>
  );
}

export default Home;
