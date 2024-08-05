import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
            
            <ul>
            <li><i class="fa-solid fa-house"></i><span>Home</span></li>
            <li><i class="fa-solid fa-video"> </i><span>Shorts</span></li>
            <li><i class="fa-brands fa-cc-discover"></i><span>Subscriptions</span></li>
             </ul>
             <hr />
             <br /> <br />

             <ul>
                <h3>You</h3>
            <li><i class="fa-regular fa-user"></i><span>Your Channel</span></li>
         <li><i class="fa-solid fa-clock-rotate-left"> </i><span>History</span></li>
            <li><i class="fa-solid fa-video"></i><span>Your Vidoes</span></li>
            <li><i class="fa-regular fa-clock"></i><span>Watch Later</span></li>
            <li><i class="fa-regular fa-thumbs-up"></i><span>Liked videos</span></li>
             </ul>
             <hr />
             <br /> <br />


             <ul>
                <h3>Subsriptions</h3>
            <li><img src="public\Mrbeastlogo.webp" alt="" /><span>MR Beast</span></li>
            <li><img src="public\1000002252.jpg" alt="" /><span>Jerry</span></li>
            <li><img src="public\unnamed.jpg" alt="" /><span>Honest Hour</span></li>
             </ul>
             <hr />
             <br /> <br />


             <ul>
                <h3>Explore</h3>
            <li><i class="fa-solid fa-fire"></i><span>Trending</span></li>
        <li><i class="fa-solid fa-music"> </i><span>Music</span></li>
            <li><i class="fa-solid fa-gamepad"></i><span>Gaming</span></li>
            <li><i class="fa-regular fa-newspaper"></i><span>News</span></li>
            <li><i class="fa-solid fa-baseball-bat-ball"></i><span>Sports</span></li>
             </ul>
             <hr />
             <br /> <br />




             <ul>
                
            <li><i class="fa-solid fa-gear"></i><span>Settings</span></li>
        <li><i class="fa-solid fa-bullhorn"> </i><span>Report History</span></li>
            <li><i class="fa-solid fa-bell"></i><span>Help</span></li>
            <li><i class="fa-regular fa-comment"></i><span>Send Feedback</span></li>
             </ul>
             <hr />
             <br /> <br />



      </div>
    </>
  )
}

export default Sidebar
