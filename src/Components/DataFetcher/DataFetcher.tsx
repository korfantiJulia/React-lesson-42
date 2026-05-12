import { useState, useEffect } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

export const DataFetcher = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        const users: User[] = request.data;
        setUsers(users);
      } catch (error) {
        if (error instanceof Error) {
          return setError(error.message);
        } else {
          return setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="p-4 text-start">Users Data:</h1>
      <ul className="m-4 flex flex-col items-start gap-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex w-[300px] flex-col rounded border p-4 shadow-lg"
          >
            <strong className="text-lg">{user.name}</strong>
            <span className="mt-2 text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
