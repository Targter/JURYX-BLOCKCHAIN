'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useUserDetails } from '@/hooks/useStore'
export default function OrganizerPage() {
  const [eventName, setEventName] = useState('')
  const [roundName, setRoundName] = useState('')
  const [selectedEvent, setSelectedEvent] = useState('')
  const [events, setEvents] = useState<any[]>([])
  const [getEvents, setgetEvents] = useState<any[]>([])
  const {user} = useUserDetails(); 
  // panelist and the user code to login 
  const [codeData, setCodeData] = useState<{ panelistCode: string; participantCode: string } | null>(null)

  const createEvent = async () => {
    if(!user){
      return 
    }
    console.log(user.id)
    console.log("called Events",eventName)
    const res = await axios.post('/api/organizers/events', { name: eventName, organizerId : user.id })
    setEvents([...events, res.data])
    setEventName('')
  }

  const createRound = async () => {
    console.log(selectedEvent)
    await axios.post('/api/organizers/rounds', {
      eventId: selectedEvent,
      name: roundName,
    })
    setRoundName('')
  }

  const generateCodes = async () => {
    const response = await axios.post('/api/organizers/codes', { eventId: selectedEvent })
    console.log("codeData:",response.data)
    setCodeData(response.data) // Set both codes
    alert('Codes generated successfully!')
  }

  useEffect(() => {
    const fetchCodes = async () => {
      if (!selectedEvent) return
  
      const res = await axios.post('/api/organizers/codes/getcode', { eventId: selectedEvent }) // You'll create this next
      console.log("getCode",res.data)
      setCodeData(res.data)
    }
  
    fetchCodes()
  }, [selectedEvent])
  
  const fetchEvents = async () => {
    console.log(user?.id)
    if(!user){
      return
    }
    try {
      const response = await axios.post('/api/organizers/events/getallEvents',{organizerId:user.id})
      setgetEvents(response.data)
      console.log('getEvents:',response.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  useEffect(() => {
    fetchEvents() // Fetch events when the component mounts
  }, [])
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Organizer Dashboard</h1>

      <div className="space-y-2">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event name"
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={createEvent}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Event
        </button>
      </div>

      <div className="space-y-2">
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        >
          <option value="">Select Event</option>
          {getEvents.map((event) => (
            <option key={event.id} value={event.id} className='text-black'>
              {event.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={roundName}
          onChange={(e) => setRoundName(e.target.value)}
          placeholder="Round name"
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={createRound}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Round
        </button>

        <button
          onClick={generateCodes}
          className="bg-purple-600 text-white px-4 py-2 rounded w-full"
        >
          Generate Join Codes
        </button>
      </div>
{/* updated */}
      {codeData && (
  <div className="mt-4 p-4 border rounded bg-gray-50 space-y-2">
    <div>
      <p className="text-sm font-medium">🔑 Panelist Code:</p>
      <p className="text-lg font-bold text-blue-700">{codeData.panelistCode}</p>
    </div>
    <div>
      <p className="text-sm font-medium">🧑‍🎓 Participant Code:</p>
      <p className="text-lg font-bold text-green-700">{codeData.participantCode}</p>
    </div>
  </div>
)}

    </div>
  )
}
