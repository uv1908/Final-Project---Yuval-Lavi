import React from 'react';

interface OutsideNavLinkProps {
    to: string;
    children: React.ReactNode;
    activeClassName?: string;
}

export default function OutsideNavLink({ to, children, ...props }: OutsideNavLinkProps) {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}