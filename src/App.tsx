import React, { useState } from 'react';

interface Contact {
    name: string;
    tel: string;
}

const ContactsComponent: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [nameValue, setNameValue] = useState<string>('');
    const [phoneValue, setPhoneValue] = useState<string>('');
    const [isContactPickerSupported, setIsContactPickerSupported] = useState<boolean | null>(null);

    const handleContactPicker = async () => {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if ('contacts' in navigator && 'select' in navigator.contacts) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const selectedContacts = await navigator.contacts.select(['name', 'tel'], { multiple: true });

                if (!selectedContacts.length) {
                    return;
                }

                setContacts(prevContacts => [...prevContacts, ...selectedContacts]);
            } else {
                setIsContactPickerSupported(false);
            }
        } catch (error) {
            console.error('Error accessing contacts:', error);
        }
    };

    const handleAddContact = () => {
        if (nameValue === '' || phoneValue === '') {
            // Handle validation or show an error message
            return;
        }

        const newContact: Contact = { name: nameValue, tel: phoneValue };
        setContacts(prevContacts => [...prevContacts, newContact]);

        // Clear input values
        setNameValue('');
        setPhoneValue('');
    };

    return (
        <div>
            <button onClick={handleContactPicker}>Pick Contacts</button>

            {isContactPickerSupported === false && (
                <p>Your device/browser doesn't support the Contact Picker API.</p>
            )}

            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name} - {contact.tel}
                    </li>
                ))}
            </ul>

            <div>
                <label>
                    Name:
                    <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                </label>
                <label>
                    Phone:
                    <input type="text" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} />
                </label>
                <button onClick={handleAddContact}>Add Contact</button>
            </div>
        </div>
    );
};

export default ContactsComponent;
