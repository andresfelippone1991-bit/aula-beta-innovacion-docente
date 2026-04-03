
import React from 'react';
import { Hero } from '../components/Hero';
import { SEOContent } from '../components/SEOContent';
import { Features } from '../components/Features';
import { Methodology } from '../components/Methodology';
import { PlannerAI } from '../components/PlannerAI';
import { ResourceBank } from '../components/ResourceBank';
import { InstitutionalEcosystem } from '../components/InstitutionalEcosystem';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <SEOContent />
            <Features />
            <Methodology />
            <PlannerAI />
            <ResourceBank />
            <InstitutionalEcosystem />
            <CTA />
        </>
    );
};
