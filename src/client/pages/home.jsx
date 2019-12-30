import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Home(props) {
    const [apiMessage, setApiMessage] = useState();

    useEffect(() => {
        axios.get('/api/hello').then((response) => {
            setApiMessage(response.data);
        });
    }, []);

    return (
        <main className="react-app-main">
            <section className="section">
                <div className="container">
                    Hello World!
                    <br />
                    {apiMessage}
                </div>
            </section>
        </main>
    );
}
