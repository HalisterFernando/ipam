import React from 'react';
import { Navigate, Route, Routes as PageRoutes } from 'react-router-dom';
import MainPage from '../pages/MainPage';

export default function Routes() {
  return (
    <PageRoutes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<MainPage />} />
    </PageRoutes>
  );
}
