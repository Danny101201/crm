import React from "react";
interface SearchListProps {
  list: ListType[];
  users: UserType[];
}
function SearchList({ list, users }: SearchListProps) {
  return (
    <table>
      <thead>
        <tr>
          <td>項目</td>
          <td>負責人</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <tr id={item.id as unknown as string}>
            <td>{item.name}</td>
            <td>{users.find((user) => user.id === item.id)?.name || "未知"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchList;
