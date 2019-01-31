import React from 'react';
import {TextInput} from 'simple-component-library-xyz';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
)


export default Home;