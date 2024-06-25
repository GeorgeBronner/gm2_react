function Map() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
                <h1>Display HTML from FastAPI</h1>
                <iframe
                    src="http://localhost:8000/map/usermap"
                    title="HTML Content"
                    width="100%"
                    height="800px"
                    style={{ border: 'none' }}
                />
            {/*</header>*/}
        </div>
    );
}

export default Map;

