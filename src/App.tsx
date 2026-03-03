/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import ListingFlow from "./pages/ListingFlow";
import AutoMatch from "./pages/AutoMatch";
import ExpiryFlow from "./pages/ExpiryFlow";
import NoBuyerNet from "./pages/NoBuyerNet";
import RegenScore from "./pages/RegenScore";
import NgoModule from "./pages/NgoModule";
import Profile from "./pages/Profile";
import ProductPassport from "./pages/ProductPassport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboarding />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="home" element={<Home />} />
          
          {/* Listing Flow */}
          <Route path="list/camera" element={<ListingFlow />} />
          <Route path="list/details" element={<ListingFlow />} />
          <Route path="list/preview" element={<ListingFlow />} />
          <Route path="list/match" element={<AutoMatch />} />
          
          <Route path="expiry" element={<ExpiryFlow />} />
          <Route path="nobuyer" element={<NoBuyerNet />} />
          <Route path="score" element={<RegenScore />} />
          <Route path="ngo" element={<NgoModule />} />
          <Route path="profile" element={<Profile />} />
          <Route path="passport" element={<ProductPassport />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
