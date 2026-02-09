
import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { PlannerAI } from '../components/PlannerAI';
import { ResourceBank } from '../components/ResourceBank';
import { InstitutionalEcosystem } from '../components/InstitutionalEcosystem';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <PlannerAI />
            <ResourceBank />
            <InstitutionalEcosystem />
            <CTA />
        </>
    );
};
