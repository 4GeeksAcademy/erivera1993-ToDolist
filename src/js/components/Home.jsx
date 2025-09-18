import React, { useState } from "react";


//create your first component
const Home = () => {
	const [taskText, setTaskText] = useState("");
	const [tasks, setTasks] = useState([]);
	const addTask = () => {
		const text = taskText.trim();
		if (!text) return;
		setTasks([...tasks, text]);
		setTaskText("");

	};
	const removeTask = (indexToRemove) => {
		setTasks(tasks.filter((_, i) => i !== indexToRemove));
	};




	return (
		<div>
			<h1 className="app-title">todos</h1>

			<div className="todo-card">
				<div className="todo-input-row">
					<input
						className="todo-input"
						type="text"
						value={taskText}
						onChange={(e) => setTaskText(e.target.value)}
						onKeyDown={(e) => { if (e.key === "Enter") addTask(); }}
						placeholder="What needs to be done?"
						aria-label="Add a task"
					/>
				</div>

				<ul className="todo-list">
					{tasks.length === 0 ? (
						<li className="empty-row">No tasks, add a task</li>
					) : (
						tasks.map((t, i) => (
							<li key={i} className="todo-item">
								<span>{t}</span>
								<button
									className="delete-btn"
									onClick={() => removeTask(i)}
									aria-label={`Delete ${t}`}
									title="Delete"
								>
									×
								</button>
							</li>

						))
					)}
				</ul>


				<div className="todo-footer">
					{tasks.length} {tasks.length === 1 ? "item" : "items"}
				</div>

			</div>
		</div>
	);
};

export default Home;
