import React from 'react'
import Auth from '@/pages/Auth/Auth'
import SigninContainer from '@/components/organisms/Auth/SigninContainer'
import SignupContainer from '@/components/organisms/Auth/SignupContainer'
import { NotFound } from '@/components/organisms/Auth/NotFound'
import { Route, Routes } from 'react-router'
import ProtectedRoute from './components/molecules/ProctectedRoute/ProtectedRoute'
import Home from './pages/Home/Home'
import { WorkspaceLayout } from './pages/Workspace/Layout'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
            <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="/workspaces/:workspaceId" element={<ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes