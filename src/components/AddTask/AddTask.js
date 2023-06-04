import { useEffect, useRef } from "react";

// importing corresponding css
import "./AddTask.css";

// importing icons
import { SiAddthis } from "react-icons/si";
import { BiSave } from "react-icons/bi";

// Creating a component for adding a new task
function AddTask(props) {
  // using useRef hook for inputs
  const title = useRef();

  // using useEffect hook for checking whether we are in editing state or not
  useEffect(() => {
    title.current.value = props.isEdit.edit ? props.isEdit.task.title : "";
  }, [props.isEdit]);

  return (
    // creating container for the form
    <div className="taskContainer">
      {/* creating up a form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addtask(title.current.value);
          title.current.value = "";
        }}
      >
        <div>
          <label>Enter Todo</label>
          <br />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2387/2387679.png"
            width={50}
            height={52}
            style={{
              position: "absolute",
              left: "415px",
              paddingTop: "7px",
              zIndex: 2,
            }}
            alt="todo-inputIcon"
          />
          <span className="input">
            <input ref={title} type="text" required />
            <span></span>
          </span>
        </div>

        <div>
          {/* checking for editing state or not */}
          {props.isEdit.edit ? (
            <button
              type="button"
              style={{ backgroundColor: "chartreuse" }}
              onClick={() => {
                const task = props.isEdit.task;
                task.title = title.current.value;
                props.updateHandler(task, false);
              }}
            >
              <BiSave size={50} style={{ color: "green" }}></BiSave>
            </button>
          ) : (
            <button type="submit">
              <SiAddthis size={50} style={{ color: "royalblue" }}></SiAddthis>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddTask;
