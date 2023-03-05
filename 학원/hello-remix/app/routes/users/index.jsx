import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getUsers } from "../../lib/api";

export const loader = async () => {
  const data = await getUsers();
  return json(data); // Content-Type : application/json
};

export default function Users() {
  // 반환한 데이터는 라우트 컴포넌트에서 useLoaderData 을 통해서 받아와서 사용할수 있다
  const users = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
