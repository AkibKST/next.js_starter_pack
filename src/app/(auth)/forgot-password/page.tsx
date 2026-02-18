"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: call forgot-password API
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    return (
        <>
            {/* Back to login */}
            <Link href="/login" className="auth-back-link">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                Back to sign in
            </Link>

            {!isSubmitted ? (
                <>
                    {/* Header */}
                    <div className="auth-header">
                        <div className="auth-icon-circle">
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
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h1 className="auth-title">Forgot your password?</h1>
                        <p className="auth-subtitle">
                            No worries! Enter your email and we&apos;ll send you a reset link.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-field">
                            <label htmlFor="email" className="auth-label">
                                Email address
                            </label>
                            <div className="auth-input-wrapper">
                                <svg
                                    className="auth-input-icon"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="auth-input"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="auth-submit-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="auth-spinner" />
                            ) : (
                                "Send reset link"
                            )}
                        </button>
                    </form>
                </>
            ) : (
                /* Success state */
                <div className="auth-success-state">
                    <div className="auth-icon-circle auth-icon-success">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h1 className="auth-title">Check your email</h1>
                    <p className="auth-subtitle">
                        We&apos;ve sent a password reset link to{" "}
                        <strong>{email}</strong>
                    </p>
                    <p className="auth-help-text">
                        Didn&apos;t receive the email?{" "}
                        <button
                            type="button"
                            className="auth-link-inline"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Click to resend
                        </button>
                    </p>
                </div>
            )}
        </>
    );
}
