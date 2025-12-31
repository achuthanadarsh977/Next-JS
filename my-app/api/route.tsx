import { NextRequest , NextResponse } from "next/server";


interface Props{
    params: {id:number}
}

export function GET(request:NextRequest){
    return NextResponse.json([
        {id:1,name:"Mosh"} , {id:2,name:"Sunil"}
    ])
}


import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  const user = await res.json();

  return NextResponse.json(user);
}
