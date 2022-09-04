import React from 'react'

const ResetPassword = () => {
  return (
    <div>
           <form action="" method="post">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      /><br />
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="confirm-password"
      /><br />
      <input type="submit" value="submit" />
    </form>
    </div>
  )
}

export default ResetPassword