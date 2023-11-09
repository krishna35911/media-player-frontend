

// api to upload video

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const uploadAllVideo =async(reqBody)=>
{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// api to get all video

export const getAllVideos = async()=>
{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

// api to delete a video
export const deleteVideo = async(id)=>
{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// add watch history
export const addToHistory = async(videoDetails)=>
{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// to get data from history
export const getAllHistory = async()=>
{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to delete history
export const deleteHistory = async(id)=>
{
   return await commonAPI('DELETE',`${serverURL}/history/${id} `,{})
}

// api to add category
export const addCategory = async(body)=>
{
   return await commonAPI('POST',`${serverURL}/category `,body)
}


// api to get all category
export const getAllCategory = async()=>
{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

// api to delete category
export const deleteCategory = async(id)=>
{
   return await commonAPI('DELETE',`${serverURL}/category/${id} `,{})
}

// api to get all category
export const getAvideo = async(id)=>
{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// api call to update the category
export const updateCategory=async(id,body)=>
{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}