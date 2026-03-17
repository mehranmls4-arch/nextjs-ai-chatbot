'use client';

interface BranchesSectionProps {
  selectedBranch: string | null;
  setSelectedBranch: (branch: string) => void;
}

const branches = [
  {
    id: 'sukkur-100',
    city: 'Sukkur',
    name: 'Sukkur - 100 Feet Road',
    address: '100ft Road Near IBA University Sukkur',
    hours: '12:00 PM - 03:00 AM',
    phone: '0309-1118142'
  },
  {
    id: 'sukkur-minara',
    city: 'Sukkur',
    name: 'Sukkur - Minara Road',
    address: 'Minara Road, Sukkur',
    hours: '03:00 PM - 03:00 AM',
    phone: '0316-3620009'
  },
  {
    id: 'larkana',
    city: 'Larkana',
    name: 'Larkana',
    address: 'Station Road near Royal Chowk, Larkana',
    hours: '01:00 PM - 02:00 AM',
    phone: '0310-9991453'
  },
  {
    id: 'nawabshah',
    city: 'Nawabshah',
    name: 'Nawabshah',
    address: 'Mohni Bazar near J. Nawabshah',
    hours: '03:00 PM - 02:00 AM',
    phone: '0302-7786765'
  },
  {
    id: 'gambat',
    city: 'Gambat',
    name: 'Gambat',
    address: 'Near Total Parco Pump and Opposite U Bank',
    hours: '12:00 PM - 01:00 AM',
    phone: '0300-8062888'
  },
  {
    id: 'khairpur',
    city: 'Khairpur',
    name: 'Khairpur',
    address: 'Khaki Shah Pull near Jan Bakers, Khairpur',
    hours: '12:00 PM - 02:00 AM',
    phone: '0315-3619775'
  },
];

export default function BranchesSection({ selectedBranch, setSelectedBranch }: BranchesSectionProps) {
  return (
    <section id="branches" className="py-20 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Our <span className="text-orange-500">Branches</span>
        </h2>
        
        <p className="text-gray-300 text-center mb-12">
          Choose your city. Delivery is available only inside each branch city.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {branches.map(branch => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
              className={`p-6 rounded-lg border transition-all text-left ${
                selectedBranch === branch.id
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-white/10 hover:border-orange-500/50'
              }`}
            >
              <h3 className="font-semibold text-white mb-2">{branch.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{branch.address}</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">
                  <span className="text-orange-400">Hours:</span> {branch.hours}
                </p>
                <p className="text-gray-400">
                  <span className="text-orange-400">Phone:</span> {branch.phone}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Delivery Coverage</h3>
          <p className="text-gray-300 mb-4">
            We deliver across 5 cities in Pakistan with 6 branches. Free delivery within city limits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">Sukkur</span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">Larkana</span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">Nawabshah</span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">Gambat</span>
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">Khairpur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
