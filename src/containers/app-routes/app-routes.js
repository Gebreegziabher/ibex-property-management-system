import "./app-routes.css";

import { Navigate, Route, Routes } from "react-router";
import MainPage from "../main/main-page";
import UserLogin from "../../components/user/login/user-login";
import UserRegistration from "../../components/user/registration/user-registration";
import PropertyDetailsCard from "../../components/property-details-card/property-details-card";
import PropertyHeart from "../../components/property-heart/property-heart";
import PropertyThumbsDown from "../../components/property-thumbs-down/property-thubms-down";
import PurchasePropertyLanding from "../../components/purchage-property-landing/purchase-property-landing";
import AdminDashboard from "../../components/user/dashboard/admin-dashboard/admin-dashboard";
import BuyerDashboard from "../../components/user/dashboard/buyer-dashboard/buyer-dashboard";
import SellerDashboardSummary from "../../components/user/dashboard/seller-dashboard/dashboard-summary";
import CreateProperty from "../../components/user/dashboard/seller-dashboard/create-property";
import DeleteProperty from "../../components/user/dashboard/seller-dashboard/delete-property";
import PropertyOffers from "../../components/user/dashboard/seller-dashboard/property-offers";
import UpdateProperty from "../../components/user/dashboard/seller-dashboard/update-property";
import FilterAllProperties from "../filter-all-properties/filter-all-properties";
import CreateRole from "../../components/user/dashboard/admin-dashboard/create-role";
import EditRole from "../../components/user/dashboard/admin-dashboard/edit-role";
import CreateUser from "../../components/user/dashboard/admin-dashboard/create-user";
import ChangePassword from "../../components/user/dashboard/admin-dashboard/change-password";
import PropertyProposedPrice from "../../components/property-proposed-price/property-proppsed-price";

const AppRoutes = () => {
    return (
        <div className="main-section">
            <Routes>
                <Route path="/" element={<Navigate replace to="main" />} />
                <Route path="main" element={<MainPage />} />
                <Route path="filter" element={<FilterAllProperties />} />
                <Route path="login" element={<UserLogin />} />
                <Route path="user-registration" element={<UserRegistration />} />

                <Route path="/property-details/:id" element={<PropertyDetailsCard />} />
                <Route path="/property/:id/heart" element={<PropertyHeart />} />
                <Route path="/property/:id/thumbs-down" element={<PropertyThumbsDown />} />
                <Route path="/property/:id/purchase-landing" element={<PurchasePropertyLanding />} />
                <Route path="/property/:id/proposed-price" element={<PropertyProposedPrice />} />
                
                {/* Admin Dashboard */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-dashboard/roles/create" element={<CreateRole />} />
                <Route path="/admin-dashboard/roles/:id/edit" element={<EditRole />} />
                <Route path="/admin-dashboard/users/create" element={<CreateUser />} />
                <Route path="/admin-dashboard/users/change-password" element={<ChangePassword />} />

                {/* Buyer Dashboard */}
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />

                {/* Seller Dashboard */}
                <Route path="/seller-dashboard/" element={<SellerDashboardSummary />} />
                <Route path="/seller-dashboard/property/:id/offers" element={<PropertyOffers />} />
                <Route path="/seller-dashboard/property/create" element={<CreateProperty />} />
                <Route path="/seller-dashboard/property/update/:id" element={<UpdateProperty />} />
                <Route path="/seller-dashboard/property/delete/:id" element={<DeleteProperty />} />
                
            </Routes>
        </div>
    );
}
export default AppRoutes;