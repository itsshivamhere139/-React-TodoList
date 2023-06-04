//storing api url into a variable
const url = "https://jsonplaceholder.typicode.com/todos";

// fetching all the todo's from todos API
export const fetchTodo = async function () {
  let data = [];
  try {
    const response = await fetch(url);
    data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// function for creating new Task's
export const addTaskHandler = async function (title, userId) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        userId,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    // catching an error
    return {
      success: false,
      message: error.message,
    };
  }
};

// function for deleting a Task
export const deleteTask = async function (id) {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// function for updating a Task
export const updateTask = async function (task) {
  try {
    const response = await fetch(url + `/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
