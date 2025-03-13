"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const OnPayment = async (subId: string) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Soumojit Banerjee",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubcription(resp?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    try {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.log("Try Again...", e);
      setLoading(false);
    }
  };

  const SaveSubcription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-yellow-300">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center font-bold text-3xl my-3 text-yellow-400">
          Upgrade With Monthly Plan
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl bg-gray-800 border border-yellow-400 p-6 shadow-md sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-yellow-400">Free</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-yellow-300 sm:text-4xl">
                  0$
                </strong>
                <span className="text-sm font-medium text-yellow-400">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              {[
                "10,000 Words/Month",
                "50+ Content Templates",
                "Unlimited Download & Copy",
                "1 Month of History",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gray-800 border border-yellow-400 p-6 shadow-md sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-yellow-400">Monthly</h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-yellow-300 sm:text-4xl">
                  9.99$
                </strong>
                <span className="text-sm font-medium text-yellow-400">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              {[
                "1,00,000 Words/Month",
                "50+ Template Access",
                "Unlimited Download & Copy",
                "1 Year of History",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              disabled={loading}
              onClick={() => CreateSubscription()}
              className="w-full rounded-full mt-5 p-6 border border-yellow-400 text-yellow-300 hover:bg-yellow-500 hover:text-black"
              variant="outline"
            >
              {loading && <Loader2Icon className="animate-spin mr-2" />}
              {userSubscription ? "Active Plan" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default billing;
