import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import styled from "styled-components";
import { policyText } from "../../constants/PrivatePolicyText";

const PolicyDetail = (props) => {
  return (
    <View>
      <Text>{policyText}</Text>
    </View>
  );
};

export default PolicyDetail;
