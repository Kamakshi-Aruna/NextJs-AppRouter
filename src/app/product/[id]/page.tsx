export default function ProductDetails({ params }: { params: { id: string } }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Product ID: {params.id}</h1>
            <p>More details about the product coming soon...</p>
        </div>
    );
}
