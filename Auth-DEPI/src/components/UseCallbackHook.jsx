import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallbackHook() {
  const list = ["Ahmed", "Mohamed", "Ali", "Saad"];
  const [users, setUsers] = useState(list);
  const filterUsers = useCallback(
    (val) => {
      const filteredUsers = list.filter((e) =>
        e.toLowerCase().includes(val.toLowerCase())
      );
      setUsers(filteredUsers);
      console.log(users[0]);
    },
    [users]
  );

  const changeState = () => {
    const newArr = [...users];
    newArr.push("test");
    setUsers(newArr);
  };

  return (
    <div className="container">
      <h1>useCallback Hook Example</h1>
      <button onClick={changeState}>Add User</button>
      <Child filterUsers={filterUsers} />
      <ul className="list-group list-group-flush">
        {users.map((user, index) => (
          <li className="list-group-item" key={index}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
