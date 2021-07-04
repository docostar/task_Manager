import { Task } from "./Task";

// const tasklist=
// [
//     {
//         id:1,
//         text: "Doctor Appoinment",
//         day: 'July 7th 2021 at 4:30pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text: "Meet at school",
//         day: 'July 9th 2021 at 10:30am',
//         reminder:true,
//     },
//     {
//         id:3,
//         text: "Listnel Music",
//         day: 'July 15th 2021 at 5:30pm',
//         reminder:false,
//     }
// ]

export const Tasks = (props) => {
  return (
    <div className="Container mx-auto border-3 rounded-pill bg-primary ">
      <h1>Task List</h1>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} />
      ))}
    </div>
  );
};
