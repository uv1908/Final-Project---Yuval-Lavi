import React from 'react';

interface OutsideNavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

export default function OutsideNavLink({ to, children, className }: OutsideNavLinkProps) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    );
}