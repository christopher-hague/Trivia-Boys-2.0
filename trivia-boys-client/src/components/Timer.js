import React from 'react'

const Timer = ({ time }) => {
  // displays will include a list of messages that will update as the time passes
  var displays = []

  return (
    <div className="timer">
      {time}
    </div>
  )
}

export default Timer
