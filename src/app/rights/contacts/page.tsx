'use client';
import { useState, useEffect } from 'react';

interface Contact {
  name: string;
  phone: string;
  type: string;
}

export default function EmergencyContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emergencyContacts');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    type: 'attorney'
  });

  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContact.name && newContact.phone) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', phone: '', type: 'attorney' });
    }
  };

  const handleDelete = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Emergency Contacts</h1>

      <div className="max-w-2xl mx-auto">
        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-700">
            Keep these numbers with you at all times. Consider memorizing the most important ones.
          </p>
        </div>

        {/* Add Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Name
              </label>
              <input
                type="text"
                value={newContact.name}
                onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={newContact.phone}
                onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Type
              </label>
              <select
                value={newContact.type}
                onChange={(e) => setNewContact({...newContact, type: e.target.value})}
                className="w-full p-2 border rounded-md"
              >
                <option value="attorney">Immigration Attorney</option>
                <option value="family">Family Member</option>
                <option value="organization">Immigration Organization</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Contact
            </button>
          </div>
        </form>

        {/* Contacts List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Saved Contacts</h2>
          {contacts.length === 0 ? (
            <p className="text-gray-500">No contacts saved yet.</p>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                    <p className="text-xs text-gray-500 capitalize">{contact.type}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 