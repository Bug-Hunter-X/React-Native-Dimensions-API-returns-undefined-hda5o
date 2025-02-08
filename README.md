# React Native Dimensions API returns undefined

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` when accessing screen dimensions.  The problem typically arises when attempting to access dimensions before the component mounts or the API is fully initialized.  This repository provides a solution to reliably retrieve screen dimensions.

## Problem

The `Dimensions` API might return `undefined` if you access it prematurely, potentially leading to errors or unexpected behavior in your app.

## Solution

The provided solution leverages the `useEffect` and `useState` hooks. `useEffect` ensures the dimensions are fetched after the component mounts, while `useState` stores the dimensions, which are then used by the component once they are ready.

## Setup

1. Clone this repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd react-native-dimensions-bug`
3. Install dependencies: `npm install` or `yarn install`
4. Run the app: `npx react-native run-android` or `npx react-native run-ios`