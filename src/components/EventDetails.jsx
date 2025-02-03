/* eslint-disable react/prop-types */
import React from "react";

const EventDetails = ({ event, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 text-white bg-gradient-to-br from-blue-900 via-black to-blue-800">
      <div className="container max-w-4xl p-6 mx-auto rounded-lg shadow-lg bg-blue-950">
        <button
          onClick={onBack}
          className="px-6 py-3 mb-6 text-sm font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
        >
          ← Back to Events
        </button>
        <h1 className="mb-6 text-5xl font-extrabold text-center">
          {event.title}
        </h1>
        <div className="relative">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="mt-8">
          <p className="text-lg leading-relaxed text-gray-300">
            {event.details}
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-lg font-semibold">
              📍 Location:{" "}
              <span className="text-blue-300">{event.location}</span>
            </p>
            <p className="text-lg font-semibold">
              🕒 Time: <span className="text-blue-300">{event.time}</span>
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
            >
              Register for Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
