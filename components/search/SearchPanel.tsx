import React, { ChangeEvent, useState, useEffect } from "react";
import { json } from "stream/consumers";

interface SearchPanelProps {
  params: Params;
  setParams: React.Dispatch<React.SetStateAction<Params>>;
  users: UserType[];
}
function SearchPanel({ users, params, setParams }: SearchPanelProps) {
  function handleChangeValue(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setParams((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form>
      <input
        name="name"
        type="text"
        value={params.name}
        onChange={handleChangeValue}
      />
      <select
        name="personId"
        value={params.personId}
        onChange={handleChangeValue}
      >
        <option value="">負責人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchPanel;
