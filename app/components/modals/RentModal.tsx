"use client";

import React, { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import { STEPS } from "../../utils/constants";
import Heading from "../Heading";
import { categories } from "@/app/utils/categories";
import CategoryInput from "../Inputs/CategoryInput";
import CountrySelect, { CountrySelectValue } from "../Inputs/CountrySelect";
import Map from "../Map";

type Props = {};

export default function RentModal({}: Props) {
  const rentModal = useRentModal();
  const [step, setSteps] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: "",
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const onBack = useCallback(() => {
    setSteps((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setSteps((value) => value + 1);
  }, []);

  const actionLabel = useMemo(() => {
    //create & next can be Constant
    if (step === STEPS.PRICE) {
      return "create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    //create & next can be Constant
    if (step === STEPS.CATEGORY) {
      return "";
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="which of this best describe your place"
        subTitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto                
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="where is your place located"
          subTitle="Help guests find you"
          center={false}
        />
        <div>
          <CountrySelect
            onChange={(value) => setCustomValue("location", value)}
            value={location}
          />
          <Map />
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      title={"Airbnb your home"}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
}
