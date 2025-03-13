import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import { TEMPLATE } from "../_components/TemplateListSection";
import CopyButton from "./_components/CopyButton";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    // Handle the case where the user or their email address is not found.
    return (
      <p className="text-center text-gray-500 dark:text-neutral-400 py-5">
        User not found or email address missing.
      </p>
    );
  }

  // @ts-ignore
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress)) // Ensure this is a string
    .orderBy(desc(AIOutput.id))
    .execute(); // Ensure `.execute()` is used if needed

  // ✅ Ensure fields are non-nullable
  const sanitizedHistoryList: HISTORY[] = HistoryList.map((item) => ({
    id: item.id,
    formData: item.formData ?? "", // Convert null to empty string
    aiResponse: item.aiResponse ?? "",
    templateSlug: item.templateSlug ?? "",
    createdBy: item.createdBy ?? "",
    createdAt: item.createdAt ?? "",
  }));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug === slug
    );
    return template;
  };

  return (
    <div className="m-5 p-6 rounded-lg bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-yellow-500">
        History 📜
      </h2>
      <p className="text-gray-600 dark:text-neutral-400">
        Review your previously generated AI content
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-12 font-semibold bg-yellow-100 dark:bg-yellow-900/20 mt-5 py-3 px-4 rounded-lg shadow-md">
        <h2 className="col-span-3 text-left text-gray-700 dark:text-yellow-400">
          TEMPLATE
        </h2>
        <h2 className="col-span-4 text-left text-gray-700 dark:text-yellow-400">
          AI RESPONSE
        </h2>
        <h2 className="col-span-2 text-left text-gray-700 dark:text-yellow-400">
          DATE
        </h2>
        <h2 className="col-span-1 text-center text-gray-700 dark:text-yellow-400">
          WORDS
        </h2>
        <h2 className="col-span-2 text-center text-gray-700 dark:text-yellow-400">
          COPY
        </h2>
      </div>

      {/* Table Content */}
      {sanitizedHistoryList.length > 0 ? (
        sanitizedHistoryList.map((item: HISTORY, index: number) => (
          <div
            key={item.id}
            className="grid grid-cols-12 items-center my-4 p-4 rounded-lg bg-gray-50 dark:bg-neutral-800 shadow-md transition hover:shadow-lg"
          >
            <div className="col-span-3 flex items-center gap-3">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={30}
                height={30}
                alt="icon"
                className="rounded-md"
              />
              <span className="text-gray-800 dark:text-yellow-300 font-medium">
                {GetTemplateName(item.templateSlug)?.name}
              </span>
            </div>
            <p className="col-span-4 text-gray-600 dark:text-neutral-300 truncate">
              {item?.aiResponse}
            </p>
            <p className="col-span-2 text-gray-600 dark:text-neutral-300">
              {item.createdAt}
            </p>
            <p className="col-span-1 text-center text-gray-600 dark:text-neutral-300">
              {item?.aiResponse.length}
            </p>
            <div className="col-span-2 flex justify-center">
              <CopyButton aiResponse={item.aiResponse} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-neutral-400 py-5">
          No history found 😢
        </p>
      )}
    </div>
  );
}

export default History;
