"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> Oops! An Error Occurred</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>🔄 Retry</button>
        </div>
    );
}
