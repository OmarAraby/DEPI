import { memo } from "react";

function Child({ filterUsers }) {
  console.log("Memo from Cild");

  return (
    <>
      <div className="input-group m-4">
        <input
          type="text"
          onChange={(e) => filterUsers(e.target.value)}
          className="form-control"
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default memo(Child);
