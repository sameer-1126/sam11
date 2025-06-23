import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { Button, Flex, Heading, Image, Text, TextField, View, withAuthenticator } from "@aws-amplify/ui-react";

import { listNotes } from "./graphql/queries";
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from "./graphql/mutations";

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(awsExports);
const client = generateClient();

const App = ({ signOut }) => {
  return (
    <View className="App">
      <Heading level={1}>Welcome to Bucket List Tracker</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  );
};

// ✅ Fix: Export default correctly
export default withAuthenticator(App);
