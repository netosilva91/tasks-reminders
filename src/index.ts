// IIFE to preserve code scope
(() => {
  // Mocks
  const todoMock = {
    description: "Help mark with code testing",
    done: false,
  };

  const reminderMock = {
    description: "My brother's bday",
    date: "15.09.2021",
  };

  const taskView = {
    render(tasks: Array<Object>) {
      // Clear view
      const tasksList = document.getElementById("tasksList");
      while (tasksList?.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
      }

      // Render Tasks
      // task.forEach((task) => console.log(JSON.stringify(task)));
      tasks.forEach((task) => {
        const li = document.createElement("LI");
        const textNode = document.createTextNode(JSON.stringify(task));
        li.appendChild(textNode);
        tasksList?.appendChild(li);
      });
    },
  };

  // Controllers
  const TaskController = (view: typeof taskView) => {
    const tasks: Array<Object> = [todoMock, reminderMock];

    const handleTaskCreate = (event: Event) => {
      event.preventDefault();
      view.render(tasks);
    };

    document
      .getElementById("taskForm")
      ?.addEventListener("submit", handleTaskCreate);
  };

  TaskController(taskView);
})();
