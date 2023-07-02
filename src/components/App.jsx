import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Section from './Section';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';

// class App extends Component {
//   static defaultProps = {};

//   static propTypes = {};

//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     name: '',
//     filter: '',
//     number: '',
//   };

//   onAddSubmit = e => {
//     e.preventDefault();
//     const { name, number, contacts } = this.state;
//     contacts.find(f => f.name === name)
//       ? alert(name + ' already in contacts')
//       : this.setState({
//           contacts: [...contacts, { id: nanoid(), name, number }],
//           name: '',
//           number: '',
//         });
//   };

//   onChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   onDelete = e => {
//     const omg = e.currentTarget.parentNode.children[0].innerHTML.split(':')[0];
//     const arr = this.state.contacts.filter(n => n.name !== omg);
//     this.setState({
//       contacts: [...arr],
//     });
//   };

//   componentDidMount() {
//     !localStorage.contacts
//       ? (localStorage.contacts = JSON.stringify(this.state.contacts))
//       : this.setState({ contacts: JSON.parse(localStorage.contacts) });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts)
//       localStorage.contacts = JSON.stringify(this.state.contacts);
//   }
//   render() {
//     return (
//       <>
//         <Section title={'Phonebook'}>
//           <Phonebook
//             onSubmit={this.onAddSubmit}
//             onChange={this.onChange}
//             name={this.state.name}
//             number={this.state.number}
//           />
//         </Section>
//         <Section title={'Contacts'}>
//           <Contacts
//             contacts={this.state.contacts}
//             filter={this.state.filter}
//             onChange={this.onChange}
//             onDelete={this.onDelete}
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');
  const [number, setNumber] = useState('');

  const onAddSubmit = e => {
    e.preventDefault();

    contacts.find(f => f.name === name)
      ? alert(name + ' already in contacts')
      : setContacts([...contacts, { id: nanoid(), name, number }]);

    setName('');
    setNumber('');
  };

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'filter':
        setFilter(value);
        break;
      default:
        return;
    }
  };

  const onDelete = e => {
    const omg = e.currentTarget.parentNode.children[0].innerHTML.split(':')[0];

    setContacts(contacts.filter(n => n.name !== omg));
  };

  // componentDidMount() {
  //   !localStorage.contacts
  //     ? (localStorage.contacts = JSON.stringify(contacts))
  //     : setState({ contacts: JSON.parse(localStorage.contacts) });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== contacts)
  //     localStorage.contacts = JSON.stringify(contacts);
  // }

  useEffect(() => {
    // if (localStorage.contacts) setContacts(JSON.parse(localStorage.contacts));
    !localStorage.contacts
      ? (localStorage.contacts = JSON.stringify(contacts))
      : setContacts(JSON.parse(localStorage.contacts));
  }, []);

  useEffect(() => {
    // if (localStorage.contacts != JSON.stringify(contacts))
    localStorage.contacts = JSON.stringify(contacts);
  }, [contacts]);

  return (
    <>
      <Section title={'Phonebook'}>
        <Phonebook
          onSubmit={onAddSubmit}
          onChange={onChange}
          name={name}
          number={number}
        />
      </Section>
      <Section title={'Contacts'}>
        <Contacts
          contacts={contacts}
          filter={filter}
          onChange={onChange}
          onDelete={onDelete}
        />
      </Section>
    </>
  );
}
