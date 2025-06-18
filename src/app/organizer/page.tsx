'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserDetails } from '@/hooks/useStore';
import { ClipboardList, PlusCircle, Layers, ShieldCheck } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  organizerId: string;
}

export default function OrganizerPage() {
  const [eventName, setEventName] = useState('');
  const [roundName, setRoundName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [getEvents, setGetEvents] = useState<Event[]>([]);
  const { user } = useUserDetails();

  const [codeData, setCodeData] = useState<{
    panelistCode: string;
    participantCode: string;
  } | null>(null);

  const createEvent = async () => {
    if (!user || !eventName.trim()) return;
    const res = await axios.post('/api/organizers/events', {
      name: eventName,
      organizerId: user.id,
    });
    setEvents([...events, res.data]);
    setEventName('');
  };

  const createRound = async () => {
    if (!selectedEvent || !roundName.trim()) return;
    await axios.post('/api/organizers/rounds', {
      eventId: selectedEvent,
      name: roundName,
    });
    setRoundName('');
  };

  const generateCodes = async () => {
    if (!selectedEvent) return;
    const response = await axios.post('/api/organizers/codes', {
      eventId: selectedEvent,
    });
    setCodeData(response.data);
    alert('Codes generated successfully!');
  };

  useEffect(() => {
    const fetchCodes = async () => {
      if (!selectedEvent) return;
      const res = await axios.post('/api/organizers/codes/getcode', {
        eventId: selectedEvent,
      });
      setCodeData(res.data);
    };
    fetchCodes();
  }, [selectedEvent]);

  const fetchEvents = async () => {
    if (!user) return;
    try {
      const response = await axios.post('/api/organizers/events/getallEvents', {
        organizerId: user.id,
      });
      setGetEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-blue-800 flex items-center justify-center gap-3">
          <ClipboardList className="w-10 h-10" />
          Organizer Dashboard
        </h1>

        {/* Create Event */}
        <section className="p-8 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 space-y-6 w-full">
          <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
            <PlusCircle className="text-blue-500" /> Create New Event
          </h2>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
          />
          <button
            onClick={createEvent}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto"
          >
            ➕ Create Event
          </button>
        </section>

        {/* Create Round + Generate Codes */}
        <section className="p-8 bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 space-y-6 w-full">
          <h2 className="text-2xl font-semibold text-green-700 flex items-center gap-2">
            <Layers className="text-green-500" /> Manage Rounds & Access
          </h2>

          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
          >
            <option value="">Select Event</option>
            {getEvents.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={roundName}
            onChange={(e) => setRoundName(e.target.value)}
            placeholder="Enter round name"
            className="border w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={createRound}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all w-full sm:w-auto"
            >
              ➕ Add Round
            </button>

            <button
              onClick={generateCodes}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all w-full sm:w-auto"
            >
              🔐 Generate Join Codes
            </button>
          </div>
        </section>

        {/* Display Codes */}
        {codeData && (
          <section className="p-8 bg-white border border-purple-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
            <h2 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
              <ShieldCheck className="text-purple-500" /> Access Codes
            </h2>
            <div>
              <p className="text-sm text-gray-600">Panelist Code:</p>
              <p className="text-2xl font-bold text-blue-800">{codeData.panelistCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Participant Code:</p>
              <p className="text-2xl font-bold text-green-700">{codeData.participantCode}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
