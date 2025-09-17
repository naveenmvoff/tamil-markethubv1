
import React from 'react';
import { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
      <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
        <span className="text-sm font-semibold bg-brand-secondary px-2 py-1 rounded">{campaign.industry}</span>
        <h3 className="text-2xl md:text-3xl font-extrabold mt-2">{campaign.brand}</h3>
        <p className="mt-1 text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{campaign.title}</p>
      </div>
    </div>
  );
};

export default CampaignCard;
