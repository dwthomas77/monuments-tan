import { useRef, useEffect, useState } from "react";
import USStates from "../../data/statesHash.json";
import {
  form,
  formFieldset,
  formLegend,
  formLabel,
  formField,
  buttonFormField,
  fieldErrorMsg,
} from "./MonumentForm.css";
import { Input, Select, TextArea, Button } from "../atomic";
import type { Monument } from '../../types';

interface formState {
  city: string;
  state: string;
  description?: string;
  latitude: string;
  longitude: string;
}

interface errors {
  city?: string;
  state?: string;
  description?: string;
  latitude?: string;
  longitude?: string;
}

const defaultState: formState = {
  city: "",
  state: "",
  description: "",
  latitude: "",
  longitude: "",
};

interface MonumentFormProps {
  createMonument: (monument: Omit<Monument, 'id'>) => void;
}

const MonumentForm: React.FC<MonumentFormProps> = ({ createMonument }) => {
  const [formData, setFormData] = useState<formState>(defaultState);
  const [formErrors, setFormErrors] = useState<errors>({});
  const lastInputRef = useRef<HTMLInputElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const stateOptions = Object.entries(USStates).map(([value, label]) => ({
    value,
    label,
  }));
  const latRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
  const longRegex = /^-?((1[0-7]|\d)?\d(\.\d+)?|180(\.0+)?)$/;

  const isValidCoordinate = (
    value: string,
    type: "latitude" | "longitude"
  ): boolean => {
    if (type === "latitude") {
      return latRegex.test(value);
    } else if (type === "longitude") {
      return longRegex.test(value);
    }
    return false; // Should not be reached with proper type usage
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstInputRef.current) {
          lastInputRef && lastInputRef.current && lastInputRef.current.focus();
          event.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastInputRef.current) {
          firstInputRef &&
            firstInputRef.current &&
            firstInputRef.current.focus();
          event.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const getValidationErrors = (data: formState): errors => {
    const errors: errors = {};
    if (!data.city) {
      errors.city = "City is required.";
    }
    if (!data.state) {
      errors.state = "State is required.";
    }
    if (!data.latitude || isNaN(Number(data.latitude)) || !isValidCoordinate(data.latitude, "latitude")) {
      errors.latitude = "Valid latitude is required.";
    }
    if (!data.longitude || isNaN(Number(data.longitude)) || !isValidCoordinate(data.longitude, "longitude")) {
      errors.longitude = "Valid longitude is required.";
    }
    return errors;
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submit!!");
    // Handle form submission logic here
    console.log("form data is:", formData);
    const errors = getValidationErrors(formData);
    console.log("errors are:", errors);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const { city, state, description, longitude, latitude } = formData;
      // No errors, proceed with form submission
      const modifiedFormData = {
        city,
        state,
        description: description || null,
        longitude: Number(longitude),
        latitude: Number(latitude),
        map_zoom: 15,
        map_type: 'satellite',
        img_url: null,
      }
      console.log("Form submitted successfully:", modifiedFormData);
      createMonument(modifiedFormData);
      // Reset form
      setFormData(defaultState);
    } else {
      console.log("Form has errors:", errors);
    }
  };

  const handleChange =
    (field: string) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  return (
    <form className={form} onSubmit={onSubmit}>
      <fieldset className={formFieldset}>
        <legend className={formLegend}>Add new monument</legend>
        <div className={formField}>
          <label className={formLabel} htmlFor="city">
            City:
          </label>
          <div>
            <Input
              type="text"
              name="city"
              id="city"
              ref={firstInputRef}
              onKeyDown={handleKeyDown}
              error={!!formErrors.city}
              onChange={handleChange("city")}
              value={formData.city}
            />
            <div className={fieldErrorMsg}>{formErrors.city}</div>
          </div>
        </div>
        <div className={formField}>
          <label className={formLabel} htmlFor="state">
            State:
          </label>
          <div>
            <Select
              name="state"
              id="state"
              optionData={stateOptions}
              error={!!formErrors.state}
              onChange={handleChange("state")}
              value={formData.state}
            />
            <div className={fieldErrorMsg}>{formErrors.state}</div>
          </div>
        </div>
        <div className={formField}>
          <label className={formLabel} htmlFor="description">
            Description:
          </label>
          <TextArea
            name="description"
            id="description"
            error={!!formErrors.description}
            onChange={handleChange("description")}
            value={formData.description}
          />
        </div>
        <div className={formField}>
          <label className={formLabel} htmlFor="latitude">
            Latitude:
          </label>
          <div>
            <Input
              type="text"
              name="latitude"
              id="latitude"
              error={!!formErrors.latitude}
              onChange={handleChange("latitude")}
              value={formData.latitude}
            />
            <div className={fieldErrorMsg}>{formErrors.latitude}</div>
          </div>
        </div>
        <div className={formField}>
          <label className={formLabel} htmlFor="longitude">
            Longitude:
          </label>
          <div>
            <Input
              type="text"
              name="longitude"
              id="longitude"
              ref={lastInputRef}
              onKeyDown={handleKeyDown}
              error={!!formErrors.longitude}
              onChange={handleChange("longitude")}
              value={formData.longitude}
            />
            <div className={fieldErrorMsg}>{formErrors.longitude}</div>
          </div>
        </div>
        <div className={buttonFormField}>
          <Button type="submit" label="Add New Monument" />{" "}
        </div>
      </fieldset>
    </form>
  );
};

export default MonumentForm;
