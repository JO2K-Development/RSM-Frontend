import { useSelector } from "react-redux";
import { RequestsSliceState } from "../../../../redux/slices/RequestsSlice";
import { Store } from "../../../../redux/store";
import ColumnProvider from "../Main/ColumnProvider";
import { Bars } from "react-loader-spinner";
import RequestCard from "../RequestCard";

const ProviderRequests = () => {
  const {
    unassignedRequests,
    assignedRequests,
    loading: requestLoading,
  } = useSelector<Store, RequestsSliceState>((state) => state.requests);
  const handleFocus=(id:string)=>{

    console.log(id)

  }
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
            <RequestCard key={index} request={request}  handleButton={handleFocus}/>
          ))
        )}
      </ColumnProvider>
    </div>
  );
};

export default ProviderRequests;
