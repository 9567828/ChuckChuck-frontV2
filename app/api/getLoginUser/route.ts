import { tempUser } from "@/utils/tempUser";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const loginUser = tempUser.find((t) => t.token === token);

  if (loginUser === undefined) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ message: loginUser }, { status: 200 });
};
