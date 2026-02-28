
"use client";
import { useState } from "react";
export default function useLoanCalculator(){

const [amount,setAmount]= useState(50000);
const [rate,setRate]  =   useState(14);
const [tenure,setTenure] = useState(12)

const totalInterest = Math.round((amount * rate * tenure) / 1200);
const totalPayment = amount + totalInterest;

return {
    amount,
    rate,
    tenure,
    setAmount,
    setRate,
    setTenure,
    totalInterest,
    totalPayment,
  };

}