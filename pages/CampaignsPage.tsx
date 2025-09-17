
import React from 'react';
import { campaigns } from '../data';
import CampaignCard from '../components/CampaignCard';

const CampaignsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-left">
        <h1 className="text-4xl font-extrabold tracking-tight">Campaigns Showcase</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          A highly visual showcase of creative and effective marketing campaigns from around the globe.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-2">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CampaignsPage;
