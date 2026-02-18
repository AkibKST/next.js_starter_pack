import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="auth-wrapper">
            {/* Animated background blobs */}
            <div className="auth-bg-blob auth-bg-blob-1" />
            <div className="auth-bg-blob auth-bg-blob-2" />
            <div className="auth-bg-blob auth-bg-blob-3" />

            <div className="auth-container">
                {/* Logo / Brand */}
                <Link href="/" className="auth-brand">
                    <div className="auth-brand-icon">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                    </div>
                    <span className="auth-brand-text">FixItPro</span>
                </Link>

                {/* Auth card */}
                <div className="auth-card">{children}</div>

                {/* Footer */}
                <p className="auth-footer-text">
                    © 2026 FixItPro. All rights reserved.
                </p>
            </div>
        </div>
    );
}
