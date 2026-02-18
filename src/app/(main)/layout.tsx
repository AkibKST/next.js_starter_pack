export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="main-layout">
            {/* Navbar */}
            {/* Footer */}
            {children}
        </div>
    );
}
