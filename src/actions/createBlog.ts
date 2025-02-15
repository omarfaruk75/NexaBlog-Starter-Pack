"use server"

import { redirect } from "next/navigation";

export const createBlog= async(data:FormData)=>{
    const blogData = Object.fromEntries(data.entries());
    // console.log('new blog data',blogData);
    const res = await fetch('http://localhost:5000/blogs',{
        method:'POST',
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(blogData)
    })

const blogInfo = await res.json();
if(blogInfo){
    redirect(`/blogs/${blogInfo.id}`)
}
return blogInfo;

}