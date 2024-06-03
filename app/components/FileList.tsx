import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

async function FileList() {
  const session = await getServerSession(authOptions);

  return <div>FileList</div>;
}

export default FileList;
