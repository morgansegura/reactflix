import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
    apiKey: "AIzaSyDeE2kkYND7ckdsp38v_WJxsZXJn2FTPbw",
    authDomain: "fir-reactflix.firebaseapp.com",
    projectId: "fir-reactflix",
    storageBucket: "fir-reactflix.appspot.com",
    messagingSenderId: "392016145010",
    appId: "1:392016145010:web:ab089d7cd597eb70d6b0eb",
};

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById("root")
);
