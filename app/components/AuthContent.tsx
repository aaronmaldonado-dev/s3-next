"use client";
import { useEffect, useState } from "react";

function AuthContent({ username }: { username: string | null | undefined }) {
  const [files, setFiles] = useState([]);
  const [center, setCenter] = useState();

  // TODO: better data handling
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/userFiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      });

      const data = await result.json();

      return { ...data };
    };

    if (username) {
      fetchData().then((data) => {
        setFiles(data.files);
        setCenter(data.user.center);
      });
    }
  }, []);

  return (
    <div>
      {username && <h1 className="text-xl font-bold my-8">Welcome {username}</h1>}

      {!files && <h1>No files</h1>}

      {files && (
        <div>
          <h1 className="font-bold">Files</h1>
          <ul>
            {files.map((file: any) => (
              <li key={file.name}>
                <a className="text-blue-600 dark:text-blue-500 hover:underline" target="blank" title={file.name} href={file.url}>
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {center && (
        <div className="mt-4">
          <h1 className="font-bold">Center</h1>
          <p>{center}</p>
        </div>
      )}
    </div>
  );
}

export default AuthContent;
