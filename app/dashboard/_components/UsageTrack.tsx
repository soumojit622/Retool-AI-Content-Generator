import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { eq } from "drizzle-orm";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [maxWords, setMaxWords] = useState(10000);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const [loading, setLoading] = useState(true); // Add loading state

  // Get data from DB on user change
  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (user) GetData();
  }, [updateCreditUsage, user]);

  // Get data from the database
  const GetData = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      // @ts-ignore
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

      GetTotalUsage(result);
    }
  };

  // Check if the user is subscribed
  const IsUserSubscribe = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(
          eq(UserSubscription.email, user.primaryEmailAddress.emailAddress)
        );

      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(1000000); // Increase the max words for subscribed users
      }
    }
  };

  // Calculate the total usage from history results
  const GetTotalUsage = (result: HISTORY[]) => {
    let total = result.reduce(
      (sum, element) => sum + (element.aiResponse?.length || 0), // Handle null by defaulting to 0
      0
    );
    setTotalUsage(total);
    setLoading(false); // Set loading to false after data is fetched
  };

  // Show loading spinner or content once data is loaded
  if (loading) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className="m-5" suppressHydrationWarning={true}>
      {/* Usage Information Section */}
      <div className="p-5 rounded-lg shadow-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-400">
        <h2 className="font-semibold text-gray-800">Your Credits</h2>

        {/* Progress Bar with Yellow Gradient */}
        <div className="h-3 bg-black w-full rounded-full mt-4">
          <div
            className="h-3 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: `${Math.min((totalUsage / maxWords) * 100, 100)}%`, // Ensure this is between 0% and 100%
            }}
          ></div>
        </div>

        {/* Usage Stats */}
        <h2 className="text-sm my-3 text-gray-700">
          {totalUsage.toLocaleString()}/{maxWords.toLocaleString()} credits used
        </h2>
      </div>

      {/* Upgrade Button */}
      <Button
        variant={"secondary"}
        className="w-full my-4 text-black bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
      >
        Upgrade 🚀
      </Button>
    </div>
  );
}

export default UsageTrack;
