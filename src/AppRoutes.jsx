import React from 'react'
import Auth from '@/pages/Auth/Auth'
import SigninContainer from '@/components/organisms/Auth/SigninContainer'
import SignupContainer from '@/components/organisms/Auth/SignupContainer'
import { NotFound } from '@/components/organisms/Auth/NotFound'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
            <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
            <Route path="/home" element={<Auth><h1>Home</h1></Auth>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes