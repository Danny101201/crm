import React, { useState, useEffect } from "react";
import { stringify } from "qs";

import SearchPanel from "./SearchPanel";
import SearchList from "./SearchList";

import { useMount, useDebounce } from "hooks/index";

import { cleanObj } from "utils/index";
const HOST = process.env.NEXT_PUBLIC_API_HOST;
function SearchComponent() {
  const [params, setParams] = useState<Params>({
    name: "",
    personId: "",
  });
  const debounceParame = useDebounce(params, 1000);
  const [users, setUser] = useState<UserType[]>([]);
  const [list, setList] = useState<ListType[]>([]);
  const getUsers = () => {
    fetch(`${HOST}/users`).then(async (res) => {
      if (res.ok) {
        setUser(await res.json());
      }
    });
  };
  useMount(getUsers);

  useEffect(() => {
    fetch(`${HOST}/projects?${stringify(cleanObj(params))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceParame]);

  return (
    <div>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <SearchList list={list} users={users} />
    </div>
  );
}

export default SearchComponent;
