import React from 'react'

const AwardsTrigger = () => {
  return (
    <div class="awardsContainer">

    <div>
        <h2>Trigger Awards</h2>
        <div class="award"/>

        <div class="award-card" id="award-1">
        <span class="delete-icon">&times;</span>
        <h3>Fitness Champion</h3>
        <p>Complete 10 workouts.</p>
       
           <div class="progress-bar">
          <div class="progress" style="width: 50%;"></div>
          <div class="title">
          <div class="tit" style="width: 50%;"></div>
          <div class="Description">
            <p>Hello there is any event Trigger option</p>
          <div class="Descr" style="width: 50%;"></div>
        </div>
        <button class="update-button" onClick={ProgressEvent} >Update Progress</button>
        <button class="Editing" onChange={ProgressEvent}>Edit</button>
        <button class="Deleting" onClick={ProgressEvent} onClickCapture={addEventListener}>Delete</button>

      </div>

        
      
    </div>
    </div>
    </div>
    </div>

  )
}

export default AwardsTrigger;

