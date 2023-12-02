import { useForm } from "react-hook-form";
import FormInput from "../../../common/FormInput";
import Provider from "../../../../types/Provider";
const ProviderAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const provider: Provider = {
    firstName: "Janusz",
    lastName: "Kowalski",
    email: "email@gmail.com",
    password: "password",
    phoneNumber: "123456789",
  };

  return (
    <div className="flex flex-col max-w-[1200px] w-full mx-auto p-[2rem] gap-[1rem] text-[2rem]">
      <div className="flex text-white font-bold  items-center mr-[2rem]">
        <h1> Edit Profile</h1>
        <div className="ml-auto overflow-hidden rounded-full">
          <img src="/img/ziobro.jpg" alt="" />
        </div>
      </div>

      <div className="flex gap-[2rem] ">
        <FormInput
          label="First name"
          type="firstName"
          placeholder="First name"
          defaultValue={provider.firstName}
          rest={register("firstName", { required: true, maxLength: 80 })}
        />

        <FormInput
          label="Last name"
          type="lastName"
          placeholder="Last name"
          defaultValue={provider.lastName}
          rest={register("lastName", { required: true, maxLength: 80 })}
        />
      </div>
      <FormInput
        label="Email"
        type="email"
        placeholder="Email"
        defaultValue={provider.email}
        rest={register("email", { required: true, maxLength: 80 })}
      />
      <FormInput
        label="Phone number"
        type="phoneNumber"
        placeholder="Phone number"
        defaultValue={provider.phoneNumber}
        rest={register("phoneNumber", { required: true, maxLength: 80 })}
      />
      <div className="w-full flex flex-col ">
        <div className="text-[0.7em] text-white">password</div>
        <input
          className="w-full py-1 pl-2 "
          type={'password'}
          disabled
          defaultValue={""}
          placeholder={provider.password}
          {...register("phoneNumber", { required: true, maxLength: 80 })}
        />
      </div>
    </div>
  );
};

export default ProviderAccount;
