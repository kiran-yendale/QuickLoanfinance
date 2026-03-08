import { useState, useEffect } from "react";
import apiClient from "@/lib/apiClient";
import toast from "react-hot-toast";

export default function useOtp() {

  const [requestId, setRequestId] = useState<string | null>(
    typeof window !== "undefined"
      ? localStorage.getItem("requestId")
      : null
  );

  const [mobileVerified, setMobileVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [mobileTimer, setMobileTimer] = useState(0);
  const [emailTimer, setEmailTimer] = useState(0);

  const [loading, setLoading] = useState(false);

  /* ---------------- SEND MOBILE OTP ---------------- */

  const sendMobileOtp = async (mobile: string) => {

    try {

      if (!mobile || mobile.length !== 10) {
        toast.error("Enter valid mobile number");
        return;
      }

      setLoading(true);

      const response = await apiClient.post("/otp/mobile/send", {
        mobile,
        requestId,
      });

      const newRequestId = response.data.requestId;

      setRequestId(newRequestId);
      localStorage.setItem("requestId", newRequestId);

      setMobileTimer(30);

      toast.success("OTP sent to mobile");

    } catch (error: unknown) {

      const err = error as { response?: { data?: { message?: string } } };

      toast.error(
        err?.response?.data?.message || "Failed to send OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- VERIFY MOBILE OTP ---------------- */

  const verifyMobileOtp = async (otp: string) => {

    try {

      if (!otp || otp.length !== 6) {
        toast.error("Enter valid OTP");
        return;
      }

      setLoading(true);

      await apiClient.post("/otp/mobile/verify", {
        requestId,
        otp,
      });

      setMobileVerified(true);

      toast.success("Mobile verified successfully");

    } catch (error: unknown) {

      const err = error as { response?: { data?: { message?: string } } };

      toast.error(
        err?.response?.data?.message || "Invalid OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- SEND EMAIL OTP ---------------- */

  const sendEmailOtp = async (email: string) => {

    try {

      if (!email || !email.includes("@")) {
        toast.error("Enter valid email");
        return;
      }

      setLoading(true);

      const response = await apiClient.post("/otp/email/send", {
        email,
        requestId,
      });

      const newRequestId = response.data.requestId;

      setRequestId(newRequestId);
      localStorage.setItem("requestId", newRequestId);

      setEmailTimer(30);

      toast.success("OTP sent to email");

    } catch (error: unknown) {

      const err = error as { response?: { data?: { message?: string } } };

      toast.error(
        err?.response?.data?.message || "Failed to send Email OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- VERIFY EMAIL OTP ---------------- */

  const verifyEmailOtp = async (otp: string) => {

    try {

      if (!otp || otp.length !== 6) {
        toast.error("Enter valid OTP");
        return;
      }

      setLoading(true);

      await apiClient.post("/otp/email/verify", {
        requestId,
        otp,
      });

      setEmailVerified(true);

      toast.success("Email verified successfully");

    } catch (error: unknown) {

      const err = error as { response?: { data?: { message?: string } } };

      toast.error(
        err?.response?.data?.message || "Invalid Email OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- OTP TIMERS ---------------- */

  useEffect(() => {

    let mobileInterval: NodeJS.Timeout;
    let emailInterval: NodeJS.Timeout;

    if (mobileTimer > 0) {

      mobileInterval = setInterval(() => {
        setMobileTimer((prev) => prev - 1);
      }, 1000);

    }

    if (emailTimer > 0) {

      emailInterval = setInterval(() => {
        setEmailTimer((prev) => prev - 1);
      }, 1000);

    }

    return () => {
      clearInterval(mobileInterval);
      clearInterval(emailInterval);
    };

  }, [mobileTimer, emailTimer]);

  /* ---------------- RETURN ---------------- */

  return {

    sendMobileOtp,
    verifyMobileOtp,

    sendEmailOtp,
    verifyEmailOtp,

    mobileVerified,
    emailVerified,

    mobileTimer,
    emailTimer,

    loading

  };

}