import { useDispatch, useSelector } from "react-redux";
import {
  ProviderAuthState,
  logout,
} from "../../../redux/slices/ProviderAuthSlice";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate, Outlet, useOutlet, useParams } from "react-router-dom";
import ProviderHeader from "./Main/ProviderHeader";
import RequestType from "../../../types/Request";
import RequestCard from "./RequestCard";
import ColumnProvider from "./Main/ColumnProvider";
import Navbar from "./Navbar";
import {
  ProviderInfoState,
  getProviderInfo,
} from "../../../redux/slices/ProviderInfoSlice";
import { useEffect, useState } from "react";
import {
  RequestsSliceState,
  getRequests,
} from "../../../redux/slices/RequestsSlice";
import pairRequest from "../../../api/pairRequest";

const ProviderMainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token, email } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const { ProviderInfo } = useSelector<Store, ProviderInfoState>(
    (state) => state.providerInfo
  );
  const { unassignedRequests, assignedRequests } = useSelector<
    Store,
    RequestsSliceState
  >((state) => state.requests);

  useEffect(() => {
    dispatch(getProviderInfo({ email: email, token: token != null ? token : "" })).then((state:any) => {dispatch(getRequests({ token: token!, email: state.payload.email }));});
    // allRequests(token!).then((res) => res.json()).then((data)=>console.log(data));
    // pairRequest(token!,ProviderInfo?.id!,"3a52c492-baad-45f3-963f-de0ba0d7452b")
  }, []);


  console.log(unassignedRequests, assignedRequests);
  const handleLogout = () => {
    dispatch(logout());
  };
  let { id } = useParams();
  const outlet = useOutlet();

  return token == null || id != token ? (
    <Navigate to="/provider/login" />
  ) : (
    <div className="provider-page-bg ">
      <div className=" bg-neutral-900/60 lg:h-screen  flex flex-col ">
        <Navbar />

        <Outlet />
        {!outlet && (
          <>
            {" "}
            {ProviderInfo && <ProviderHeader provider={ProviderInfo} />}
            <div className="min-h-0   grid lg:grid-cols-2 lg:max-h-[80%] lg:h-[80%] h-[90vh] flex-grow">
              <ColumnProvider title={"Your pending requests!"}>
                {assignedRequests.map((request, index) => (
                  <RequestCard key={index} request={request} />
                ))}
              </ColumnProvider>

              <ColumnProvider
                title={"The  requests that need to be taken care of!"}
              >
                {unassignedRequests.map((request, index) => (
                  <RequestCard key={index} request={request} />
                ))}
              </ColumnProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProviderMainPage;
