// src/routes/AppRouter.jsx
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// 페이지 컴포넌트를 lazy loading 처리 (코드 스플리팅)
const Home = lazy(() => import('../pages/Home'))
const Game = lazy(() => import('../pages/Game'))
const Tutorial = lazy(() => import('../pages/Tutorial'))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
