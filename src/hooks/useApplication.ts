import { useState } from "react";
import apiClient from "@/lib/apiClient";
import toast from "react-hot-toast";

interface ApplicationRequest {
  requestId: string;
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  category: string;
  occupation: string;
  incomeRange: string;
  loanAmount: number;
  scheme: string;
  message: string;
}

export default function useApplication() {

  const [loading,setLoading] = useState(false);

  const submitApplication = async (data:ApplicationRequest) => {

    try{

      setLoading(true);

      const response = await apiClient.post(
        "/application/submit",
        data
      );

      toast.success("Application Submitted Successfully");

      return response.data;

    }catch(error:any){

      toast.error(
        error?.response?.data?.message || "Application submission failed"
      );

      throw error;

    }finally{
      setLoading(false);
    }

  };

  return { submitApplication , loading };

}