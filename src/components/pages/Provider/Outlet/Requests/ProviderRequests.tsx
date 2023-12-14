import { useSelector } from "react-redux";
import { RequestsSliceState } from "../../../../../redux/slices/RequestsSlice";
import { Store } from "../../../../../redux/store";
import ColumnProvider from "../../Main/ColumnProvider";
import { Bars } from "react-loader-spinner";
import RequestCard from "../../RequestCard";
import { useState } from "react";
import RequestType from "../../../../../types/Request";
import ActiveRequestView from "./ActiveRequestView";
import { useLocation } from "react-router-dom";

const ProviderRequests = () => {
  const {
    unassignedRequests,
    assignedRequests,
    loading: requestLoading,
  } = useSelector<Store, RequestsSliceState>((state) => state.requests);
  const [activeRequest, setActiveRequest] = useState<RequestType | null>(null);
  const handleFocus = (id: string) => {
    setActiveRequest(assignedRequests.find((request) => request.id === id)!);
  };
  const {state}=useLocation()
  console.log(state)
  console.log(activeRequest)

  return (
    <div className=" h-full grid grid-cols-2  pb-[2rem]">
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
            <RequestCard
              key={index}
              request={request}
              handleButton={handleFocus}
            />
          ))
        )}
      </ColumnProvider>


      <ColumnProvider title="Edition:">
        <ActiveRequestView request={activeRequest}/>
      </ColumnProvider>
    </div>
  );
};

export default ProviderRequests;
