import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = () => <TextInput placeholder="texto field nombre"/>;

const LoginForm = () => (
    <View>
        <Field name="nombre" component={fieldNombre} />
        <Text>Redux Form</Text>
    </View>
);