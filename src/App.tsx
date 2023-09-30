import React, { useEffect } from 'react';

interface Contact {
    name: string;
    tel: string;
    address?: string;
    // Add other properties you expect in a contact
}

interface NavigatorWithContacts extends Navigator {
    contacts?: {
        getProperties: () => Promise<string[]>;
        select: (properties: string[], options: { multiple: boolean }) => Promise<Contact[]>;
    };
}

const ContactsComponent: React.FC = () => {
    useEffect(() => {
        const requestContacts = async () => {
            try {
                if ('contacts' in navigator) {
                    const navigatorWithContacts = navigator as NavigatorWithContacts;

                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const availableProperties = await navigatorWithContacts.contacts.getProperties();

                    if (availableProperties.includes('address')) {
                        const contactProperties = ['name', 'tel', 'address'];

                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        const contacts = await navigatorWithContacts.contacts.select(
                            contactProperties,
                            { multiple: true }
                        );

                        console.log("Your first contact:", contacts[0]?.name, contacts[0]?.tel, contacts[0]?.address);
                    } else {
                        console.log("Contact Picker API on your device doesn't support address property");
                    }
                } else {
                    console.log("Your browser doesn't support Contact Picker API");
                }
            } catch (error) {
                console.log("Unexpected error happened in Contact Picker API:", error);
            }
        };

        requestContacts();
    }, []);

    return (
        <div>
          <h1>Contacts</h1>

        </div>
    );
};

export default ContactsComponent;
