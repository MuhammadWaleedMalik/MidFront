import { Navigate, Outlet } from "react-router-dom";

const ProtectMainPage = () => {
  const credits = localStorage.getItem("credits");
  const hasEnoughCredits = credits && parseInt(credits, 10) >= 5;
    if (!hasEnoughCredits) alert("You do not have enough credits to use this page Buy credits to continue");
// alert('You do not have enough credits to use this page Buy credits to continue');
  return hasEnoughCredits ? <Outlet /> : <Navigate to="pricing" />;

};

export default ProtectMainPage;
