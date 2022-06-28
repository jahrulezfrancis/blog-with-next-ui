import * as React from "react";
import CardIndex from "./Components/Content/CardIndex";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/Header/navigation";

export default function MyApp() {
    return (
        <div className="App">
            <NavigationBar />
            <CardIndex />
            <Footer />
        </div>
    );
}