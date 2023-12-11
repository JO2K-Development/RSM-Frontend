import { useDispatch, useSelector } from "react-redux";
import {
  ProviderAuthState,
  logout,
} from "../../../redux/slices/ProviderAuthSlice";
import { AppDispatch, Store } from "../../../redux/store";
import { Navigate, Outlet, useOutlet, useParams } from "react-router-dom";
import ProviderHeader from "./Main/ProviderHeader";
import RequestCard from "./RequestCard";
import ColumnProvider from "./Main/ColumnProvider";
import Navbar from "./Navbar";
import {
  ProviderInfoState,
  getProviderInfo,
} from "../../../redux/slices/ProviderInfoSlice";
import { useEffect, useState } from "react";
import { RequestsSliceState } from "../../../redux/slices/RequestsSlice";
import { Bars } from "react-loader-spinner";
import pairRequest from "../../../api/pairRequest";

const ProviderMainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token, email } = useSelector<Store, ProviderAuthState>(
    (state) => state.providerAuth
  );
  const { ProviderInfo, loading: providerLoading } = useSelector<
    Store,
    ProviderInfoState
  >((state) => state.providerInfo);
  const {
    unassignedRequests,
    assignedRequests,
    loading: requestLoading,
  } = useSelector<Store, RequestsSliceState>((state) => state.requests);

  useEffect(() => {
    dispatch(
      getProviderInfo({ email: email, token: token != null ? token : "" })
    );
  }, []);



  const onPair=(id:string) => {
    pairRequest(token!,ProviderInfo?.id!,id).then(()=>{ dispatch(
      getProviderInfo({ email: email, token: token != null ? token : "" })
    );})

  }

  console.log(providerLoading, "loading");
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
            <ProviderHeader provider={ProviderInfo} loading={providerLoading} />
            <div className="min-h-0   grid lg:grid-cols-2 lg:max-h-[80%] lg:h-[80%] h-[90vh] flex-grow">
              <ColumnProvider title={"Your pending requests!"}>
                {requestLoading ? (
                  <div className="bg-black/40 h-full flex flex-col justify-center items-center ">
                    <Bars
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  assignedRequests.map((request, index) => (
                    <RequestCard key={index} request={request} />
                  ))
                )}
              </ColumnProvider>

              <ColumnProvider
                title={"The  requests that need to be taken care of!"}
              >
                {requestLoading ? (
                  <div className="bg-black/40 h-full flex flex-col justify-center items-center">
                    <Bars
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  unassignedRequests.map((request, index) => (
                    <RequestCard key={index} handleButton={onPair} request={request} />
                  ))
                )}
              </ColumnProvider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProviderMainPage;
