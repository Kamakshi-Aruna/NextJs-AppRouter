import Carousel from "@/components/Carousel";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Carousel />
            {children}
        </div>
    );
}
