import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        fetch('/api/health')
            .then((response) => response.json())
            .then((data) => {
                console.log('Backend response:', data);
            })
            .catch((error) => {
                console.error('Backend error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Anime Tracker</h1>
            <p>Search for anime</p>
        </div>
    );
}

export default HomePage;