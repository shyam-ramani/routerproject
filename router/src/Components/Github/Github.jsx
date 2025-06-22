import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repo: {data.public_repos}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/shyam-ramani');
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to load GitHub user info:", error);
        return null;
    }
};