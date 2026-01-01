import LoginUI from '@/module/components/login-ui'
import { requireUnAuth } from '@/module/utils/auth-utils'
import React from 'react'

async function Loginpage() {
  await requireUnAuth()
  return (
    <div>
      <LoginUI/>
    </div>
  )
}

export default Loginpage
