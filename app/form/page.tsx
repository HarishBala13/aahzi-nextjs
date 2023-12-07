/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { z } from 'zod';

const ChatBotForm = () => {
  const [mathsScore, setMathsScore] = useState<string>("");
  const [physicsScore, setPhysicsScore] = useState<string>("");
  const [chemistryScore, setChemistryScore] = useState<string>("");
  const [cutoffMarks, setCutoffMarks] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [errorColors, setErrorColors] = useState<{ [key: string]: string }>({});

  const handleMathsChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMathsScore(event.target.value);
      calculatecutoff();
    };
    
    const handlePhysicsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhysicsScore(event.target.value);
        calculatecutoff();
    };
    
    const handleChemistryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChemistryScore(event.target.value);
        calculatecutoff();
    };
    
    const calculatecutoff = () => {
        setErrors({});
        setErrorColors({});
        
        const parseInput = (input: string, subject: string): number => {
            const value = parseFloat(input) || 0;
            if (value < 0 || value > 100 || isNaN(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [subject]: "Invalid marks! Please enter a value between 0 and 100.",
                }));
                setErrorColors((prevColors) => ({
                    ...prevColors,
                    [subject]: "red",
                }));
                return 0;
            }
            return value;
        };
        const maths = parseInput(mathsScore, "maths");
        const physics_currentscore = parseInput(physicsScore, "physics");
        const chemistry_currentscore = parseInput(chemistryScore, "chemistry");
        const physics = physics_currentscore / 2;
          const chemistry = chemistry_currentscore / 2;
          const cutoff = maths + physics + chemistry;
        setCutoffMarks(parseFloat(cutoff.toFixed(2)));
    };
    useEffect(() => {},[]);

  return (
    <div className="mt-6 grid place-items-center gap-4">
      <p className="text-5xl">Form</p>
      <form className="flex justify-center">
        <div className="space-y-12">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              title="mobilenumber"
              maxLength={10}
              placeholder="Enter your Mobile Number"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="physics"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Physics
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="physics"
                  id="physics"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={physicsScore}
                  onChange={handlePhysicsChange}
                  style={{ borderColor: errorColors.physics || "" }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.physics && (
                  <p
                    className={"text-sm"}
                    style={{ color: errorColors.physics || "" }}
                  >
                    {errors.physics}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="chemistry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Chemistry
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="chemistry"
                  id="chemistry"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={chemistryScore}
                  onChange={handleChemistryChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="maths"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Maths
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="maths"
                  id="maths"
                  placeholder="Enter marks"
                  maxLength={3}
                  value={mathsScore}
                  onChange={handleMathsChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <h3>Cutoff Marks:</h3>
              <p className="text-sm font-medium leading-6 text-gray-900">
                {cutoffMarks}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Interested college
            </label>
            <input
              type="text"
              title="interestedcollege"
              placeholder="Enter your Interested College"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        <div className="btn btn-info text-white"><button title="submit" type="submit">Submit</button></div>
        </div>
      </form>
    </div>
  );
};

export default ChatBotForm;
