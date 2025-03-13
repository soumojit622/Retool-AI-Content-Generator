"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Wand2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => void;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-6 shadow-lg border border-gray-800 rounded-xl bg-black/90 backdrop-blur-md dark:border-gray-700 transition-all duration-300">
      {/* Template Icon */}
      {selectedTemplate?.icon && (
        <div className="flex justify-center">
          <Image
            src={selectedTemplate.icon}
            alt="icon"
            width={70}
            height={70}
            className="mb-4 rounded-lg"
          />
        </div>
      )}

      {/* Template Name & Description */}
      <h2 className="font-extrabold text-3xl text-center mb-2 text-yellow-400">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-400 text-center text-sm">
        {selectedTemplate?.desc}
      </p>

      {/* Form Section */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-4 flex flex-col gap-2">
            <label className="font-semibold text-gray-300">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-200"
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                  className="border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-200"
                />
                <label className="text-xs text-gray-500">Max 2000 Words</label>
              </>
            ) : null}
          </div>
        ))}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold rounded-lg flex justify-center items-center gap-2 disabled:bg-gray-500 transition-all duration-300"
          disabled={loading}
        >
          {loading ? (
            <Loader2Icon className="animate-spin w-5 h-5" />
          ) : (
            <Wand2Icon className="w-5 h-5" />
          )}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
