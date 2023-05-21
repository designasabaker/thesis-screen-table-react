/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZFEFe4DtJXrdqsFUO3srObTcQ8yjmEvg",
    authDomain: "sang-ji.firebaseapp.com",
    projectId: "sang-ji",
    storageBucket: "sang-ji.appspot.com",
    messagingSenderId: "128984022584",
    appId: "1:128984022584:web:f57404b6c82b028bddb0cd",
    measurementId: "G-MR5ZWYJE3E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
// const analytics = getAnalytics(app);

// 从 "ingredients" 集合获取所有文档数据
export const getIngredients = async () => {
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    const ingredientsJSONList = data[0].content;
    // console.log(ingredientsJSONList)
    return ingredientsJSONList;
};

export default getIngredients;