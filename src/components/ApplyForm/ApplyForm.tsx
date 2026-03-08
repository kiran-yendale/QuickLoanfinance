"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import useOtp from "@/hooks/useOtp";
import useApplication from "@/hooks/useApplication";

export default function ApplyForm() {

const router = useRouter();

const {
sendMobileOtp,
verifyMobileOtp,
sendEmailOtp,
verifyEmailOtp,
mobileVerified,
emailVerified,
mobileTimer,
emailTimer,
loading
} = useOtp();

const { submitApplication } = useApplication();

const [successModal,setSuccessModal]=useState(false);

const [mobileOtp,setMobileOtp]=useState(["","","","","",""]);
const [emailOtp,setEmailOtp]=useState(["","","","","",""]);

const mobileRefs = useRef<(HTMLInputElement|null)[]>([]);
const emailRefs = useRef<(HTMLInputElement|null)[]>([]);

const [showMobileOtp,setShowMobileOtp]=useState(false);
const [showEmailOtp,setShowEmailOtp]=useState(false);

const [formData,setFormData]=useState({
fullName:"",
mobile:"",
email:"",
city:"",
category:"",
occupation:"",
incomeRange:"",
loanAmount:"",
scheme:"",
message:""
});

const requestId =
typeof window !== "undefined"
? localStorage.getItem("requestId")
: null;

/* INPUT CHANGE */

const handleChange = (
e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

/* OTP INPUT HANDLER */

const handleOtpChange = (
value:string,
index:number,
otp:string[],
setOtp:React.Dispatch<React.SetStateAction<string[]>>,
refs:React.MutableRefObject<(HTMLInputElement|null)[]>
)=>{

if(!/^[0-9]?$/.test(value)) return;

const newOtp=[...otp];
newOtp[index]=value;
setOtp(newOtp);

if(value && index<5){
refs.current[index+1]?.focus();
}

};

/* OTP BACKSPACE */

const handleOtpKeyDown=(
e:React.KeyboardEvent<HTMLInputElement>,
index:number,
refs:React.MutableRefObject<(HTMLInputElement|null)[]>
)=>{
if(e.key==="Backspace"){
if(index>0 && !(e.target as HTMLInputElement).value){
refs.current[index-1]?.focus();
}
}
};

/* OTP PASTE */

const handleOtpPaste=(
e:React.ClipboardEvent<HTMLInputElement>,
setOtp:React.Dispatch<React.SetStateAction<string[]>>
)=>{

const paste=e.clipboardData.getData("text");

if(!/^\d{6}$/.test(paste)) return;

const otpArray=paste.split("");
setOtp(otpArray);

};

/* SUBMIT */

const handleSubmit=async(e:React.FormEvent)=>{

e.preventDefault();

if(!mobileVerified || !emailVerified){
toast.error("Verify mobile and email first");
return;
}

await submitApplication({

requestId:requestId!,
fullName:formData.fullName,
mobile:formData.mobile,
email:formData.email,
city:formData.city,
category:formData.category,
occupation:formData.occupation,
incomeRange:formData.incomeRange,
loanAmount:Number(formData.loanAmount),
scheme:formData.scheme,
message:formData.message

});

setSuccessModal(true);

setTimeout(()=>{
router.push("/");
},3000);

};

return(

<div className="min-h-screen bg-gray-100 py-10 px-4">

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">

<div className="text-center mb-12">

<h1 className="text-3xl font-bold text-blue-900">
Loan Application Form
</h1>

<p className="text-gray-600 mt-2">
Fill in your details to apply for a loan
</p>

</div>

<form onSubmit={handleSubmit} className="space-y-12">

{/* PERSONAL */}

<section>

<h2 className="text-xl font-semibold text-blue-900 mb-6 border-b pb-2">
Personal Details
</h2>

<div className="grid md:grid-cols-2 gap-6">

<input
type="text"
name="fullName"
placeholder="Full Name"
value={formData.fullName}
onChange={handleChange}
className="border rounded-lg px-4 py-3 w-full"
/>

<input
type="text"
name="city"
placeholder="City / Branch"
value={formData.city}
onChange={handleChange}
className="border rounded-lg px-4 py-3 w-full"
/>

{/* MOBILE */}

<div>

<div className="flex gap-2">

<input
type="tel"
name="mobile"
placeholder="Mobile Number"
value={formData.mobile}
onChange={handleChange}
className="border rounded-lg px-4 py-3 w-full"
/>

<button
type="button"
disabled={mobileTimer>0 || loading}
onClick={()=>{

if(formData.mobile.length!==10){
toast.error("Enter valid mobile number");
return;
}

sendMobileOtp(formData.mobile);
setShowMobileOtp(true);

}}
className="bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-800"
>

{mobileTimer>0 ? `Resend (${mobileTimer})`:"Send OTP"}

</button>

</div>

{/* MOBILE OTP */}

{showMobileOtp && !mobileVerified &&(

<div className="flex gap-2 mt-3">

{mobileOtp.map((digit,index)=>(

<input
key={index}
ref={(el)=>mobileRefs.current[index]=el}
value={digit}
maxLength={1}
onChange={(e)=>handleOtpChange(
e.target.value,
index,
mobileOtp,
setMobileOtp,
mobileRefs
)}
onKeyDown={(e)=>handleOtpKeyDown(e,index,mobileRefs)}
onPaste={(e)=>handleOtpPaste(e,setMobileOtp)}
className="w-10 h-12 border rounded text-center text-lg"
/>

))}

<button
type="button"
onClick={()=>verifyMobileOtp(mobileOtp.join(""))}
className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700"
>
Verify
</button>

</div>

)}

{mobileVerified &&(
<p className="text-green-600 text-sm mt-2">
✔ Mobile Verified
</p>
)}

</div>

{/* EMAIL */}

<div>

<div className="flex gap-2">

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
className="border rounded-lg px-4 py-3 w-full"
/>

<button
type="button"
disabled={!mobileVerified || emailTimer>0}
onClick={()=>{

if(!formData.email.includes("@")){
toast.error("Enter valid email");
return;
}

sendEmailOtp(formData.email);
setShowEmailOtp(true);

}}
className="bg-blue-900 text-white px-4 rounded-lg hover:bg-blue-800"
>

{emailTimer>0 ? `Resend (${emailTimer})`:"Send OTP"}

</button>

</div>

{/* EMAIL OTP */}

{showEmailOtp && !emailVerified &&(

<div className="flex gap-2 mt-3">

{emailOtp.map((digit,index)=>(

<input
key={index}
ref={(el)=>emailRefs.current[index]=el}
value={digit}
maxLength={1}
onChange={(e)=>handleOtpChange(
e.target.value,
index,
emailOtp,
setEmailOtp,
emailRefs
)}
onKeyDown={(e)=>handleOtpKeyDown(e,index,emailRefs)}
onPaste={(e)=>handleOtpPaste(e,setEmailOtp)}
className="w-10 h-12 border rounded text-center text-lg"
/>

))}

<button
type="button"
onClick={()=>verifyEmailOtp(emailOtp.join(""))}
className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700"
>
Verify
</button>

</div>

)}

{emailVerified &&(
<p className="text-green-600 text-sm mt-2">
✔ Email Verified
</p>
)}

</div>

</div>

</section>

{/* PROFILE */}

<section>

<h2 className="text-xl font-semibold text-blue-900 mb-6 border-b pb-2">
Profile Details
</h2>

<div className="grid md:grid-cols-2 gap-6">

<select
name="category"
value={formData.category}
onChange={handleChange}
className="border rounded-lg px-4 py-3"
>

<option value="">Select Category</option>
<option>Open</option>
<option>OBC</option>
<option>SC</option>
<option>ST</option>

</select>

<select
name="occupation"
value={formData.occupation}
onChange={handleChange}
className="border rounded-lg px-4 py-3"
>

<option value="">Select Occupation</option>
<option>Salaried</option>
<option>Business</option>
<option>Student</option>
<option>Farmer</option>

</select>

<select
name="incomeRange"
value={formData.incomeRange}
onChange={handleChange}
className="border rounded-lg px-4 py-3"
>

<option value="">Income Range</option>
<option>20000-40000</option>
<option>40000-60000</option>
<option>60000-80000</option>
<option>Above 80000</option>

</select>

</div>

</section>

{/* LOAN */}

<section>

<h2 className="text-xl font-semibold text-blue-900 mb-6 border-b pb-2">
Loan Details
</h2>

<div className="grid md:grid-cols-2 gap-6">

<input
type="number"
name="loanAmount"
placeholder="Loan Amount"
value={formData.loanAmount}
onChange={handleChange}
className="border rounded-lg px-4 py-3"
/>

<select
name="scheme"
value={formData.scheme}
onChange={handleChange}
className="border rounded-lg px-4 py-3"
>

<option value="">Select Scheme</option>
<option>Scheme 1</option>
<option>Scheme 2</option>
<option>Scheme 3</option>

</select>

</div>

<textarea
name="message"
placeholder="Message / Remarks"
rows={4}
value={formData.message}
onChange={handleChange}
className="border rounded-lg px-4 py-3 mt-4 w-full"
/>

</section>

<div className="text-center">

<button
type="submit"
disabled={!mobileVerified || !emailVerified}
className="bg-blue-900 text-white px-12 py-3 rounded-lg hover:bg-blue-800"
>
Submit Application
</button>

</div>

</form>


</div>

</div>


);

}