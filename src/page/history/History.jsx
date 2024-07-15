import React, { useEffect } from "react";
import Hero from "../../assets/historyPage/HeroSectionHistory.jpg";
import { fetchEvents, selectAllEvents } from "../../reducs/feature/historySlices";
import { useDispatch, useSelector } from 'react-redux';
import EventsCardHome from './EventsCardHome'; // Make sure you import the EventsCardHome component

export default function History() {
  const events = useSelector(selectAllEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative">
        <img
          className="object-cover h-[585px] w-full top-0 -z-30"
          src={Hero}
          alt="Background image description"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="w-10/12 mx-auto">
          <div className="absolute top-[450px] text-white font-extrabold">
            <div className="inline-block">
              <h1 className="text-[56px]">ប្រវត្តិនៃកីឡា និង​កី​ឡាករ</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Events Section */}
      <section className="flex justify-center items-center flex-cols-3 gap-2 pt-4">
        <div className="grid grid-cols-3 gap-5">
          {events.map((event, index) => (
            <div className="row" key={index}>
              <EventsCardHome
                slug={event.slug}
                name={event.name}
                id={event.id}
                image={event.image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
