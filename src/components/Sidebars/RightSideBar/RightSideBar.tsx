import Styled from "styled-components";
import Task from "../../../pages/Home/Task";
import { Trash, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/UseRedux";
import useLocalStorageListener from "../../../lib/useLocalStorage";
import { removeNote } from "../../../redux/slices/notesSlice";

const RightSideBarContainer = Styled.aside`
  margin:2rem 0;
  width: 22%;
  padding: 2rem 1.2rem;
  background: ${({ theme }) => theme.lightBg};
  position: relative;
`;

const DeleteContainer = Styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 0.1rem;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  div {
    cursor: pointer;
  }
`;

function RightSideBar() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
  const targetId = useLocalStorageListener("current") || ""; // Handle null case

  // Find the note with the targetId
  const targetNote = notes.find((note) => note.id === targetId);

  // Clear the 'current' localStorage value
  const clearTargetId = () => {
    localStorage.removeItem("current");
    window.dispatchEvent(new Event("local-storage-change")); // Ensure state sync in same tab
  };

  // Handle Trash functionality (assuming it's meant to delete notes)
  const handleDelete = () => {
    if (targetId) {
      dispatch(removeNote(targetId));
    }
  };

  return (
    <RightSideBarContainer>
      {targetNote && <Task task={targetNote} />}
      <DeleteContainer>
        <div onClick={clearTargetId}>
          <X />
        </div>
        <span>Created Today</span>
        <div onClick={handleDelete}>
          <Trash />
        </div>
      </DeleteContainer>
    </RightSideBarContainer>
  );
}

export default RightSideBar;
